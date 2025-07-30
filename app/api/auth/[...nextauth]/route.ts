import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/api/auth/signin",
    signOut: "/",
    error: "/",
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        // Extend the user object to include 'id'
        (session.user as typeof session.user & { id: string }).id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    redirect: async ({ url, baseUrl }) => {
      // Only redirect to dashboard if explicitly coming from signin page
      if (url === `${baseUrl}/api/auth/signin`) {
        return `${baseUrl}/user/dashboard`;
      }
      // For all other URLs, allow them to proceed normally
      if (url.startsWith(baseUrl)) {
        return url;
      }
      // Allow relative callback URLs (like GitHub OAuth callbacks)
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // For external URLs, return the base URL
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };

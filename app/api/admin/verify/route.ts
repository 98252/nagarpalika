import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    // Decode the token
    try {
      const decoded = Buffer.from(token, "base64").toString();
      const [adminId] = decoded.split(":");

      if (!adminId) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }

      // Verify admin exists
      const admin = await prisma.admin.findUnique({
        where: { id: adminId },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      if (!admin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 401 });
      }

      return NextResponse.json({ admin });
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error verifying admin:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

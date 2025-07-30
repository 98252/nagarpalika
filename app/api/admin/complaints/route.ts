import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const complaints = await prisma.complaint.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        authority: {
          select: {
            id: true,
            name: true,
            department: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

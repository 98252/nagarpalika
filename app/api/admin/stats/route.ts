import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      totalComplaints,
      pendingComplaints,
      resolvedComplaints,
      totalAuthorities,
    ] = await Promise.all([
      prisma.complaint.count(),
      prisma.complaint.count({
        where: {
          status: {
            in: ["PENDING", "ASSIGNED", "IN_PROGRESS"],
          },
        },
      }),
      prisma.complaint.count({
        where: {
          status: {
            in: ["RESOLVED", "CLOSED"],
          },
        },
      }),
      prisma.authority.count({
        where: {
          isActive: true,
        },
      }),
    ]);

    return NextResponse.json({
      totalComplaints,
      pendingComplaints,
      resolvedComplaints,
      totalAuthorities,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const body = await request.json();
    const { authorityId } = body;

    const complaint = await prisma.complaint.update({
      where: { id },
      data: {
        authorityId: authorityId || null,
        status: authorityId ? "ASSIGNED" : "PENDING",
      },
    });

    return NextResponse.json(complaint);
  } catch (error) {
    console.error("Error assigning authority:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

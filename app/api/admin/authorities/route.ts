import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    const token = request.cookies.get("adminToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify token format
    try {
      const decoded = Buffer.from(token, "base64").toString();
      const [adminId] = decoded.split(":");

      if (!adminId) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }

      // Verify admin exists
      const admin = await prisma.admin.findUnique({
        where: { id: adminId },
      });

      if (!admin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 401 });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 401 }
      );
    }

    const authorities = await prisma.authority.findMany({
      include: {
        _count: {
          select: {
            complaints: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(authorities);
  } catch (error) {
    console.error("Error fetching authorities:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check admin authentication
    const token = request.cookies.get("adminToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify token format
    try {
      const decoded = Buffer.from(token, "base64").toString();
      const [adminId] = decoded.split(":");

      if (!adminId) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }

      // Verify admin exists
      const admin = await prisma.admin.findUnique({
        where: { id: adminId },
      });

      if (!admin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 401 });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, email, department, phone } = body;

    // Validate required fields
    if (!name || !email || !department) {
      return NextResponse.json(
        { error: "Name, email, and department are required" },
        { status: 400 }
      );
    }

    // Check if authority with this email already exists
    const existingAuthority = await prisma.authority.findUnique({
      where: { email },
    });

    if (existingAuthority) {
      return NextResponse.json(
        { error: "Authority with this email already exists" },
        { status: 409 }
      );
    }

    // Create new authority
    const authority = await prisma.authority.create({
      data: {
        name,
        email,
        department,
        phone: phone || null,
        isActive: true,
      },
    });

    return NextResponse.json(authority, { status: 201 });
  } catch (error) {
    console.error("Error creating authority:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

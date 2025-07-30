const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function initAdmin() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminName = process.env.ADMIN_NAME || "System Administrator";

    if (!adminEmail || !adminPassword) {
      console.log(
        "Admin credentials not found in environment variables. Skipping admin initialization."
      );
      return;
    }

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: adminEmail },
    });

    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    // Create admin user
    const admin = await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: adminName,
      },
    });

    console.log(`Admin user created successfully: ${admin.email}`);
  } catch (error) {
    console.error("Error initializing admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the initialization
initAdmin();

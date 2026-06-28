import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

// GET route should be named GET
export async function GET() {
  const user = await client.user.findFirst();
  return NextResponse.json({ name: user?.username, email: user?.email });
}

export async function POST(req: NextRequest) {
  const { username, password, email } = await req.json();
  await client.user.create({
    data: {
      username,
      password,
      email,
    },
  });
  return NextResponse.json({
    message: `User ${username} created successfully!`,
  });
}

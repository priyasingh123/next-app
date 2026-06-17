import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

// GET route should be named GET
export function GET() {
  return Response.json({
    name: "Priya Singh",
    email: "priyasingh@example.com",
  });
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  await client.user.create({
    data: {
      username,
      password,
    },
  });
  return Response.json({
    message: `User ${username} created successfully!`,
  });
}

import { NextRequest } from "next/server";

// GET route should be named GET
export function GET() {
  return Response.json({
    name: "Priya Singh",
    email: "priyasingh@example.com",
  });
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  return Response.json({
    message: `User ${username} created successfully!`,
  });
}

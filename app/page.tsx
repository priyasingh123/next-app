import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function getUserDetails() {
  //call an external API to get user details
  //const response = await fetch("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")

  //call an internal API to get user details
  //const response = await fetch("http://localhost:3000/api/user");

  //call the database to get user details, no need to call an API, just call the database directly
  const user = await client.user.findFirst();
  console.log("user", user);
  return user;
}

// async server component
export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  const userDetails = await getUserDetails();
  console.log("userDetails", userDetails);
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.username}</div>
          <div>Email: {userDetails?.email}</div>
        </div>
      </div>
    </div>
  );
}

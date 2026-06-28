"use server";

import client from "@/db";

export async function createUser({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) {
  try {
    const user = await client.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
}

import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/auth";

export async function POST(request) {
  const { userId } = await request.json();
  const name = userId === "user-almaz" ? "Almaz" : "Bekele";

  await createSession(userId, name);
  return NextResponse.json({ success: true });
}

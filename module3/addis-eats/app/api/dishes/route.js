import { NextResponse } from "next/server";
import { DISHES } from "@/app/lib/db";

export async function GET() {
  return NextResponse.json({ data: DISHES }, { status: 200 });
}

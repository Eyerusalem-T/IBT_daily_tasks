import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const statuses = ["Cooking in Kitchen", "On the way in Addis", "Delivered"];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  return NextResponse.json({
    id,
    dish: "Kitfo Special",
    status,
    updatedAt: new Date().toLocaleTimeString(),
  });
}

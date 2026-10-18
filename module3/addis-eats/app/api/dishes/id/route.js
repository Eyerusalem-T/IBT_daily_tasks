import { NextResponse } from "next/server";
import { DISHES } from "@/app/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const dish = DISHES.find((item) => item.id === id);

  if (!dish) {
    return NextResponse.json(
      { error: { message: `Dish '${id}' not found.` } },
      { status: 404 },
    );
  }

  return NextResponse.json({ data: dish }, { status: 200 });
}

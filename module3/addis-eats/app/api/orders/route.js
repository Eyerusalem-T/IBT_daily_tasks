import { NextResponse } from "next/server";
import { DISHES, ORDERS } from "@/app/lib/db";
import { validateOrderInput } from "@/app/lib/schema";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: { message: "Invalid JSON body." } },
      { status: 400 },
    );
  }

  const { isValid, fieldErrors } = validateOrderInput(body);
  if (!isValid) {
    return NextResponse.json(
      { error: { message: "Validation failed." }, fieldErrors },
      { status: 422 },
    );
  }

  const dishExists = DISHES.some((item) => item.id === body.dishId);
  if (!dishExists) {
    return NextResponse.json(
      {
        error: { message: "Dish not found on menu." },
        fieldErrors: { dishId: `The dish '${body.dishId}' does not exist.` },
      },
      { status: 422 },
    );
  }

  const newOrder = {
    id: `order-${Date.now()}`,
    dishId: body.dishId,
    phone: body.phone,
    customerId: "user-me",
  };
  ORDERS.push(newOrder);

  return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
}

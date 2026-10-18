"use server";

import { revalidatePath } from "next/cache";
import { DISHES, ORDERS } from "@/app/lib/db";
import { validateOrderInput } from "@/app/lib/schema";

const SESSION_USER_ID = "user-me";

export async function placeOrder(previousState, formData) {
  const dishId = formData.get("dishId");
  const phone = formData.get("phone");

  const { isValid, fieldErrors } = validateOrderInput({ dishId, phone });
  if (!isValid) {
    return {
      status: "error",
      fieldErrors,
      message: "Please correct the mistakes below.",
    };
  }

  const dishExists = DISHES.some((item) => item.id === dishId);
  if (!dishExists) {
    return {
      status: "error",
      fieldErrors: { dishId: "Dish does not exist." },
      message: "Please choose an available dish.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  const newOrder = {
    id: `order-${Date.now()}`,
    dishId,
    phone,
    customerId: SESSION_USER_ID,
  };
  ORDERS.push(newOrder);

  revalidatePath("/orders");

  return {
    status: "success",
    fieldErrors: {},
    message: `Order ${newOrder.id} confirmed!`,
  };
}

export async function cancelOrder(orderId) {
  if (!SESSION_USER_ID) {
    throw new Error("401 Unauthorized: Must be signed in.");
  }

  const orderIndex = ORDERS.findIndex((o) => o.id === orderId);
  if (orderIndex === -1) {
    throw new Error("404 Not Found: Order does not exist.");
  }

  const order = ORDERS[orderIndex];
  if (order.customerId !== SESSION_USER_ID) {
    throw new Error("403 Forbidden: You do not own this order.");
  }

  ORDERS.splice(orderIndex, 1);
  revalidatePath("/orders");
  return { success: true };
}

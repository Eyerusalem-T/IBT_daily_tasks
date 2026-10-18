"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/app/lib/auth";
import { ORDERS } from "@/app/lib/db";

export async function cancelOrder(orderId) {
  // 1. Session check: Blocks signed-out attacks called via console[cite: 9]
  const session = await getSession();
  if (!session) {
    throw new Error("401 Unauthorized: You must be logged in.");
  }

  // 2. Find record
  const orderIndex = ORDERS.findIndex((o) => o.id === orderId);
  if (orderIndex === -1) {
    throw new Error("404 Not Found: Order does not exist.");
  }

  const order = ORDERS[orderIndex];

  // 3. Ownership check: Prevents cancelling another account's order[cite: 9]
  if (order.customerId !== session.userId) {
    throw new Error("403 Forbidden: You do not own this order.");
  }

  // Perform delete
  ORDERS.splice(orderIndex, 1);
  revalidatePath("/orders");

  return { success: true };
}

import Link from "next/link";
import { ORDERS } from "@/app/lib/db";
import { cancelOrder } from "@/app/actions/orderActions";

export default async function OrdersPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Active Orders</h1>
      <p style={{ color: "#555" }}>
        This page automatically updates via <code>revalidatePath</code> whenever
        an order is submitted.
      </p>

      <ul>
        {ORDERS.map((order) => (
          <li key={order.id} style={{ margin: "10px 0" }}>
            <span>
              <strong>{order.id}</strong> — Dish: {order.dishId} | Phone:{" "}
              {order.phone}
            </span>
            <form
              action={cancelOrder.bind(null, order.id)}
              style={{ display: "inline", marginLeft: "12px" }}
            >
              <button type="submit" style={{ color: "red", cursor: "pointer" }}>
                Cancel Order
              </button>
            </form>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <Link href="/checkout" style={{ color: "blue" }}>
          &larr; Back to Checkout
        </Link>
      </div>
    </main>
  );
}

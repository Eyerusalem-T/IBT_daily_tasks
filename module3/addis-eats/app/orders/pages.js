import { redirect } from "next/navigation";
import { getSession } from "@/app/lib/auth";
import { ORDERS } from "@/app/lib/db";
import { cancelOrder } from "@/app/actions/orderActions";

export default async function OrdersPage() {
  // 1. Defense in Depth: Verify session directly while rendering[cite: 9]
  const session = await getSession();
  if (!session) {
    redirect("/login?next=/orders");
  }

  // 2. Query scoped strictly to the session id (prevents IDOR vulnerabilities)[cite: 9]
  const userOrders = ORDERS.filter(
    (order) => order.customerId === session.userId,
  );

  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>My Orders (Signed in as: {session.name})</h1>

      {userOrders.length === 0 ? (
        <p>No active orders found.</p>
      ) : (
        <ul>
          {userOrders.map((order) => (
            <li key={order.id} style={{ margin: "12px 0" }}>
              <strong>{order.id}</strong> — {order.dish} ({order.price} ETB)
              <form
                action={cancelOrder.bind(null, order.id)}
                style={{ display: "inline", marginLeft: "12px" }}
              >
                <button
                  type="submit"
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Cancel Order
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

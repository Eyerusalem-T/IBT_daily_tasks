import Link from "next/link";
import OrderForm from "./OrderForm";

export default function CheckoutPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Addis Eats - Checkout</h1>
      <OrderForm />
      <div style={{ marginTop: "20px" }}>
        <Link href="/orders" style={{ color: "blue" }}>
          View Active Orders &rarr;
        </Link>
      </div>
    </main>
  );
}

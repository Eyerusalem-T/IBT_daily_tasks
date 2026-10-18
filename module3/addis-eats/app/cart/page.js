import Link from "next/link";

export default function CartPage() {
  return (
    <main>
      <h1>Your Cart</h1>
      <p>Review and finalize your order.</p>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link href="/menu" style={{ color: "blue" }}>
          Back to Menu
        </Link>
        <Link href="/checkout" style={{ color: "blue" }}>
          Checkout &rarr;
        </Link>
      </div>
    </main>
  );
}

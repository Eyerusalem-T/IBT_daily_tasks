import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>404 - Item Not Found</h2>
      <p>This dish or page is not available.</p>
      <Link href="/menu" style={{ color: "blue" }}>
        Return to Menu
      </Link>
    </main>
  );
}

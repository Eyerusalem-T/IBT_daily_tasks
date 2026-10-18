import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Addis Eats</h1>
      <p>Clean server-first food ordering architecture.</p>
      <Link href="/menu" style={{ color: "blue" }}>
        Browse Menu &rarr;
      </Link>
    </main>
  );
}

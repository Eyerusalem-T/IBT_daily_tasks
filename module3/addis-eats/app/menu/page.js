import Link from "next/link";
import CategoryShell from "./CategoryShell";
import DishList from "./DishList";

export default async function MenuPage() {
  // Direct server data fetching simulation (no hooks!)
  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <main>
      <h1>Addis Eats Menu</h1>
      <p>Traditional Ethiopian dishes loaded straight from the server.</p>

      {/* Client shell accepting server-rendered DishList through children */}
      <CategoryShell>
        <h2>Available Dishes</h2>
        <DishList />
      </CategoryShell>

      <div style={{ marginTop: "20px", display: "flex", gap: "16px" }}>
        <Link href="/" style={{ color: "blue" }}>
          &larr; Home
        </Link>
        <Link href="/cart" style={{ color: "blue" }}>
          Go to Cart &rarr;
        </Link>
      </div>
    </main>
  );
}

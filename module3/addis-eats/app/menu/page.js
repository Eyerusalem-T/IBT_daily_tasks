import Link from "next/link";
import { DISHES } from "@/app/lib/db";

export const metadata = {
  title: "Menu",
  description:
    "Explore our curated menu of slow-simmered wats, sizzling tibs, and traditional platters.",
  alternates: {
    canonical: "/menu", // Strips ?page= and ?category= parameters for canonical ranking
  },
};

export default function MenuPage() {
  return (
    <main>
      <h1>Addis Eats Menu</h1>
      <p>
        Browse our traditional specialties prepared fresh daily in Addis Ababa.
      </p>

      <ul>
        {DISHES.map((dish) => (
          <li key={dish.id} style={{ margin: "12px 0" }}>
            <Link
              href={`/menu/${dish.id}`}
              style={{ color: "blue", fontWeight: "bold" }}
            >
              {dish.name}
            </Link>
            {" — "}
            <span>{dish.price} ETB</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

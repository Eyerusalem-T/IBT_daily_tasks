import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "../AddToCartButton";

const VALID_DISHES = {
  kitfo: {
    name: "Kitfo Special",
    desc: "Minced lean beef seasoned with mitmita and niter kibbeh.",
  },
  shiro: {
    name: "Shiro Tegamino",
    desc: "Slow-simmered spiced chickpea flour stew.",
  },
  tibs: {
    name: "Beef Tibs",
    desc: "Sautéed beef chunks with onions, garlic, and rosemary.",
  },
};

export default async function DishDetailPage({ params }) {
  // Reading params directly from props without hooks
  const { id } = await params;
  const dish = VALID_DISHES[id];

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>
      <p>{dish.desc}</p>

      <AddToCartButton dishName={dish.name} />

      <div style={{ marginTop: "20px" }}>
        <Link href="/menu" style={{ color: "blue" }}>
          &larr; Back to Menu
        </Link>
      </div>
    </main>
  );
}

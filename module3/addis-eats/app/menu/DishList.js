import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

// Mock server-side data
const DISHES = [
  { id: "kitfo", name: "Kitfo Special", price: "350 ETB" },
  { id: "shiro", name: "Shiro Tegamino", price: "180 ETB" },
  { id: "tibs", name: "Beef Tibs", price: "320 ETB" },
];

export default function DishList() {
  return (
    <ul>
      {DISHES.map((dish) => (
        <li key={dish.id} style={{ margin: "12px 0" }}>
          <Link
            href={`/menu/${dish.id}`}
            style={{ color: "blue", fontWeight: "bold" }}
          >
            {dish.name}
          </Link>
          {" - "}
          {dish.price}

          {/* Client leaf component */}
          <AddToCartButton dishName={dish.name} />
        </li>
      ))}
    </ul>
  );
}

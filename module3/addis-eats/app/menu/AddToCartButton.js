"use client";

import { useCart } from "../Providers";

export default function AddToCartButton({ dishName }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(dishName)}
      style={{ marginLeft: "12px", padding: "4px 8px", cursor: "pointer" }}
    >
      + Add to Cart
    </button>
  );
}

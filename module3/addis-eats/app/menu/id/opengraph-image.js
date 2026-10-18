import { ImageResponse } from "next/og";
import { DISHES } from "@/app/lib/db";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { id } = await params;
  const dish = DISHES.find((d) => d.id === id) || {
    name: "Addis Eats Dish",
    description: "Fresh Ethiopian Food Delivery",
    price: 0,
  };

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "60px",
      }}
    >
      <div style={{ fontSize: 32, color: "#f59e0b", fontWeight: "bold" }}>
        Addis Eats • Menu Item
      </div>
      <div>
        <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 16 }}>
          {dish.name}
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", maxWidth: 900 }}>
          {dish.description}
        </div>
      </div>
      <div style={{ fontSize: 36, color: "#10b981", fontWeight: "bold" }}>
        {dish.price} ETB
      </div>
    </div>,
    { ...size },
  );
}

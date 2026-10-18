import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Addis Eats - Authentic Ethiopian Food Delivery";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          color: "#f59e0b",
          marginBottom: 20,
        }}
      >
        Addis Eats
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#e5e7eb",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Authentic Ethiopian Cuisine Delivered Hot Across Addis Ababa
      </div>
    </div>,
    { ...size },
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function OrderButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/checkout")}
      style={{ padding: "8px 16px", marginTop: "15px", cursor: "pointer" }}
    >
      Fast Checkout (via useRouter)
    </button>
  );
}

import { NextResponse } from "next/server";

const DISHES = [
  { id: "1", name: "Kitfo Special", category: "Traditional" },
  { id: "2", name: "Shiro Tegamino", category: "Vegetarian" },
  { id: "3", name: "Beef Tibs", category: "Traditional" },
  { id: "4", name: "Doro Wat", category: "Traditional" },
  { id: "5", name: "Gomen Besiga", category: "Traditional" },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  // Simulate network delay to prove keepPreviousData works
  await new Promise((resolve) => setTimeout(resolve, 400));

  const results = DISHES.filter((d) => d.name.toLowerCase().includes(q));
  return NextResponse.json({ results });
}

import { NextResponse } from "next/server";

const ALL_DISHES = [
  { id: "1", name: "Kitfo Special" },
  { id: "2", name: "Shiro Tegamino" },
  { id: "3", name: "Beef Tibs" },
  { id: "4", name: "Doro Wat" },
  { id: "5", name: "Gomen Besiga" },
  { id: "6", name: "Beyeaynetu" },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 2;

  const start = (page - 1) * pageSize;
  const items = ALL_DISHES.slice(start, start + pageSize);
  const totalPages = Math.ceil(ALL_DISHES.length / pageSize);

  return NextResponse.json({ items, page, totalPages });
}

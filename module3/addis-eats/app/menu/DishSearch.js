"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/app/lib/fetcher";

export default function DishSearch() {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // 300ms debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [term]);

  // Null key when empty to prevent requests
  const swrKey = debouncedTerm
    ? `/api/dishes/search?q=${encodeURIComponent(debouncedTerm)}`
    : null;

  const { data, isValidating } = useSWR(swrKey, fetcher, {
    keepPreviousData: true, // Prevents screen flickering between keystrokes
  });

  return (
    <div style={{ maxWidth: "400px", margin: "20px 0" }}>
      <label
        htmlFor="search"
        style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}
      >
        Search Addis Eats Menu:
      </label>
      <input
        id="search"
        type="text"
        placeholder="Type a dish (e.g. kitfo)..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />

      {isValidating && (
        <small style={{ color: "#888" }}>Updating results...</small>
      )}

      <ul style={{ marginTop: "10px" }}>
        {data?.results?.map((dish) => (
          <li key={dish.id}>
            {dish.name} ({dish.category})
          </li>
        ))}
        {debouncedTerm && data?.results?.length === 0 && (
          <li>No dishes found for &quot;{debouncedTerm}&quot;</li>
        )}
      </ul>
    </div>
  );
}

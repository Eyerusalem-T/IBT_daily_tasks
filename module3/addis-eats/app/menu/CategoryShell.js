"use client";

import { useState } from "react";

export default function CategoryShell({ children }) {
  const [highlight, setHighlight] = useState(false);

  return (
    <section
      style={{
        border: highlight ? "2px solid green" : "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "16px",
      }}
    >
      <button
        onClick={() => setHighlight(!highlight)}
        style={{ marginBottom: "12px", padding: "6px 12px", cursor: "pointer" }}
      >
        Toggle Highlight (Client Interactive Shell)
      </button>

      {/* Server-rendered content passed through children */}
      {children}
    </section>
  );
}

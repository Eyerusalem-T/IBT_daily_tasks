"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ redirectTo }) {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState("user-almaz");

  async function handleLogin(e) {
    e.preventDefault();

    await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: selectedUser }),
    });

    // Navigate to the validated safe destination[cite: 9]
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form
      onSubmit={handleLogin}
      style={{
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <label>
        <strong>Select Demo Account:</strong>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "6px" }}
        >
          <option value="user-almaz">Almaz (user-almaz)</option>
          <option value="user-bekele">Bekele (user-bekele)</option>
        </select>
      </label>

      <button
        type="submit"
        style={{
          padding: "8px",
          background: "#0070f3",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
    </form>
  );
}

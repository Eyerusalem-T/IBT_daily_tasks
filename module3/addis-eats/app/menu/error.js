"use client";

export default function MenuError({ error, reset }) {
  return (
    <div style={{ color: "red" }}>
      <h3>Failed to load menu!</h3>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}

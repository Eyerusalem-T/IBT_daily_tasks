import LoginForm from "./LoginForm";

/**
 * Helper to prevent open redirect vulnerabilities[cite: 9]
 * Only relative paths starting with a single '/' are allowed[cite: 9].
 */
function sanitizeRedirect(url) {
  if (!url || typeof url !== "string") return "/orders";

  // Must begin with '/' and NOT '//' (which browsers interpret as external protocol-relative URLs)[cite: 9]
  if (url.startsWith("/") && !url.startsWith("//")) {
    return url;
  }

  return "/orders"; // Safe default fallback
}

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const safeRedirect = sanitizeRedirect(params?.next);

  return (
    <main style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>Sign In to Addis Eats</h1>
      <p>Please log in to manage your orders.</p>
      <LoginForm redirectTo={safeRedirect} />
    </main>
  );
}

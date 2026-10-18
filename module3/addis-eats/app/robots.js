export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://addiseats.et";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/orders/", "/checkout/", "/api/"], // Disallow private & transactional routes[cite: 11]
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

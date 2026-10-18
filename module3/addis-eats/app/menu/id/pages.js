import { notFound } from "next/navigation";
import { DISHES } from "@/app/lib/db";

// 1. Dynamic metadata derived from database record[cite: 11]
export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = DISHES.find((d) => d.id === id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested menu item could not be found.",
    };
  }

  return {
    title: dish.name, // Uses root layout template -> "Kitfo Special | Addis Eats"[cite: 11]
    description: dish.description, // Distinct, human-readable per dish[cite: 11]
    openGraph: {
      title: `${dish.name} - Order Online`,
      description: dish.description,
      type: "article",
    },
    alternates: {
      canonical: `/menu/${dish.id}`, // Canonical route[cite: 11]
    },
  };
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;
  const dish = DISHES.find((d) => d.id === id);

  if (!dish) {
    notFound();
  }

  // 2. Structured Data: MenuItem JSON-LD matching page values[cite: 11]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    offers: {
      "@type": "Offer",
      price: dish.price,
      priceCurrency: "ETB", // Price and currency match exactly what displays on page[cite: 11]
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main>
      {/* Structured data script tag[cite: 11] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Exactly one descriptive h1 on the page[cite: 11] */}
      <h1>{dish.name}</h1>
      <p style={{ fontSize: "18px", color: "#444" }}>{dish.description}</p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Price: {dish.price} ETB
      </p>
    </main>
  );
}

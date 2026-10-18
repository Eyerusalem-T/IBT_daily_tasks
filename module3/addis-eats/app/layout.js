import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Required for Next.js to convert relative OG image URLs into full absolute URLs
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://addiseats.et",
  ),
  title: {
    default: "Addis Eats - Traditional Ethiopian Cuisine Delivery",
    template: "%s | Addis Eats", // e.g. "Kitfo Special | Addis Eats"
  },
  description:
    "Order hot, authentic Ethiopian dishes delivered fresh across Addis Ababa.",
  openGraph: {
    type: "website",
    locale: "en_ET",
    siteName: "Addis Eats",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0, padding: "24px", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

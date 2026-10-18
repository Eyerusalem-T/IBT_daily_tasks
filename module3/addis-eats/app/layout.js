import { Providers } from "./Providers";

export const metadata = {
  title: "Addis Eats",
  description: "Server & Client boundary demonstration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "Arial, sans-serif", padding: "24px", margin: 0 }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silent Diesel Generators | Bonhoeffer Power – Reliable Backup Power Solutions",
  description:
    "Explore Bonhoeffer Power's range of Silent Diesel Generators engineered for fuel efficiency, low-noise operation, and dependable performance. Ideal for residential, commercial, industrial, and construction applications.",
  keywords:
    "silent diesel generators, diesel generator, backup power, emergency backup generator, industrial generators, commercial generator, Bonhoeffer Power, Bonhoeffer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

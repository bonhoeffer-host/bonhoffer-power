import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonhoeffer Irrigation – Smart Irrigation Solutions for Sustainable Agriculture",
  description:
    "Bonhoeffer Irrigation delivers innovative drip irrigation, sprinkler systems, filtration, automation, and complete irrigation solutions for agriculture, horticulture, landscaping, and commercial projects.",
  keywords:
    "drip irrigation, sprinkler irrigation, irrigation system, fertigation, water pump, irrigation automation, agriculture irrigation, Bonhoeffer",
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

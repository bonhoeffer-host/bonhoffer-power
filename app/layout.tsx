import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPopup from "@/components/VideoPopup";

import {
  Inter,
  Archivo_Black,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Silent Diesel Generators | Bonhoeffer Power – Reliable Backup Power Solutions",
  description:
    "Explore Bonhoeffer Power's range of Silent Diesel Generators engineered for fuel efficiency, low-noise operation, and dependable performance.",
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
      <body
        className={`${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <VideoPopup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
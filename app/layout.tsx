import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tech InkSisanda | Graphic Design & Branding Specialists",
  description:
    "tech InkSisanda offers professional graphic design, custom branded t-shirts, fabrics, branding machines, and skills classes in graphic design and t-shirt branding.",
  keywords:
    "graphic design, branded t-shirts, branding machines, t-shirt printing, design classes, South Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}

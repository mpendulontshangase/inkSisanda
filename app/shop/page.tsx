"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shirt, Scissors, Printer, Monitor, Pen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    icon: Shirt,
    category: "Apparel",
    name: "Plain T-Shirts",
    description:
      "High-quality blank t-shirts available in all sizes and a wide range of colours. Perfect for printing and branding. Bulk orders welcome.",
    badge: "Bulk Discounts",
    badgeColor: "bg-green-500",
    features: ["100% Cotton", "All Sizes (XS–4XL)", "Multiple Colours", "Bulk Orders"],
  },
  {
    icon: Pen,
    category: "Apparel",
    name: "Branded T-Shirts",
    description:
      "Custom branded t-shirts with your logo, design, or text. We handle design and printing in-house for consistent, professional results.",
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    features: ["Custom Print", "Full Colour", "Fast Turnaround", "Logo Placement"],
  },
  {
    icon: Scissors,
    category: "Fabrics",
    name: "Other Fabrics",
    description:
      "A variety of fabric types for different branding needs — golf shirts, hoodies, caps, tote bags, workwear, and more.",
    badge: "Wide Range",
    badgeColor: "bg-blue-500",
    features: ["Golf Shirts", "Hoodies & Caps", "Tote Bags", "Workwear"],
  },
  {
    icon: Printer,
    category: "Machines",
    name: "Heat Press Machine",
    description:
      "Professional heat press machines for t-shirt printing. Suitable for small businesses and large-scale operations.",
    badge: "Top Pick",
    badgeColor: "bg-purple-500",
    features: ["Digital Control", "Even Heat", "Multiple Sizes", "Warranty Included"],
  },
  {
    icon: Monitor,
    category: "Machines",
    name: "DTF Printer",
    description:
      "Direct-to-Film printers for high-quality, full-colour transfers on any fabric. No minimum quantity required.",
    badge: "Latest Tech",
    badgeColor: "bg-orange-500",
    features: ["Full Colour Print", "No Minimums", "All Fabric Types", "Washfast Ink"],
  },
  {
    icon: Scissors,
    category: "Machines",
    name: "Vinyl Cutter",
    description:
      "Precision vinyl cutting machines for custom lettering, logos, and designs. Ideal for signage and garment branding.",
    badge: "Precision Cut",
    badgeColor: "bg-red-500",
    features: ["Precision Cutting", "Multiple Materials", "Software Included", "Easy to Use"],
  },
];

const categories = ["All", "Apparel", "Fabrics", "Machines"];

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gray-950 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm font-medium mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                Our Products
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 mb-6 leading-tight">
                Shop
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Quality apparel, fabrics, and professional branding machines.
                Everything you need to create and sell branded products.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-medium px-5 py-2 rounded-full text-sm transition-all border ${
                    active === cat
                      ? "bg-orange-500 border-orange-500 text-black"
                      : "bg-gray-900 border-orange-500/30 text-white hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:-translate-y-1"
                >
                  <div className="bg-black h-40 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
                    <product.icon className="w-16 h-16 text-orange-500 relative z-10" />
                    <span
                      className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {product.badge}
                    </span>
                    <div className="absolute bottom-3 left-4 text-orange-400 text-xs font-bold uppercase tracking-widest">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-black font-black text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-6">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-xs">
                          <span className="text-orange-500">●</span>
                          <span className="text-gray-600">{f}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/27678297792"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-orange-500 hover:bg-orange-600 text-black font-black py-2.5 rounded-full text-sm transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-10 text-sm">
              All prices available on request. Bulk and wholesale pricing available.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

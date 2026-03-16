"use client";
import { Shirt, Scissors, Printer, Monitor, Pen } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";

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

export default function Shop() {
  return (
    <section id="shop" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Our Products
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-black mt-2 mb-4">
            Shop
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Quality apparel, fabrics, and professional branding machines. Everything you need to create and sell branded products.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
          </div>
          </AnimateIn>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-gray-900 text-white border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500 hover:text-black cursor-pointer font-medium px-5 py-2 rounded-full text-sm transition-all"
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:-translate-y-1 group"
            >
              {/* Icon area */}
              <div className="bg-black h-40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
                <product.icon className="w-16 h-16 text-orange-500 relative z-10" />
                <div className="absolute bottom-3 left-4 text-orange-400 text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-black font-black text-xl mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs">
                      <span className="text-orange-500">●</span>
                      <span className="text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 mt-10 text-sm">
          All prices available on request. Bulk and wholesale pricing available. Contact us to place an order.
        </p>
      </div>
    </section>
  );
}

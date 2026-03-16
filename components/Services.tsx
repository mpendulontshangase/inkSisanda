"use client";
import { Palette, Shirt, GraduationCap, Printer } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Professional graphic design services for logos, posters, banners, social media content, and full brand identity packages. We make your brand stand out.",
    features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Design"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shirt,
    title: "Custom T-Shirts & Apparel",
    description:
      "High-quality plain and branded t-shirts, hoodies, and other fabrics. Whether you need bulk orders or single custom prints, we've got you covered.",
    features: ["Plain T-Shirts", "Branded T-Shirts", "Hoodies & Sweaters", "Other Fabrics"],
    color: "from-orange-600 to-orange-700",
  },
  {
    icon: GraduationCap,
    title: "Branding Classes",
    description:
      "Hands-on classes teaching you everything about garment branding and printing. Learn from professionals and leave ready to start your own business.",
    features: ["Heat Press Techniques", "Screen Printing", "DTF & Vinyl Printing", "Business Tips"],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Printer,
    title: "Branding Machines",
    description:
      "We sell professional-grade branding and printing machines for businesses looking to bring their production in-house. Top brands, competitive prices.",
    features: ["Heat Press Machines", "DTF Printers", "Screen Print Kits", "Vinyl Cutters"],
    color: "from-orange-700 to-orange-800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-black mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From concept to finished product, tech InkSisanda provides end-to-end
            graphic design and branding solutions.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
          </div>
          </AnimateIn>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              <div className="p-6">
                <div className="mb-4 w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

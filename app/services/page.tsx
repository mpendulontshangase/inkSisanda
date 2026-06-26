"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, Shirt, GraduationCap, Printer, Users, BookOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Professional graphic design services for logos, posters, banners, social media content, and full brand identity packages. We make your brand stand out.",
    features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Design"],
  },
  {
    icon: Shirt,
    title: "Custom T-Shirts & Apparel",
    description:
      "High-quality plain and branded t-shirts, hoodies, and other fabrics. Whether you need bulk orders or single custom prints, we've got you covered.",
    features: ["Plain T-Shirts", "Branded T-Shirts", "Hoodies & Sweaters", "Other Fabrics"],
  },
  {
    icon: GraduationCap,
    title: "Branding Classes",
    description:
      "Hands-on classes teaching you everything about garment branding and printing. Learn from professionals and leave ready to start your own business.",
    features: ["Heat Press Techniques", "Screen Printing", "DTF & Vinyl Printing", "Business Tips"],
  },
  {
    icon: Printer,
    title: "Branding Machines",
    description:
      "We sell professional-grade branding and printing machines for businesses looking to bring their production in-house. Top brands, competitive prices.",
    features: ["Heat Press Machines", "DTF Printers", "Screen Print Kits", "Vinyl Cutters"],
  },
  {
    icon: Users,
    title: "Networking Events",
    description:
      "We host dynamic networking events that bring entrepreneurs, creatives, and business owners together to connect, collaborate, and grow their networks.",
    features: ["Business Networking", "Creative Meetups", "Industry Mixers", "Community Building"],
  },
  {
    icon: BookOpen,
    title: "Seminars",
    description:
      "Informative and inspiring seminars covering branding, entrepreneurship, and business development. Gain practical knowledge to take your business to the next level.",
    features: ["Branding Seminars", "Business Development", "Entrepreneurship", "Guest Speakers"],
  },
];

export default function ServicesPage() {
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
                What We Do
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                From concept to finished product, InkSisanda Tech provides
                end-to-end graphic design and branding solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-gray-200 rounded-3xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/30"
                >
                  <div className="mb-4 w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-gray-900 font-black text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-black font-black text-3xl mb-2">Ready to get started?</h2>
              <p className="text-black/70 max-w-lg">
                Talk to us about your project and we'll find the right solution for you.
              </p>
            </div>
            <a
              href="https://wa.me/27678297792"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white font-black px-8 py-4 rounded-full whitespace-nowrap transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

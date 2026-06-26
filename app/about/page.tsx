"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BadgeCheck, Lightbulb, Users, Zap, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  { icon: BadgeCheck, title: "Quality First", desc: "We never compromise on the quality of our products and services." },
  { icon: Lightbulb, title: "Innovation", desc: "Always adopting the latest design tools and printing technologies." },
  { icon: Users, title: "Community", desc: "We empower local communities through skills development and training." },
  { icon: Zap, title: "Fast Turnaround", desc: "We understand deadlines and deliver on time, every time." },
];

export default function AboutPage() {
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
                About Us
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 mb-6 leading-tight">
                Who We Are
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                A proudly South African creative and branding company built on
                quality, community, and the passion to help people grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                InkSisanda Tech is a proudly South African creative and branding
                company specialising in graphic design, custom apparel, and
                professional branding solutions. We were founded with a vision to
                make high-quality branding accessible to businesses and
                individuals alike.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-16">
                Beyond products and services, we are passionate about skills
                development. Our graphic design and t-shirt branding classes have
                helped hundreds of people launch their own creative businesses and
                careers.
              </p>

              {/* Values */}
              <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-wide">
                Our Values
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-gray-50 hover:bg-orange-500/10 border border-gray-200 hover:border-orange-500/30 rounded-2xl p-6 transition-all"
                  >
                    <div className="mb-3">
                      <v.icon className="w-7 h-7 text-orange-500" />
                    </div>
                    <div className="text-gray-900 font-black text-base mb-2">{v.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{v.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-black font-black text-3xl mb-2">Let&apos;s work together</h2>
              <p className="text-black/70 max-w-lg">
                Whether you need design work, branded apparel, or want to learn the craft — we&apos;re here for it.
              </p>
            </div>
            <a
              href="https://wa.me/27678297792"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white font-black px-8 py-4 rounded-full whitespace-nowrap transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

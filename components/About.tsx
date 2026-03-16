"use client";
import { BadgeCheck, Lightbulb, Users, Zap } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";

const values = [
  { icon: BadgeCheck, title: "Quality First", desc: "We never compromise on the quality of our products and services." },
  { icon: Lightbulb, title: "Innovation", desc: "Always adopting the latest design tools and printing technologies." },
  { icon: Users, title: "Community", desc: "We empower local communities through skills development and training." },
  { icon: Zap, title: "Fast Turnaround", desc: "We understand deadlines and deliver on time, every time." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <AnimateIn>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-2 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              tech InkSisanda is a proudly South African creative and branding
              company specialising in graphic design, custom apparel, and
              professional branding solutions. We were founded with a vision to
              make high-quality branding accessible to businesses and
              individuals alike.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Beyond products and services, we are passionate about skills
              development. Our graphic design and t-shirt branding classes have
              helped hundreds of people launch their own creative businesses and
              careers.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white hover:bg-orange-500/10 border border-gray-200 hover:border-orange-500/30 rounded-2xl p-4 transition-all"
                >
                  <div className="mb-2"><v.icon className="w-6 h-6 text-orange-500" /></div>
                  <div className="text-gray-900 font-bold text-sm mb-1">{v.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

"use client";
import { Palette, Shirt, BarChart2 } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";

const classes = [
  {
    icon: Palette,
    tag: "Design",
    title: "Graphic Design Masterclass",
    description:
      "Learn the fundamentals and advanced techniques of graphic design. Covers digital tools, typography, colour theory, layout, and building a professional portfolio.",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    modules: [
      "Design Principles & Colour Theory",
      "Adobe Photoshop & Illustrator",
      "Typography & Layout Design",
      "Logo & Brand Identity Design",
      "Print & Digital Media",
      "Portfolio Building",
    ],
    price: "Contact for Pricing",
    highlight: false,
  },
  {
    icon: Shirt,
    tag: "Branding",
    title: "T-Shirt Branding & Printing",
    description:
      "A hands-on class covering all aspects of garment branding. From artwork preparation to machine operation — you'll leave ready to start your own business.",
    duration: "4 Weeks",
    level: "All Levels",
    modules: [
      "Artwork Preparation & Setup",
      "Heat Press Techniques",
      "Screen Printing Basics",
      "DTF & Vinyl Printing",
      "Quality Control",
      "Business & Pricing Tips",
    ],
    price: "Contact for Pricing",
    highlight: false,
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Learn From the Best
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-2 mb-4">
            Our Classes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Gain real skills taught by industry professionals. Whether you want
            to start a career or grow a business, our classes give you the tools
            to succeed.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
          </div>
          </AnimateIn>

        {/* Class cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 transition-all hover:scale-[1.02]"
            >


              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gray-100">
                    <cls.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  <div>
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                      {cls.tag}
                    </span>
                    <h3 className="text-gray-900 font-black text-2xl mt-1">
                      {cls.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {cls.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-orange-500 text-sm">⏱</span>
                    <span className="text-gray-600 text-sm">{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <BarChart2 className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 text-sm">{cls.level}</span>
                  </div>
                </div>

                {/* Modules */}
                <div className="mb-8">
                  <div className="text-gray-800 font-bold text-sm mb-3 uppercase tracking-wide">
                    What You&apos;ll Learn
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {cls.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2 text-sm">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-600">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-end">
                  <a
                    href="#contact"
                    className="font-bold px-6 py-2.5 rounded-full text-sm transition-all border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-12 bg-orange-500 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-black font-black text-2xl">
              Ready to learn?
            </h3>
            <p className="text-black/70 mt-1">
              Group discounts available for 5+ students. Corporate training also
              offered.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 rounded-full whitespace-nowrap transition-colors"
          >
            Book Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, Shirt, BarChart2, Clock, Users, Star, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const classes = [
  {
    icon: Palette,
    tag: "Design",
    title: "Graphic Design Masterclass",
    description:
      "This comprehensive 8-week course takes you from design basics all the way through to professional-level work. You'll get hands-on time with industry-standard software, work on real briefs, and leave with a portfolio that stands out.",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    groupSize: "Max 10 students",
    rating: "4.9",
    modules: [
      "Design Principles & Colour Theory",
      "Adobe Photoshop & Illustrator",
      "Typography & Layout Design",
      "Logo & Brand Identity Design",
      "Print & Digital Media",
      "Portfolio Building",
    ],
    outcomes: [
      "Design logos and brand identities from scratch",
      "Work confidently in Adobe Photoshop and Illustrator",
      "Understand colour, typography, and layout",
      "Build a professional portfolio ready for clients",
    ],
    price: "Contact for Pricing",
    images: [
      { src: "/Images/s-pic-1.jpeg", alt: "Graphic design workspace" },
      { src: "/Images/s-pic-2.jpeg", alt: "Students working on design projects" },
      { src: "/Images/s-pic-3.jpeg", alt: "Logo design examples" },
    ],
  },
  {
    icon: Shirt,
    tag: "Branding",
    title: "T-Shirt Branding & Printing",
    description:
      "This 4-week practical course gets you hands-on with every piece of equipment from day one. Whether you want to start a printing business, add printing to your existing skills, or just learn the craft — we cover everything end-to-end with real materials and machines.",
    duration: "4 Weeks",
    level: "All Levels",
    groupSize: "Max 8 students",
    rating: "5.0",
    modules: [
      "Artwork Preparation & Setup",
      "Heat Press Techniques",
      "Screen Printing Basics",
      "DTF & Vinyl Printing",
      "Quality Control",
      "Business & Pricing Tips",
    ],
    outcomes: [
      "Operate heat press, DTF, and screen printing machines",
      "Prepare and size artwork for garment printing",
      "Understand fabric types and print compatibility",
      "Price jobs and set up a profitable printing business",
    ],
    price: "Contact for Pricing",
    images: [
      { src: null, alt: "Heat press machine in action" },
      { src: null, alt: "Printed t-shirt samples" },
      { src: null, alt: "DTF printing setup" },
    ],
  },
];

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div className="w-full h-52 bg-gray-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
      <svg
        className="w-10 h-10 text-gray-300 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-gray-400 text-xs text-center px-4">{alt}</p>
      <p className="text-gray-300 text-xs mt-1">Replace with your image</p>
    </div>
  );
}

export default function ClassesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section
          className="relative py-20 px-4"
          style={{
            backgroundImage: "url('/Images/s-pic-3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-950/80" />
          <div className="relative z-10 max-w-7xl mx-auto">
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
                Learn From the Best
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 mb-6 leading-tight">
                Our Classes
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Gain real, job-ready skills taught by working industry
                professionals. Whether you want to start a career or grow a
                business — we give you the tools and the confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Classes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {classes.map((cls, i) => (
              <div key={cls.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Class header */}
                  <div className="flex items-start gap-4 mb-10">
                    <div className="p-4 rounded-2xl bg-orange-50 shrink-0">
                      <cls.icon className="w-10 h-10 text-orange-500" />
                    </div>
                    <div>
                      <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                        {cls.tag}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">
                        {cls.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: details */}
                    <div>
                      {/* Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        {[
                          { icon: Clock, label: cls.duration },
                          { icon: BarChart2, label: cls.level },
                          { icon: Users, label: cls.groupSize },
                          { icon: Star, label: `${cls.rating} / 5.0` },
                        ].map((s) => (
                          <div
                            key={s.label}
                            className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center gap-2 text-center"
                          >
                            <s.icon className="w-5 h-5 text-orange-500" />
                            <span className="text-gray-700 text-sm font-medium leading-tight">
                              {s.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        {cls.description}
                      </p>

                      {/* Modules */}
                      <div className="mb-8">
                        <h3 className="text-gray-900 font-black text-base mb-4 uppercase tracking-wide">
                          What You&apos;ll Cover
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {cls.modules.map((mod) => (
                            <div key={mod} className="flex items-start gap-3">
                              <span className="text-orange-500 font-bold mt-0.5">✓</span>
                              <span className="text-gray-600 text-sm">{mod}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div className="mb-10">
                        <h3 className="text-gray-900 font-black text-base mb-4 uppercase tracking-wide">
                          What You&apos;ll Be Able to Do
                        </h3>
                        <div className="space-y-3">
                          {cls.outcomes.map((outcome) => (
                            <div
                              key={outcome}
                              className="flex items-start gap-3 bg-orange-50 rounded-xl px-4 py-3"
                            >
                              <span className="text-orange-500 font-black mt-0.5">→</span>
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href="https://wa.me/27678297792"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 hover:bg-orange-600 text-black font-black px-8 py-3.5 rounded-full transition-colors text-sm"
                        >
                          Enroll Now
                        </a>
                        <span className="text-gray-400 text-sm">{cls.price}</span>
                      </div>
                    </div>

                    {/* Right: image gallery */}
                    <div className="space-y-4">
                      {cls.images.map((img, j) =>
                        img.src ? (
                          <img
                            key={j}
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-52 object-cover rounded-2xl"
                          />
                        ) : (
                          <ImagePlaceholder key={j} alt={img.alt} />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>

                {i < classes.length - 1 && (
                  <div className="mt-24 border-t border-gray-100" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Group / corporate CTA */}
        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-black font-black text-3xl mb-2">
                Group & Corporate Training
              </h2>
              <p className="text-black/70 max-w-lg">
                Bringing a team? We offer group discounts for 5+ students and
                tailored corporate training packages.
              </p>
            </div>
            <a
              href="https://wa.me/27678297792"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white font-black px-8 py-4 rounded-full whitespace-nowrap transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

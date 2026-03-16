"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #f97316 0, #f97316 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Orange glow accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-medium">
                Graphic Design & Branding Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-tight mb-6 flex items-center gap-0"
            >
              <span className="text-xs sm:text-base text-gray-900 -rotate-90 whitespace-nowrap origin-center -mr-3 sm:-mr-4">tech</span>
              <span className="block">
                <span className="text-orange-500 text-6xl sm:text-6xl lg:text-6xl xl:text-7xl">Ink</span>
                <span className="text-gray-900 text-4xl sm:text-4xl lg:text-4xl xl:text-5xl relative">
                  Sisanda
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-500 rounded-full" />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray-500 text-sm sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed"
            >
              From custom branded apparel to professional graphic design &mdash;
              we bring your brand to life. Offering premium fabrics, branding
              machines, and expert-led classes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="border border-orange-500/50 hover:border-orange-500 text-gray-800 hover:text-orange-500 font-bold px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base transition-all"
              >
                Get a Quote
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-4 sm:gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              {[
                { value: "25+", label: "Clients Served" },
                { value: "100+", label: "Designs Created" },
                { value: "15+", label: "Students Trained" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-xl sm:text-3xl font-black text-orange-500">{stat.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center -mt-16"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[420px] h-[420px] rounded-full border border-orange-500/20" />
              <div className="absolute w-[340px] h-[340px] rounded-full border border-orange-500/30" />
              <div
                className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-orange-500/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="absolute w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20" />
              <img
                src="/Images/techink-hero.png"
                alt="TechInk Hero"
                className="relative z-10 w-full max-w-2xl object-contain scale-110 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
}

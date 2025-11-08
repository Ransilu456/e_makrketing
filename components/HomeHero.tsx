"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-gradient-to-br from-white via-[#f8f9ff] to-[#e8fce6] overflow-hidden">
      
      {/* --- LEFT CONTENT --- */}
      <div className="flex flex-col max-w-xl text-left z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="small-header tracking-wide mb-3"
        >
          With us achieve unlimited & maximum results
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="big-header leading-tight font-bold"
        >
          Your Entire{" "}
          <span className="text-secondary-text">Dev</span> Team
          <br />
          <span className="inline-flex gap-2">
            All in One
            <span className="small-header-main italic">
              Solution
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-gray-700 leading-relaxed max-w-md"
        >
          We design & develop stunning websites, mobile apps, and marketing strategies that drive growth and make your business stand out in the digital world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-filled rounded-full px-8 py-3 shadow-md"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline px-8 py-3 rounded-full backdrop-blur-md"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* --- RIGHT ILLUSTRATION / IMAGE --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="relative mt-12 md:mt-0 w-full md:w-[480px] h-[580px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4AEA45]/10 via-white/30 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg"></div>
        <Image
          src="/hero-illustration.svg"
          alt="Hero Illustration"
          width={400}
          height={400}
          className="relative z-10 drop-shadow-xl"
        />
      </motion.div>

      {/* --- BACKGROUND GLOW EFFECTS --- */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#4AEA45]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 blur-[100px] rounded-full"></div>
    </section>
  );
}

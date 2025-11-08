'use client';
import { motion } from "framer-motion";
import { ImageWithFallback } from "./error/ImageWithFallback";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-16 bg-gradient-to-br from-white via-[#f8f9ff] to-[#e8fce6] overflow-hidden">

      {/* --- LEFT CONTENT --- */}
      <div className="flex flex-col max-w-xl text-left z-10 w-full md:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm sm:text-base md:text-lg font-medium tracking-wide mb-3"
        >
          With us achieve unlimited & maximum results
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Your Entire <span className="text-secondary-text">Dev</span> Team
          <br />
          <span className="inline-flex gap-2">
            All in One
            <span className="text-lg sm:text-xl md:text-2xl italic font-medium">
              Solution
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg max-w-md"
        >
          We design & develop stunning websites, mobile apps, and marketing strategies that drive growth and make your business stand out in the digital world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-filled rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-md w-full sm:w-auto"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base backdrop-blur-md w-full sm:w-auto"
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
        className="relative mt-12 md:mt-0 w-full md:w-[480px] h-[380px] sm:h-[450px] md:h-[580px] flex items-center justify-center"
      >
        <motion.div
          className="relative lg:block w-full h-full"
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="absolute -top-10 -left-10 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-emerald-400/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-white/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 mt-40"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjUxNTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Digital Marketing Workspace"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-32 -right-4 rotate-12 bg-white rounded-xl shadow-lg p-3 text-xs sm:text-sm md:text-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀 Innovation
          </motion.div>

          <motion.div
            className="absolute bottom-14 -left-4 bg-white rounded-xl shadow-lg p-3 text-xs sm:text-sm md:text-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            ✨ Excellence
          </motion.div>
        </motion.div>
      </motion.div>

      {/* --- BACKGROUND GLOW EFFECTS --- */}
      <div className="absolute -top-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 bg-[#4AEA45]/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-black/10 blur-[80px] rounded-full"></div>
    </section>
  );
}

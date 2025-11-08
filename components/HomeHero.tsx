"use client";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-white overflow-hidden">
      
      {/* --- LEFT CONTENT --- */}
      <div className="flex flex-col max-w-xl text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="small-header tracking-wide mb-4"
        >
          With us archive unlimited & maximum results
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="big-header leading-[1.1]"
        >
          Your Entire{" "}
          <span className="text-secondary-text">Dev</span> Team
          <br />

          <div className="flex items-center justify-between">
            All in one
            <span className="small-header-main italic">
              Solution
            </span>
          </div>
        </motion.h1>

        <div className="flex items-center gap-4 mt-8">
          <motion.button
            className="btn-outline rounded-full px-6 py-2"
          >
            Get Started
          </motion.button>
          <motion.button
            className="btn-filled px-6 py-2.5 rounded-full"
          >
            Contact
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-12 md:mt-0 w-full md:w-[400px] h-[580px] bg-gray-200 border border-gray-300 rounded-md shadow-sm"
      >
      </motion.div>

    </section>
  );
}

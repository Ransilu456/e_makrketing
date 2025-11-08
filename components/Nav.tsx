'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">

        {/* --- Logo --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-text font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide"
        >
          E <span className="text-secondary-text">Marketing</span> Paradice
        </motion.div>

        {/* --- Desktop Menu --- */}
        <ul className="hidden md:flex space-x-4 sm:space-x-6 lg:space-x-8 text-primary-text font-medium text-sm sm:text-base lg:text-lg">
          <li><Link href="#home" className="hover:text-secondary-text transition">Home</Link></li>
          <li><Link href="#about" className="hover:text-secondary-text transition">About</Link></li>
          <li><Link href="#services" className="hover:text-secondary-text transition">Services</Link></li>
          <li><Link href="#contact" className="hover:text-secondary-text transition">Contact</Link></li>
        </ul>

        {/* --- CTA Button (desktop) --- */}
        <Link
          href="#contact"
          className="hidden md:inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-full btn-filled text-xs sm:text-sm md:text-base font-medium transition-transform duration-300 hover:scale-105"
        >
          Contact us
        </Link>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden text-primary-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 text-primary-text font-medium text-lg"
        >
          <Link href="#home" onClick={() => setIsOpen(false)} className="text-center py-2 hover:text-secondary-text transition text-lg sm:text-xl">
            Home
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-center py-2 hover:text-secondary-text transition text-lg sm:text-xl">
            About
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="text-center py-2 hover:text-secondary-text transition text-lg sm:text-xl">
            Services
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-center py-2 hover:text-secondary-text transition text-lg sm:text-xl">
            Contact
          </Link>
          <Link
            href="#contact"
            className="px-4 sm:px-5 py-2 sm:py-3 rounded-full btn-filled text-sm sm:text-base font-medium mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </header>
  );
}

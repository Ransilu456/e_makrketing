"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* --- Logo --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-text font-(--font-section-header) text-2xl tracking-wide"
        >
          E <span className="text-secondary-text">Marketing</span> Paradice
        </motion.div>

        {/* --- Desktop Menu --- */}
        <ul className="hidden md:flex space-x-8 text-primary-text font-(--font-small-header) text-lg">
          <li><Link href="#home" className="hover:text-secondary-text transition">Home</Link></li>
          <li><Link href="#about" className="hover:text-secondary-text transition">About</Link></li>
          <li><Link href="#services" className="hover:text-secondary-text transition">Services</Link></li>
          <li><Link href="#contact" className="hover:text-secondary-text transition">Contact</Link></li>
        </ul>

        {/* --- CTA Button --- */}
        <Link
          href="#contact"
          className="hidden md:block px-5 py-3 rounded-full btn-filled text-sm font-medium transition-transform duration-300 hover:scale-105"
        >
          Contact us
        </Link>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden text-primary-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center gap-4 py-6 bg-white/95 backdrop-blur-lg text-primary-text font-(--font-small-header) text-lg shadow-lg"
        >
          <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="#services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full btn-filled text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </motion.ul>
      )}
    </header>
  );
}

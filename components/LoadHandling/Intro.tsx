"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./menu";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
    {isVisible && ( 
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
        >
          <Menu/>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="big-header"
          >
            E Marketing Paradice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="small-header text-secondary-text mt-4"
          >
            We Design & Develop Digital Solutions
          </motion.p>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

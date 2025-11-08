"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-white text-black" id="about">
            {/* --- SECTION TITLE --- */}

            <div className="flex items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="section-header-main mb-6 mr-4"
                >
                    About
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="section-header text-secondary-text mb-6 mr-4"
                >
                    Us
                </motion.h1>
            </div>

            {/* --- UNDERLINE / DECORATIVE ELEMENT --- */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[3px] bg-secondary-text mb-8"
            ></motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl text-lg md:text-xl text-primary-text font-light mb-6  leading-relaxed"
            >
                E Marketing Paradice is a creative digital agency specializing in web design, mobile app development, and business marketing across major platforms like Facebook, TikTok, and YouTube.
                We help brands grow by combining technology, creativity, and strategy to build powerful digital experiences that drive real results.

                From stunning websites and user-friendly mobile apps to viral marketing campaigns — we deliver everything your business needs to stand out and succeed online.
                Our team of designers, developers, and marketers work hand-in-hand to ensure every project reflects your brand’s unique identity while engaging your audience effectively.
                At E Marketing Paradice, we don’t just build digital products — we build connections, credibility, and growth for your business.
            </motion.p>

            {/* --- QUAOTE TEXT --- */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl text-lg md:text-xl text-primary-text font-(--font-small-header) italic leading-relaxed"
            >
                &quot; Creative Minds. Digital Excellence.&quot;
            </motion.p>
        </section>
    );
}

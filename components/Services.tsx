"use client";
import { motion } from "framer-motion";
import ServiceCard from "./card/ServiceCard";

export default function Services() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-white text-black" id="services">

            <div className="flex items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="section-header-main mb-6 mr-4"
                >
                    Our
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="section-header text-secondary-text mb-6 mr-4"
                >
                    Services
                </motion.h1>
            </div>

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
                At E Marketing Paradice, we bring ideas to life through design, technology, and digital strategy.Whether you’re launching a new brand or scaling your online presence, our team delivers creative, customized solutions that make your business stand out.
            </motion.p>

            <div className="flex flex-row gap-5">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl text-lg md:text-xl text-primary-text font-(--font-small-header) italic leading-relaxed"
            >
                &quot; Your One-Stop Digital Partner. &quot;
            </motion.p>
        </section>
    );
}

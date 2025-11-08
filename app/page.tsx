'use client'

import { useState } from "react";
import Navbar from "@/components/Nav";
import HomeHero from "@/components/HomeHero";
import Trusted from "@/components/Trusted";
import WhyChooseUS from "@/components/Why";
import About from "@/components/About";
import Services from "@/components/Services";
import Intro from "@/components/LoadHandling/Intro"; 

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {showSplash ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Intro key="splash" onComplete={handleSplashComplete} />
        </div>
      ) : (
        <main className="w-full">
          {/* Navbar */}
          <header className="w-full sticky top-0 z-50">
            <Navbar />
          </header>

          {/* Hero Section */}
          <section className="w-full">
            <HomeHero />
          </section>

          {/* Trusted / Clients Section */}
          <section className="w-full">
            <Trusted />
          </section>

          {/* Why Choose Us Section */}
          <section className="w-full">
            <WhyChooseUS />
          </section>

          {/* About Section */}
          <section className="w-full">
            <About />
          </section>

          {/* Services Section */}
          <section className="w-full">
            <Services />
          </section>
        </main>
      )}
    </div>
  );
}

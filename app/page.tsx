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
    <>
      {showSplash ? (
        <Intro key="splash" onComplete={handleSplashComplete} />
      ) : (
        <>
          <Navbar />
          <HomeHero />
          <Trusted />
          <WhyChooseUS />
          <About />
          <Services />
        </>
      )}
    </>
  );
}

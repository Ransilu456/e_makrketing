import About from "@/components/About";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Nav";
import Services from "@/components/Services";
import Trusted from "@/components/Trusted";
import WhyChooseUS from "@/components/Why";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Trusted />
      <WhyChooseUS />
      <About />
      <Services />
    </>
  );
}

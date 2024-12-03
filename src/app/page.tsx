"use client";

import About from "@/components/landing/About";
import HeroV2 from "@/components/landing/HeroV2";
import Skill from "@/components/landing/Skill";
import Navbar from "@/components/layout/Navbar";
import Marque from "@/components/Marque";
import { useSection } from "@/zustand/useNav";
import { useEffect } from "react";

export default function Home() {
  const { section } = useSection();

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToSection(section);
  }, [section]);
  return (
    <main className="relative overflow-hidden bg-gradient-to-r from-black to-brand-dark">
      <div id="home" className="relative">
        <Navbar />
        {/* <Hero /> */}
        <HeroV2 />
        <Marque />
      </div>
      <div className="pb-10">
        <About />
        <Skill />
      </div>
    </main>
  );
}

"use client";

import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
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
    <main className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand-grey">
      <div id="home" className="min-h-screen  relative">
        <Navbar />
        <Hero />
        <Marque />
      </div>
      <About />
    </main>
  );
}

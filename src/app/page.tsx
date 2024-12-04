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
    <main className="relative overflow-hidden bg-black">
      <div id="home" className="relative h-screen">
        <video
          autoPlay
          loop
          // playsInline
          muted
          className="object-cover w-full h-full absolute pointer-events-none "
          src={`https://videos.pexels.com/video-files/29607597/12742138_1920_1080_30fps.mp4`}
        ></video>
        <div className="relative bg-gradient-to-r from-black/90 to-brand-dark/80 h-full">
          <Navbar />
          <HeroV2 />
          <Marque />
        </div>
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-black to-black/0"></div>
      </div>
      <div className="pb-10">
        <About />
        <Skill />
      </div>
    </main>
  );
}

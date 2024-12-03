import { ABOUTMARQUEE } from "@/constants/appConstant";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Marque() {
  return (
    <div className="relative w-full -rotate-2 overflow-hidden">
      <div className="">
        <div className="w-1/6 z-10 h-full absolute left-0 top-0 bg-gradient-to-r from-black to-black/0"></div>
        <Marquee
          speed={65}
          className="h-32 pointer-events-none flex gap-12 lg:gap-[180px] overflow-visible"
        >
          <div className="flex gap-12 lg:gap-[180px] lg:text-5xl">
            {ABOUTMARQUEE.map((item, i) => (
              <p key={i} className="p-4 bg-white rounded-full">
                {item}
              </p>
            ))}
          </div>
        </Marquee>
        <div className="w-1/6 z-10 h-full bg absolute top-0 right-0 bg-gradient-to-l from-brand-dark to-brand-dark/0"></div>
      </div>
    </div>
  );
}

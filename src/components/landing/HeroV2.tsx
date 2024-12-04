import { ABOUTME } from "@/constants/appConstant";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroV2() {
  return (
    <div className="overflow-hidden relative h-[75vh] md:h-[50vh] lg:h-[70vh]">
      <div className="absolute w-full h-full grid md:grid-cols-2">
        <div className="relative aspect-square rounded-full overflow-hidden w-full lg:w-fit lg:h-full">
          <Image
            alt="mochamad ramadhani"
            src={"/assets/photoHero2.png"}
            quality={100}
            fill
            className="object-cover z-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="font-black grid place-items-center font-montserrat opacity-90 w-full h-2/3 bg-clip-text text-transparent text-center lg:text-start text-4xl md:text-6xl lg:text-9xl bg-cover bg-center bg-no-repeat bg-[url(/assets/overlay.jpg)]">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                "I'm Mch Rama",
                1000,
                "I'm Web Developer",
                1000,
                "I'm Apps Developer",
                1000,
                "I'm Designer",
                1000,
                "I'm Photo Editor",
                1000,
                "I'm Video Editor",
                1000,
              ]}
              speed={65}
              repeat={Infinity}
            />
          </div>
          <div className="w-full flex flex-col items-center lg:items-start gap-2">
            <div className="flex gap-4">
              {ABOUTME.position.map((skill, i) => (
                <p
                  key={i}
                  className="px-4 bg-brand rounded-md font-bold text-sm lg:text-base"
                >
                  {skill}
                </p>
              ))}
            </div>
            <div className="flex gap-10 justify-between p-4 rounded-lg">
              <h2 className="text-6xl flex text-white items-center gap-3">
                4{" "}
                <span className="text-sm flex flex-col lg:flex-row lg:gap-2 md:text-base lg:text-xl text-brand">
                  year <span>experience</span>
                </span>
              </h2>
              <div className="w-[1px] bg-white rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl flex text-white items-start justify-center flex-col ">
                400++{" "}
                <span className="text-xs md:text-base text-brand">
                  project complete
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

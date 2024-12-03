import { ABOUTME } from "@/constants/appConstant";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 w-full min-h-[70vh] mt-10">
      <div className="flex mt-7 md:mt-0 flex-col md:order-first px-4 md:items-center justify-center">
        <div className="flex flex-col gap-5">
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
          <div className="font-bold text-white text-2xl lg:text-5xl">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                2000,
                "WEB DEVELOPER",
                2000,
                "APPS DEVELOPER",
                2000,
                "DESIGNER",
                2000,
                "PHOTO EDITOR",
                2000,
                "VIDEO EDITOR",
                2000,
              ]}
              speed={20}
              repeat={Infinity}
            />
          </div>
          <p className="text-sm lg:text-lg flex flex-col text-brand">
            I&apos;m Web Developer, App Developer, Designer, Photo and Video
            Editor<span>I like Imagination and Creatifity</span>
          </p>
          <div className="flex gap-10 bg-gray-50/10 justify-between p-4 rounded-lg">
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
      <div className="order-first grid place-items-center">
        <div className="relative aspect-square w-full rounded-full max-w-96 overflow-hidden">
          <Image
            alt="mochamad ramadhani"
            src={"/assets/photo2.webp"}
            fill
            className="bg-white/5 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

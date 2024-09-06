import { ABOUTME } from "@/constants/appConstant";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdDownload } from "react-icons/io";

export default function About() {
  return (
    <div className="my-12 mx-4 grid grid-cols-1 lg:grid-cols-4 lg:mx-72 overflow-hidden bg-brand-grey text-white  drop-shadow-md duration-500 transition-all rounded-3xl">
      <div className="flex flex-col w-full items-center gap-3 justify-center p-10">
        <div className="relative aspect-square w-full rounded-full max-w-60 overflow-hidden">
          <Image alt="mochamad ramadhani" src={"/assets/photo.png"} fill />
        </div>
        <div className="flex flex-col justify-center text-xl lg:text-3xl font-bold uppercase">
          <h2>{ABOUTME.firstName}</h2>
          <h2 className="text-brand">{ABOUTME.lastName}</h2>
        </div>
        <div className="flex gap-4 text-sm lg:text-lg">
          <h3 className="flex gap-4">{ABOUTME.position[0]}</h3>
          <div className="w-[1px] bg-brand"></div>
          <h3 className="flex gap-4">{ABOUTME.position[1]}</h3>
        </div>
        <div className="flex gap-5 mt-4">
          {ABOUTME.onlineProfile.map((item, i) => (
            <Link key={i} href={item.url}>
              <p className="p-2 border rounded-full">{item.icon}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <button className="flex items-center gap-3 border px-3 py-1 rounded-full bg-white/20">
            Download resume
            <IoMdDownload />
          </button>
        </div>
      </div>
      <div className="w-full p-10 bg-brand-darklight md:col-span-2 lg:col-span-3 rounded-3xl">
        <h2 className="font-bold text-3xl border-b border-brand w-fit">
          About <span className="text-brand">Me</span>
        </h2>
        <p className="text-wrap text-sm font-montserrat font-semibold mt-4">
          {ABOUTME.about}
        </p>
        <h2 className="font-bold mt-6 text-3xl border-b border-brand w-fit">
          Skils
        </h2>
        <div className="grid md:grid-cols-2 mt-4 gap-4 overflow-y-scroll no-scrollbar">
          {ABOUTME.skils.map((skil, i) => (
            <div key={i}>
              <Progress
                label={skil.title}
                size="sm"
                value={skil.value}
                maxValue={100}
                color="warning"
                formatOptions={{ style: "percent" }}
                showValueLabel={true}
                classNames={{
                  base: "max-w-md",
                  indicator: "bg-brand",
                  label: "text-base",
                  value: "text-brand text-base",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

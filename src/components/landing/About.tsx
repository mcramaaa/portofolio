import { ABOUTME } from "@/constants/appConstant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowDropright, IoMdDownload } from "react-icons/io";

export default function About() {
  return (
    <div className="mx-auto pt-5 px-4 pb-10 lg:px-32 xl:px-60">
      <div className="my-12  grid grid-cols-1 lg:grid-cols-4 overflow-hidden bg-brand-grey text-white  drop-shadow-md duration-500 transition-all rounded-3xl">
        <div className="flex flex-col w-full items-center gap-3 justify-center p-10">
          <div className="relative aspect-square w-full rounded-full max-w-60 overflow-hidden">
            <Image
              alt="mochamad ramadhani"
              src={"/assets/photo2.webp"}
              fill
              className="bg-white/5 object-cover"
            />
          </div>
          <div className="flex text-center flex-col justify-center text-xl lg:text-3xl font-bold uppercase">
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
              <Link key={i} target="_blank" href={item.url}>
                <p className="p-2 border rounded-full">{item.icon}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href={"/assets/curriculum vitae Mochamad Ramadhani.pdf"}
              target="_blank"
              className="flex items-center gap-3 border px-3 py-1 rounded-full bg-white/20"
            >
              Download resume
              <IoMdDownload />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center gap-3 p-10 bg-brand-darklight md:col-span-2 lg:col-span-3 rounded-3xl">
          <div>
            <h2 className="font-bold text-2xl border-b border-brand w-fit">
              About <span className="text-brand">Me</span>
            </h2>
            <p className="text-wrap text-justify text-sm font-montserrat font-semibold mt-4">
              {ABOUTME.about}
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl border-b border-brand w-fit">
              Education
            </h2>
            <div className="mt-2">
              {ABOUTME.education.map((data, i) => (
                <div key={i} className="flex gap-2 font-montserrat">
                  <IoMdArrowDropright className="text-xl text-brand" />
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex gap-2 items-center">
                        <p className="font-bold">{data.name}</p>
                      </div>
                      <p className="text-xs lg:text-sm text-brand">
                        {data.year}
                      </p>
                    </div>
                    <div className="flex gap-x-2 flex-wrap text-sm items-center">
                      <p className="font-bold">{data.prodi}</p>
                      <p className="text-brand font-bold">GPA {data.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl border-b border-brand w-fit">
              Organitation Experience
            </h2>
            <div className="mt-2 flex flex-col gap-2">
              {ABOUTME.organitation.map((data, i) => (
                <div key={i} className="flex gap-2 font-montserrat">
                  <IoMdArrowDropright className="text-xl text-brand" />
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex gap-2 items-center">
                        <p className="font-bold">{data.name}</p>
                      </div>
                      <p className="text-xs lg:text-sm text-brand">
                        {data.year}
                      </p>
                    </div>
                    <div className="flex gap-x-2 flex-wrap text-sm items-center">
                      <p className="font-bold text-brand">{data.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

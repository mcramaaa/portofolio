import { ABOUTME, FOOTER } from "@/constants/appConstant";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="relative bg-brand-dark">
      <div className=" px-4 lg:px-40 py-10 gap-3 text-white flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <div className="flex justify-center">
            <div className="flex gap-2">
              {ABOUTME.onlineProfile.map((data, i) => (
                <Link
                  href={data.url}
                  target="_blank"
                  className="text-xl hover:scale-110 hover:bg-brand duration-300 p-2 bg-brand-dark rounded-full text-white"
                  key={i}
                >
                  {data.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-2">
              {FOOTER.sosmed.map((data, i) => (
                <Link
                  href={data.url}
                  target="_blank"
                  className="text-xl hover:scale-110 hover:bg-brand duration-300 p-2 bg-brand-dark rounded-full text-white"
                  key={i}
                >
                  {data.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <FaLocationDot />
          <p>{ABOUTME.address}</p>
        </div>
      </div>
      <div className="text-center  text-white text-sm py-3 border-t border-brand">
        <p>
          © Copyright 2023 Mochamad Ramadhani crafted by{" "}
          <Link
            href={"https://cathabot.com/"}
            target="_blank"
            className="font-bold"
          >
            cathabot
          </Link>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
}

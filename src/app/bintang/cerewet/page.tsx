import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b grid place-items-center from-brand-dark to-brand-darklight ">
      <div className="flex flex-col gap-5 items-center ">
        <div className="relative aspect-square w-72 rounded-full overflow-hidden border-5 border-pink-400">
          <Image
            alt="bintang dectyanefa putri zafira"
            src={"/bee.jpeg"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 font-bold text-xl items-center text-pink-400 ">
          <h1 className="text-pink-400 font-bold text-2xl font-montserrat">
            Bintang Dectyanefa Putri Zafira
          </h1>
          <p>Sidoarjo</p>
          <p>7 Desember 1999</p>
        </div>
      </div>
    </div>
  );
}

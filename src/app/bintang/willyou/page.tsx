import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-[url('/assets/bg.jpeg')]">
      <div className="bg-black/80 px-10 gap-10  py-20 pb-20 w-screen min-h-screen text-white flex flex-col justify-center items-center">
        <div className="relative aspect-square w-3/4 rounded-full overflow-hidden border-5 border-brand">
          <Image
            alt="bintang dectyanefa putri zafira"
            src={"/assets/we.jpeg"}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-center">
          Sayang, setiap detik dari setiap waktu yang kita habiskan selama ini
          membuatku semakin yakin bahwa kamu adalah satu satunya wanita bisa
          membuatku bersyukur dengan 1 wanita di hidupku. Cintaku padamu tumbuh
          bersama dengan setiap senyuman dan kebahagiaan kita bersama, dan aku
          ingin kita terus melangkah bersama, selamanya
        </p>

        <h2 className="text-white font-bold text-xl text-center">
          Bintang Dectyanefa Putri Zafira
        </h2>
        <div className="text-center">
          <p className="text-xs">
            Aku ingin kamu jadi satu satunya perempuan yg selalu ada di sisiku
            selamanya
          </p>
          <p className="font-bold pt-4 text-lg uppercase">
            Mau nggak kamu jadi Pacarku dan menjalin hubungan yang lebih serius
            ??
          </p>
        </div>
      </div>
    </div>
  );
}

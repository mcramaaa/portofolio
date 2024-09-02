"use client";

import AntDatePicker from "@/components/AntDatePicker";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();

  const luvDate = "1999-12-06T17:00:00.000Z";
  const meDate = "2000-10-26T17:00:00.000Z";

  const [luv, setLuv] = useState(false);
  const [me, setMe] = useState(false);

  function ayDate(e: any) {
    const date = dayjs(e).toISOString();
    if (date === luvDate) {
      setLuv(true);
    }
  }
  function myDate(e: any) {
    const date = dayjs(e).toISOString();
    if (date === meDate) {
      setMe(true);
    }
  }

  function checkDate() {
    if (!luv) {
      alert("Tanggal lahirmu salah");
    }
    if (!me) {
      alert("Tanggal lahirku salah");
    }
    if (luv && me) {
      // alert("Selamat datang!");
      router.push("/bintang/willyou");
    }
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-brand-darklight to-brand-grey flex flex-col justify-center">
      <div className="mx-10 bg-white drop-shadow-md rounded-lg p-5">
        <h2 className="text-center text-3xl font-bold mb-5">Login</h2>
        <AntDatePicker onChange={ayDate} labelName="Tanggal lahirmu" />
        {/* {!luv && <p>Tanggal lahirmu salah</p>} */}
        <AntDatePicker onChange={myDate} labelName="Tanggal lahirku" />
        {/* {!me && <p>Tanggal lahirku salah</p>} */}
        <div className="flex justify-center">
          <button
            onClick={checkDate}
            className="px-4 py-1 bg-brand w-full rounded-lg"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}

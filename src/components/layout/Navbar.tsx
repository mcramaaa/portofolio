import { NAVMENU } from "@/constants/appConstant";
import { useSection } from "@/zustand/useNav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setSection } = useSection();

  const openBar = () => {
    setIsOpen(!isOpen);
  };

  function handleSection(key: string) {
    if (path !== "/") {
      router.push("/");
      setSection(key);
    } else {
      setSection(key);
    }
    setIsOpen(false);
  }

  return (
    <div>
      <div className="px-3 relative overflow-hidden w-full z-50 lg:px-52 py-3 grid grid-flow-col items-center">
        <Link
          href={"/"}
          onClick={() => {
            setSection("home");
          }}
          className=""
        >
          <h3 className="font-bold text-white text-4xl font-orbit">
            M <span className="text-brand">Rama</span>
          </h3>
        </Link>
        <div className="hidden md:flex w-full justify-end gap-5 text-sm lg:gap-10 lg:text-base">
          {NAVMENU.map((list, i) => (
            <button
              className="text-nowrap text-white hover:scale-110 duration-300 hover:text-brand"
              key={i}
              onClick={() => handleSection(list.refKey)}
            >
              {list.label}
            </button>
          ))}
        </div>
        <div className="md:hidden flex justify-end w-full">
          {!isOpen ? (
            <HiMenuAlt3
              onClick={openBar}
              className="md:hidden text-2xl text-brand"
            />
          ) : (
            <IoClose
              onClick={openBar}
              className="md:hidden text-2xl text-white"
            />
          )}
        </div>
      </div>
      {/* DROPDOWN */}
      <div className="z-40">
        {isOpen && (
          <div className="w-full h-screen absolute" onClick={openBar}></div>
        )}
        <div
          className={`${
            isOpen ? "mt-0" : "-mt-96"
          } bg-brand-dark/90 backdrop-blur-sm absolute  w-full flex flex-col px-5 justify-center gap-5 md:hidden text-white py-5 rounded-b-lg duration-300`}
        >
          {NAVMENU.map((list, i) => (
            <button
              className={`text-nowrap hover:scale-110 duration-300 py-2 text-center`}
              key={i}
              onClick={() => handleSection(list.refKey)}
            >
              {list.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

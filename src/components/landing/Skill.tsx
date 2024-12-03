import { ABOUTME } from "@/constants/appConstant";
import { Progress } from "@nextui-org/react";
import React from "react";

export default function Skill() {
  return (
    <div className="mx-auto bg-brand-darklight py-10 px-4 pb-10 lg:px-32 xl:px-60">
      <div className="flex flex-col items-center ">
        <p className="text-white font-bold text-4xl font-montserrat border-b-2 mb-4 border-brand">
          My Skill
        </p>
        <div className="w-full rounded-xl flex justify-center">
          <div className="grid my-5 p-4 w-full place-items-center md:grid-cols-2 gap-6 overflow-y-scroll no-scrollbar text-white ">
            {ABOUTME.skils.map((skil, i) => (
              <div key={i} className="flex gap-2 items-center w-full lg:w-3/5">
                <p className="text-4xl">{skil.icon}</p>
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
    </div>
  );
}

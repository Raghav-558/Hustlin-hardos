"use client";
import { FAQ_LIST } from "@/utils/helper";
import { MinusIcon, PlusIcon } from "@/utils/icons";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";

const Faq = () => {
  const [open, setOpen] = useState(0);
  const FaqHandler = (i) => {
    setOpen(open === i ? null : i);
  };
  return (
    <div id="faq">
      <div className="max-w-[1172px] px-4 mx-auto pt-22 pb-[89px] max-xl:py-[60px] max-lg:py-10">
        <CustomHeading text="Faqs" />
      </div>
      <div className="border-y-2 border-black px-4">
        <div className="max-w-[1140px] mx-auto border-x-2 border-black">
          {FAQ_LIST.map((item, i) => (
            <div
              key={i}
              className={`w-full px-[30px] pb-[26px] max-lg:px-6 max-lg:pb-5 max-md:pb-3 max-md:px-4 border-black ${
                i === 6 ? "border-0" : "border-b-2"
              }`}
            >
              <div
                onClick={() => FaqHandler(i)}
                className="flex items-center justify-between cursor-pointer w-full pt-8 max-lg:pb-4 max-md:pt-5 max-md:pb-2"
              >
                <p className="leading-[100%] max-sm:leading-[120%] font-semibold text-2xl max-lg:text-xl max-md:text-lg max-[500px]:max-w-[280px]">
                  {item}
                </p>
                <span
                  className={`duration-300 ease-linear ${
                    open === i ? "rotate-180" : "rotate-90"
                  }`}
                >
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>
              <div
                className={`transtition-all duration-400 ease-linear pt-4 max-lg:pt-0 overflow-hidden max-xl:overflow-y-auto ${
                  open === i ? "max-h-[160px]" : "max-h-0"
                }`}
              >
                <p className="leading-[150%] max-md:text-sm">
                  NFT stands for “Non-fungible token,” which means that it’s a
                  unique, digital item with blockchain-managed ownership that
                  users can buy, own, and trade. Some NFT’s fundamental function
                  is to be digital art. But they can also offer additional
                  benefits like exclusive access to websites, event tickets,
                  game items, and ownership records for physical objects. Think
                  of it as a unique piece of art that can also work as a
                  “members-only” card. Hustlin' Hardos works like this
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="leading-[100%] text-center pt-8 pb-6 max-lg:py-6 max-md:py-4">
        © Hustlin' Hardos {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Faq;

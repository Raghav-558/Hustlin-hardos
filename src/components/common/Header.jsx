import {HEADER_LINKS_LIST, HEADER_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import Marquee from "./Marquee";

const Header = () => {

  return (
    <>
      <Marquee />
      <div className="flex justify-end max-w-[1142px] px-4 mx-auto pt-2 pb-[15px] max-lg:pb-3">
        <div className="flex items-center justify-between overflow-hidden max-w-[658px] w-full">
          <div className="flex items-center">
            <Link className="font-modernofb text-2xl" href="/">
              Hustlin' Hardos
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-[18px] max-lg:gap-3 max-sm:hidden">
              {HEADER_LIST.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="hover:scale-110 transition-all duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <CustomButton
              text={"Connect Wallet"}
              myClass={
                "h-[43px] w-[164px] max-sm:w-[154px] max-sm:h-[40px] bg-custom-yellow hover:bg-black hover:text-custom-yellow transtion-all duration-300 border-black"
              }
            />
          </div>
        </div>
      </div>
      
      <div className="border-t-2 border-b-2 border-black max-md:border-1">
        <div className="flex justify-center items-center">
          {HEADER_LINKS_LIST.map((item, i) => (
            <Link className={`flex items-center leading-[100%] hover:bg-black hover:text-white transition-all duration-300 uppercase border-l-[2px] max-md:border-l-[1px] border-black whitespace-nowrap px-6 h-[38px] max-md:text-sm max-md:h-8 max-md:px-5 max-sm:text-xs max-sm:px-3 max-sm:h-7 ${
                i === 4 ? "md:!border-r-[2px] !border-r-[1px] border-black" : "" }`} key={i}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

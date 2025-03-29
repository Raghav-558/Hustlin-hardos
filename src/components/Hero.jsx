import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden ">
      <Header />
      <div className="px-4">
        <h1 className="font-modernofb text-center leading-[100%] text-[157px] pt-[25px] max-xl:pt-4 max-lg:pt-3 max-sm:pb-2 max-xl:text-[120px] max-lg:text-[80px] max-md:text-6xl max-sm:text-[40px]">
          THE HUSTLIN’ HARDOS.
        </h1>
      </div>
      <Image
        src="/assets/images/hero-office.webp"
        alt="hero-office-image"
        width={1440}
        height={476}
        className="w-full border-t-2 border-b-2 border-black object-cover pointer-events-none"
      />
    </div>
  );
};

export default Hero;

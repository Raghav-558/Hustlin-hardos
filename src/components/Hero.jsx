import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <div className="px-4">
        <h1 className="font-modernofb text-shadow text-center leading-[100%] text-[157px] pt-[25px] max-xl:pt-4 max-lg:pt-3 max-sm:pb-2 max-xl:text-[120px] max-lg:text-[80px] max-md:text-6xl max-sm:text-[40px]">
          THE HUSTLIN’ HARDOS.
        </h1>
      </div>
      <Image
        className="border-black border-t-2 border-b-2 w-full object-cover"
        src="/assets/images/hero-office.webp"
        width={1440}
        height={476}
        alt="hero-image"
      />
    </div>
  );
};

export default Hero;

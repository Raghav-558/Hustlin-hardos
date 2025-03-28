"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";
import Description from "./common/Description";
import { MINTING_DATA_LIST } from "@/utils/helper";
import CustomButton from "./common/CustomButton";

const Minting = () => {
  const [count, setCount] = useState(100);
  const [timeRemaining, setTimeRemaining] = useState(
    40 * 24 * 3600 + 15 * 3600 + 12 * 60 + 10
  );

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  return (
    <div id="minting" className="pt-22 max-xl:pt-[60px] max-lg:pt-10">
      <CustomHeading
        text="Minting"
        myClass="max-w-[1172px] px-4 mx-auto pb-[89px] max-xl:pb-[60px] max-lg:pb-10"
      />
      <div className="border-y-2 border-black flex items-center justify-center max-xl:px-4 max-md:px-0">
        <div className="max-w-[1140px] mx-auto border-l-2 max-lg:border-x-2 border-black flex items-center justify-center max-lg:flex-col max-md:mx-4">
          <div className="pl-[25px] w-full max-lg:px-10 max-lg:py-5 max-md:px-6 pr-[107px] py-11 max-xl:px-5 max-xl:py-3.5">
            <Description
              myClass="leading-[150%] max-w-[438px] max-lg:max-w-[389px] pb-[15px] max-xl:pb-3 max-lg:pb-2 max-md:text-sm"
              text="Most of the Hustlin’ Hardos first experienced NFTs via other
              successful projects like NBA TopShot, where revealing your newly
              minted item invoked the same emotions as opening up that first
              pack of baseball cards. NFTs have allowed us to enjoy those
              feelings once again while also empowering communities through
              shared ownership. The space has seen incredible growth over the
              past year, and it is our belief that we are in the very early
              innings of the paradigm shift that will be powered by web3."
            />
            <div className="flex items-center justify-between border-2 border-black overflow-hidden  max-w-[238px] max-xl:max-w-[210px]">
              <button
                onClick={() => setCount(Math.max(count - 1, 0))}
                className="min-w-[60px] leading-[100%] font-semibold text-4xl max-lg:text-xl max-md:text-lg border-r-2 border-black hover:bg-custom-yellow transition-all duration-300 min-h-[53px] max-h-[53px] max-lg:min-h-9 cursor-pointer"
              >
                -
              </button>
              <p className="flex justify-center items-center font-semibold leading-[100%] text-4xl max-lg:text-xl max-md:text-lg min-h-[53px] max-w-[109px] max-lg:min-h-9">
                {count}
              </p>
              <button
                onClick={() => setCount(count + 1)}
                className="min-w-[60px] leading-[100%] font-semibold text-4xl max-lg:text-xl max-md:text-lg border-l-2 border-black hover:bg-custom-yellow transition-all duration-300 min-h-[53px] max-h-[53px] max-lg:min-h-9 cursor-pointer"
              >
                +
              </button>
            </div>
            <CustomButton
              text={"MINT NOW"}
              myClass={
                "w-[111px] h-[43px] bg-custom-yellow mt-[35px] mb-9 max-xl:my-5 hover:bg-black hover:text-white duration-300 transtion-all hover:border-black"
              }
            />
            <div>
              <p className="text-lg leading-[100%] text-custom-green max-lg:text-base max-md:text-sm">
                Time Left
              </p>
              <p className="font-semibold text-4xl leading-[100%] text-custom-red pt-1 max-lg:text-2xl max-md:text-xl">
                {formatTime(timeRemaining)}
              </p>
            </div>
          </div>
          <div className="lg:border-x-2 border-black max-w-[570px] w-full h-[567px] max-xl:h-[509px] overflow-hidden max-lg:max-w-[470px] max-lg:h-auto relative">
            <Image
              width={570}
              height={567}
              className="max-w-[570px] w-full object-cover xl:min-h-[567px] lg:min-h-[509px] max-lg:max-w-[470px]"
              src="/assets/images/breaking-news-boy.webp"
              alt="Minting-image"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full border-b-2 border-black py-[21px]">
        <div className="max-w-[832px] px-5 mx-auto w-full flex items-center justify-between max-md:flex-wrap max-md:justify-center max-md:gap-5">
          {MINTING_DATA_LIST.map((item, i) => (
            <div
              key={i}
              className="max-md:w-1/3 max-md:flex flex-col items-center justify-center"
            >
              <p className="text-2xl leading-[111%] pb-3 max-lg:text-xl max-md:text-lg max-lg:pb-1">
                {item}
              </p>
              <p className="text-4xl leading-[111%] font-semibold max-lg:text-2xl max-md:text-xl max-md:pr-14">
                42
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minting;

import React from "react";
import Image from "next/image";
import Description from "./common/Description";
import Link from "next/link";

const BreakingNews = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center flex-col w-full pt-[67px] max-xl:pt-[60px] max-lg:pt-10"
    >
      <h3 className="max-w-[1172px] px-4 mx-auto leading-[140%] text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-3xl max-xl:px-4 pb-16 max-lg:pb-10">
        “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT
        project of 2022"
      </h3>
      <div className="flex items-center justify-center w-full border-y-2 border-black">
        <div className="max-w-[1140px] mx-auto flex items-center justify-center border-l-2 max-xl:border-x-2 border-black max-lg:flex-col max-md:mx-4">
          <div className="w-full pl-[43px] pr-[52px] max-xl:px-10 max-xl:py-9 max-lg:py-6 max-lg:px-6">
            <Description
              myClass="max-w-[475px] pb-4 max-lg:pb-2"
              text="March 1, 2022 by Editor Hardo"
            />
            <Description
              myClass="max-w-[475px] max-lg:max-w-[389px] leading-[150%] pb-4 max-lg:pb-2 text-lg max-lg:text-base max-md:text-sm"
              text="Hustlin' Hardos is a collection of 9,999 NFT characters on the
              Ethereum Blockchain, inspired by the business/finance world,
              hustler culture and web3 aesthetics. Each Hustlin' Hardo is a
              completely original and unique combination of hundreds of
              potential attributes such as luxury watches, clothing, or
              accessories - all with provable degrees of rarity. The collection
              features truly unique and powerful artwork, while offering its
              holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your
              gateway to The Boardroom, one of the most rewarding and engaging
              online communities"
            />
            <Link
              href="#"
              className="leading-[100%] hover:text-custom-red duration-300 underline decoration-black underline-offset-2 decoration-[1px] hover:decoration-custom-red"
            >
              Read More...
            </Link>
          </div>
          <div className="lg:border-x-2 max-w-[570px] w-full">
            <Image
              src="/assets/images/breaking-news-boy.webp"
              alt="breaking-news"
              width={570}
              height={572}
              className="max-w-[570px] w-full object-cover h-full max-lg:max-w-[470px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;

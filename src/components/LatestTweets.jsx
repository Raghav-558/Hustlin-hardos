"use client";
import React from "react";
import CustomHeading from "./common/CustomHeading";
import {
  BlueTwitterIcon,
  NextArrowIcon,
  PreviousArrowIcon,
} from "@/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LATEST_TWEETS_LIST } from "@/utils/helper";
import Description from "./common/Description";

const LatestTweets = () => {
  return (
    <div className="pt-[89px] max-xl:pt-[60px] max-lg:pt-10">
      <div className="max-w-[1172px] px-4 mx-auto w-full flex items-center justify-between pb-[90px] max-xl:pb-[60px] max-lg:pb-10">
        <CustomHeading text="Latest Tweets" myClass="uppercase" />
        <div className="flex items-center gap-14 max-md:gap-5 lg:pt-5 md:pt-2">
          <div className="cursor-pointer prev-arrow">
            <PreviousArrowIcon myClass={"max-md:h-[24px] max-lg:h-[30px]"} />
          </div>
          <div className="cursor-pointer next-arrow">
            <NextArrowIcon myClass={"max-md:h-[24px] max-lg:h-[30px]"} />
          </div>
        </div>
      </div>
      <div className="border-y-2 border-black px-4">
        <Swiper
          slidesPerView={3}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-[1140px] mx-auto overflow-hidden border-l-2 border-black"
        >
          {LATEST_TWEETS_LIST.map((item, i) => (
            <SwiperSlide
              key={i}
              className="max-w-[380px] mx-auto w-full border-black border-r-2 px-[25px] pt-12 pb-[46px] max-md:py-8">
              <p className="font-semibold text-4xl leading-[111%]">
                {item.title}
              </p>
              <div className="flex items-center pt-[13px] gap-[11px]">
                <BlueTwitterIcon />
                <p className="text-sm leading-[100%]">{item.date}</p>
              </div>
              <Description myClass="max-md:text-sm pb-[15px] pt-[13px]" text={item.description}/>
              <Link href="#" className="underline decoration-black underline-offset-2 decoration-[1px] hover:text-custom-red duration-300 ease-linear hover:decoration-custom-red" >
                Read More...
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestTweets;

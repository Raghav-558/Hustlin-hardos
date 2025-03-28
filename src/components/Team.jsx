"use client";
import React from "react";
import { TEAM_LIST } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { NextArrowIcon, PreviousArrowIcon } from "@/utils/icons";
import Description from "./common/Description";
import CustomHeading from "./common/CustomHeading";

const Team = () => {
  return (
    <div id="team">
      <div className="max-w-[1172px] px-4 mx-auto w-full flex items-center justify-between pt-22 pb-[89px] max-xl:py-[60px] max-lg:py-10">
        <CustomHeading text="Team" />
        <div className="flex items-center gap-14 max-md:gap-5 lg:pt-5 md:pt-2">
          <div className="cursor-pointer previous-arrow">
            <PreviousArrowIcon myClass={"max-md:h-[24px] max-lg:h-[30px]"} />
          </div>
          <div className="cursor-pointer nextitem-arrow ">
            <NextArrowIcon myClass={"max-md:h-[24px] max-lg:h-[30px]"} />
          </div>
        </div>
      </div>
      <div className="border-y-2 border-black px-4">
        <Swiper
          slidesPerView={3}
          navigation={{
            nextEl: ".nextitem-arrow",
            prevEl: ".previous-arrow",
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="max-w-[1140px] mx-auto overflow-hidden border-l-2 border-black"
        >
          {TEAM_LIST.map((obj, i) => (
            <SwiperSlide
              style={{
                backgroundImage: `url(/assets/images/team-card-bg.webp)`,
              }}
              key={i}
              className="max-w-[570px] mx-auto w-full bg-cover bg-no-repeat bg-center px-[25px] pt-12 pb-[46px] max-md:py-8 border-r-2 border-black !flex justify-center items-center flex-col min-h-[326px] max-md:min-h-[220px] max-md:max-h-[220px]"
            >
              <Image
                src="/assets/images/profile-image.webp"
                alt="profile-image"
                width={88}
                height={88}
                className="max-w-[88px] rounded-full max-md:max-w-[60px]"
              />
              <p
                className={`leading-[100%] text-4xl max-lg:text-3xl max-md:text-2xl py-4 font-black ${
                  i === 0 || i === 2
                    ? "text-custom-gray"
                    : "text-custom-dark-gray"
                }`}
              >
                {obj.title}
              </p>
              <Description
                myClass="max-w-[407px] mx-auto text-center max-md:text-sm text-black"
                text={obj.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;

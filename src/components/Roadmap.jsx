import React from "react";
import CustomHeading from "./common/CustomHeading";
import { ROADMAP_LIST } from "@/utils/helper";
import Description from "./common/Description";

const Roadmap = () => {
  return (
    <div id="roadmap" className="pt-22 max-xl:pt-[60px] max-lg:pt-10">
      <div className="max-w-[1172px] px-4 mx-auto w-full pb-[89px] max-xl:pb-[60px] max-lg:pb-10">
        <CustomHeading text="RoadMap" myClass="" />
      </div>
      <div className="border-y-2 border-black px-4">
        <div className="max-w-[1140px] mx-auto w-full border-x-2 border-black xl:pb-[450px]">
          <div className="py-[99px] relative flex flex-col pl-9 pr-4 max-xl:pl-6 max-lg:gap-10 max-lg:pl-20 max-md:gap-6 max-md:pl-[60px] max-md:pr-4 max-lg:py-16 max-md:py-10">
            <div className="h-[86%] xl:h-[145%] w-0.5 bg-black absolute left-1/2 -translate-x-1/2 max-xl:left-[48%] top-[52%] -translate-y-1/2 max-lg:left-[5%] max-lg:h-[90%] max-md:left-[7%] max-md:h-[95%] max-md:top-[51%] roadmap-line"></div>
            {ROADMAP_LIST.map((item, i) => (
              <div
                key={i}
                className={`relative ${
                  i === 0 || i === 2 || i === 4 || i === 6
                    ? "max-w-[599px] max-xl:max-w-[468px] pl-5 ml-auto after:absolute after:content='' after:top-0 after:bg-[url('/assets/images/roadmap-icon.webp')] after:bg-cover after:bg-center after:bg-no-repeat after:w-[59px] after:h-[59px] after:left-[-13%] max-xl:after:left-[-13%] max-lg:after:left-[-14%] max-lg:mr-auto max-lg:ml-0 max-lg:after:w-11 max-lg:after:h-11 max-md:after:left-[-17%] max-[424px]:after:!left-[-21.5%] max-xl:pl-2 max-lg:pl-0"
                    : "max-w-[564px] max-xl:max-w-[428px] mr-auto roadmap-left-content -mt-4 after:absolute after:content='' after:top-0 after:bg-[url('/assets/images/roadmap-icon.webp')] after:bg-cover after:bg-center after:bg-no-repeat after:w-[59px] after:h-[59px] after:right-[-22.5%] max-xl:after:right-[-12%] max-lg:max-w-[468px] max-lg:mt-0 max-lg:after:left-[-14%] max-lg:after:w-11 max-lg:after:h-11 max-md:after:left-[-17%] max-[424px]:after:!left-[-21.5%]"
                } ${
                  i === 1
                    ? "-mt-20 max-lg:mt-0"
                    : i === 3
                    ? "-mt-16 max-lg:mt-0"
                    : ""
                }`}
              >
                <p className="text-sm leading-[100%] pb-2.5 max-lg:pb-1.5 max-md:text-xs">
                  {item.phase}
                </p>
                <p className="font-semibold text-4xl leading-[111%] pb-3 max-w-[460px] max-md:text-xl max-lg:pb-2 max-md:pb-1.5">
                  {item.title}
                </p>
                <Description
                  myClass={`max-lg:text-sm ${
                    i === 0 || i === 2 || i === 4 || i === 6
                      ? "max-w-[495px] max-lg:max-w-none !leading-[120%] !max-lg:leading-[100%]"
                      : "max-w-[460px] max-lg:max-w-none !leading-[111%] !max-lg:leading-[100%]"
                  }`}
                  text={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

import { MARKET_DATA_LIST } from '@/utils/helper';
import React from 'react'

const Marquee = () => {
  return (
    <div className="flex items-center pt-[13px] pb-[14px] overflow-hidden bg-black">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex animate-marquee text-white whitespace-nowrap">
          {MARKET_DATA_LIST.map((item, i) => (
            <div key={i} className="flex items-center mx-[31px] max-lg:mx-6 max-md:mx-4">
              <span className={`mr-2 uppercase !leading-[100%] lg:text-base text-sm ${i === 5 ? "!mr-2 lg:!mr-3" : "" }`} >
                {item.title}
              </span>
              <div className={`flex items-center whitespace-nowrap bg-lightBrown text-white rounded-[73px]`} >
                <span className={`lg:text-sm text-xs border rounded-[5px] py-[2px] px-1 ${item.color}`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee
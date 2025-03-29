import { MARKET_DATA_LIST } from '@/utils/helper';
import React from 'react'

const TopBar = () => {
  return (
    <div className="flex items-center pt-[13px] pb-[14px] bg-black overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex text-white whitespace-nowrap topbar-animation">
          {MARKET_DATA_LIST.map((item, i) => (
            <div key={i} className="flex items-center mx-[31px] max-lg:mx-6 max-md:mx-4">
              <span className={`mr-2 !leading-[100%] font-normal lg:text-base text-sm ${i === 5 ? "!mr-2 lg:!mr-3" : "" }`} >
                {item.title}
              </span>
              <div className={`flex items-center text-white rounded-[73px] whitespace-nowrap`} >
                <span className={`text-sm max-lg:text-xs border py-[2px] px-1 rounded-[5px] ${item.color}`}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar
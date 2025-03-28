import React from 'react'

const CustomHeading = ({ text ,myClass}) => {
  return (
    <h2
      className={`${myClass} text-[80px] max-xl:text-6xl max-lg:text-5xl max-md:text-3xl leading-[104%]`}
    >
      {text}
    </h2>
  );
}

export default CustomHeading
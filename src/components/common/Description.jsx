import React from "react";

const Description = ({ text, myClass }) => {
  return (
    <p className={`${myClass} max-lg:text-sm leading-[100%] text-black`}>
      {text}
    </p>
  );
};

export default Description;

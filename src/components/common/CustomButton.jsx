import React from "react";

const CustomButton = ({ text, myClass }) => {
    return (
        <button className={`${myClass} cursor-pointer border-2 border-solid font-semibold text-sm leading-[100%] text-black uppercase`}>{text}</button>
    )  
};

export default CustomButton;

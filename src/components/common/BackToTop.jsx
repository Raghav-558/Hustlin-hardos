"use client";
import React, { useEffect, useState } from "react";
import { BackToTopIcon } from "@/utils/icons";

const BackToTop = () => {
  const [scrollTop, setScrollToTop] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const setShowButton = () => {
    setScrollToTop(window.scrollY > 500);
  };
  useEffect(() => {
    window.addEventListener("scroll", setShowButton);
  });

  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed right-2.5 bottom-2.5 max-lg:bottom-2 z-40 cursor-pointer"
        >
          <BackToTopIcon/>
        </button>
      )}
    </>
  );
};
export default BackToTop;

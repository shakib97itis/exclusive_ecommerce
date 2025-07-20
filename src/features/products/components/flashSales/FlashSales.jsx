import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SalesTimer from "./SalesTimer";
import SalesCardSlider from "./SalesCardSlider";

const FlashSales = () => {
  return (
    <div className="">
      {/* TOP TITLE */}
      <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
        <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
        <p>Today's</p>
      </div>

      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-20">
          <h2 className="heading-36-semibold">Flash Sales</h2>
          <SalesTimer />
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full">
            <FaArrowLeft className="text-text-2 text-2xl" />
          </button>

          <button className="bg-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full">
            <FaArrowRight className="text-text-2 text-2xl" />
          </button>
        </div>
      </div>

      <SalesCardSlider />
    </div>
  );
};

export default FlashSales;

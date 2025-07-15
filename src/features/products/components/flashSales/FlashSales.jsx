import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const FlashSales = () => {
  return (
    <div className="">
      {/* TOP TITLE */}
      <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
        <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
        <p c>Today's</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-2.5">
          <h2 className="heading-36-semibold">Flash Sales</h2>
          <SalesTimer />
        </div>
        <div className="flex gap-2 items-center">
          <button className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer">
            <FaArrowCircleLeft className="text-[46px]" />
          </button>
          <button className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer">
            <FaArrowCircleRight className="text-[46px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SalesTimer = () => {
  return (
    <div className="flex items-end gap-5">
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Days</div>
        <div className="heading-32-bold text-text-2">03</div>
      </div>
      <span className="text-hover-button heading-32-bold mb-1">:</span>
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Hours</div>
        <div className="heading-32-bold text-text-2">23</div>
      </div>
      <span className="text-hover-button heading-32-bold mb-1">:</span>
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Minutes</div>
        <div className="heading-32-bold text-text-2">19</div>
      </div>
      <span className="text-hover-button heading-32-bold mb-1">:</span>
      <div className="">
        <div className="title-12-medium text-text-2 mb-1">Seconds</div>
        <div className="heading-32-bold text-text-2">56</div>
      </div>
    </div>
  );
};

const SalesSlider = () => {
    
};

export default FlashSales;

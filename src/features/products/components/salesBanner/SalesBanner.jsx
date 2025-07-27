import React from "react";

import bannerBg from "../../../../assets/images/banner_bg.png";
import bannerImg from "../../../../assets/images/banner_img.png";

const SalesBanner = () => {
  return (
    <div
      className="bg-button px-14 py-[70px] bg-cover flex gap-16"
      style={{ backgroundImage: `url("${bannerBg}")` }}
    >
      <div>
        <p className="title-16-semibold text-button-1 mb-8">Categories</p>
        <h2 className="heading-48-semibold text-text mb-8 max-w-md">
          Enhance Your Music Experience
        </h2>
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-4">
            <span className="title-16-semibold text-text-2">05</span>
            <span className="title-14-regular text-text-2">Days</span>
          </div>
          <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-3.5">
            <span className="title-16-semibold text-text-2">23</span>
            <span className="title-14-regular text-text-2">Hours</span>
          </div>
          <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-3.5">
            <span className="title-16-semibold text-text-2">59</span>
            <span className="title-14-regular text-text-2">Minutes</span>
          </div>
          <div className="bg-primary flex h-16 w-16 flex-col items-center justify-center rounded-full p-6">
            <span className="title-16-semibold text-text-2">35</span>
            <span className="title-14-regular text-text-2 border-2">Seconds</span>
          </div>
        </div>
        <button className="bg-button-1 text-text py-4 px-12">Buy Now!</button>
      </div>
      <div>
        <img src={bannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default SalesBanner;

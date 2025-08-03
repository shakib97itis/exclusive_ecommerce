import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import OurProducstSlide from "./OurProductsSlide"

const OurProducts = () => {
  const sliderRef = useRef(null);
  const goToNextSlide = () => sliderRef.current.slickNext();
  const goToPrevSlide = () => sliderRef.current.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 0,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 0,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          infinite: true,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      {/* TOP TITLE */}
      <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
        <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
        <p>Our Products</p>
      </div>

      <div className="mb-10 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-20">
          <h2 className="heading-36-semibold">Explore Our Products</h2>
        </div>

        <div className="flex items-center justify-between sm:justify-center gap-2">
          <button
            onClick={goToPrevSlide}
            className="bg-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full"
          >
            <FaArrowLeft className="text-text-2 text-2xl" />
          </button>

          <button
            onClick={goToNextSlide}
            className="bg-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full"
          >
            <FaArrowRight className="text-text-2 text-2xl" />
          </button>
        </div>
      </div>

      <OurProducstSlide settings={settings} sliderRef={sliderRef} />
    </div>
  );
};

export default OurProducts;

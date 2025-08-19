import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BrowseByCategorySlider from "./BrowseByCategorySlider";

const BrowsByCategories = () => {
  const sliderRef = useRef(null);
  const goToNextSlide = () => sliderRef.current.slickNext();
  const goToPrevSlide = () => sliderRef.current.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <section>
      <div className="main-container border-button/30 overflow-x-hidden border-b pt-[80px] pb-[70px]">
        {/* TOP TITLE */}
        <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
          <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
          <p>Categories</p>
        </div>

        <div className="mb-10 space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-20">
            <h2 className="heading-36-semibold">Brows By Categories</h2>
          </div>

          <div className="flex items-center justify-between gap-2 sm:justify-center">
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

        <BrowseByCategorySlider settings={settings} sliderRef={sliderRef} />
      </div>
    </section>
  );
};

export default BrowsByCategories;

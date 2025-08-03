import React from "react";
import Slider from "react-slick";
import { GiSmartphone } from "react-icons/gi";
import OurProductsCard from "./OurProductsCard";

const categories = [
  {
    id: 1,
    title: "Smartphone",
    icon: GiSmartphone,
  },
  {
    id: 2,
    title: "Smartphone",
    icon: GiSmartphone,
  },
  {
    id: 3,
    title: "Smartphone",
    icon: GiSmartphone,
  },
  {
    id: 4,
    title: "Smartphone",
    icon: GiSmartphone,
  },
  {
    id: 5,
    title: "Smartphone",
    icon: GiSmartphone,
  },
  {
    id: 6,
    title: "Smartphone",
    icon: GiSmartphone,
  },
];

function OurProducstSlide({ settings, sliderRef }) {
  return (
    <div className="-mx-[15px]">
      <Slider className="custom-slider" ref={sliderRef} {...settings}>
        {categories.map((category) => (
          <div className="px-[15px]">
            <div className="">
              <OurProductsCard icon={category.icon} title={category.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurProducstSlide;

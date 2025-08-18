import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { GiSmartphone } from "react-icons/gi";

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

function BrowseByCategorySlider({ settings, sliderRef }) {
  return (
    <div className="-mx-[15px]">
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category) => (
          <div className="px-[15px]">
            <div className="">
              <CategoryCard icon={category.icon} title={category.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BrowseByCategorySlider;

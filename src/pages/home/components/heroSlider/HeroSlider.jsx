import Slider from "react-slick";
import HeroSlide from "./HeroSlide";

import heroImage from "../../../../assets/images/hero_endframe.png";

const slides = [
  {
    id: 1,
    title: "Up to 10% off voucher",
    subtitle: "iPhone 14 Pro Max",
    button: "Shop Now",
    buttonLink: "/shop/iphone-14-pro-max",
    image: heroImage,
  },
  {
    id: 2,
    title: "Limited Time Offer",
    subtitle: "Samsung Galaxy S24 Ultra",
    button: "Buy Now",
    buttonLink: "/shop/galaxy-s24-ultra",
    image: heroImage,
  },
  {
    id: 3,
    title: "Flash Deal",
    subtitle: "Google Pixel 8 Pro",
    button: "Grab It",
    buttonLink: "/shop/pixel-8-pro",
    image: heroImage,
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: () => <div className="bg-primary h-3 w-3 rounded-full" />,
    appendDots: (dots) => (
      <div style={{ bottom: "1px" }}>
        <ul className="flex items-center justify-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="col-span-12 mx-auto w-full pt-10 lg:col-span-10 lg:ps-10">
      <div className="relative shadow-lg">
        <Slider {...settings}>
          {slides.map((slide) => (
            <HeroSlide key={slide.id} slide={slide} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;

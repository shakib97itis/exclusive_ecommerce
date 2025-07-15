import Slider from "react-slick";

const slides = [
  {
    id: 1,
    title: "Up to 10% off voucher",
    subtitle: "iPhone 14 Pro Max",
    button: "Shop Now",
    buttonLink: "/shop/iphone-14-pro-max",
    image: "/images/iphone14promax.png",
  },
  {
    id: 2,
    title: "Limited Time Offer",
    subtitle: "Samsung Galaxy S24 Ultra",
    button: "Buy Now",
    buttonLink: "/shop/galaxy-s24-ultra",
    image: "/images/galaxy-s24-ultra.png",
  },
  {
    id: 3,
    title: "Flash Deal",
    subtitle: "Google Pixel 8 Pro",
    button: "Grab It",
    buttonLink: "/shop/pixel-8-pro",
    image: "/images/pixel-8-pro.png",
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
    <div className="col-span-12 mx-auto w-full lg:ps-10 pt-10 lg:col-span-10">
      <div className="relative shadow-lg">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex min-h-[300px] flex-col-reverse items-center justify-between gap-6 bg-gray-900 px-6 py-10 text-white md:flex-row"
            >
              <div className="max-w-xl space-y-4">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                <a
                  href={slide.buttonLink}
                  className="inline-block rounded-full bg-orange-500 px-6 py-2 text-white transition duration-300 hover:bg-orange-600"
                >
                  {slide.button}
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;

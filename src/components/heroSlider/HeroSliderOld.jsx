import Slider from "react-slick";

const slides = [
  {
    id: 1,
    title: "Up to 10% off voucher",
    subtitle: "Iphone 14 Pro Max",
    button: "Shop Now",
    buttonLink: "/shop/iphone-14-pro-max",
    image: "/images/iphone14promax.png",
  },
  {
    id: 2,
    title: "Up to 10% off voucher",
    subtitle: "Iphone 14 Pro Max",
    button: "Shop Now",
    buttonLink: "/shop/iphone-14-pro-max",
    image: "/images/iphone14promax.png",
  },
  {
    id: 3,
    title: "Up to 10% off voucher",
    subtitle: "Iphone 14 Pro Max",
    button: "Shop Now",
    buttonLink: "/shop/iphone-14-pro-max",
    image: "/images/iphone14promax.png",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "3px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "red",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="col-span-10 ps-10 pt-10">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="min-h-[300px] bg-gray-950 text-gray-100">
              <div className="slider-image">
                <img src={slide.image} alt="" />
              </div>
              <div className="slider-content">
                <div className="slider-title">{slide.title}</div>
                <div className="slider-subtitle">{slide.subtitle}</div>
                <div className="slider-button">
                  <a href={slide.buttonLink}>{slide.button}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;

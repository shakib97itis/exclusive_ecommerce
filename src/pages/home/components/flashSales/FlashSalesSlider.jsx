import React from "react";
import Slider from "react-slick";
import ProductCard from "../../../../components/product/ProductCard";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    originalPrice: 160,
    rating: 4.5,
    reviewCount: 88,
    image: "/images/gamepad-havit.jpg",
    tags: ["Wireless", "PC/PS4/Android"],
  },
  {
    id: 2,
    name: "Razer BlackWidow Keyboard",
    currentPrice: 149,
    originalPrice: 179,
    rating: 4.8,
    reviewCount: 215,
    image: "/images/razer-keyboard.jpg",
    tags: ["Mechanical", "RGB"],
  },
  {
    id: 3,
    name: "Logitech G502 Mouse",
    currentPrice: 79,
    originalPrice: 99,
    rating: 4.7,
    reviewCount: 342,
    image: "/images/logitech-mouse.jpg",
    tags: ["Programmable", "11 Buttons"],
  },
  {
    id: 4,
    name: "SteelSeries Arctis 7 Headset",
    currentPrice: 159,
    originalPrice: 199,
    rating: 4.6,
    reviewCount: 176,
    image: "/images/arctis-headset.jpg",
    tags: ["Wireless", "7.1 Surround"],
  },
  {
    id: 5,
    name: "Xbox Elite Series 2 Controller",
    currentPrice: 179,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 421,
    image: "/images/xbox-controller.jpg",
    tags: ["Customizable", "Bluetooth"],
  },
  {
    id: 6,
    name: "Corsair K95 Keyboard",
    currentPrice: 199,
    originalPrice: 249,
    rating: 4.7,
    reviewCount: 198,
    image: "/images/corsair-keyboard.jpg",
    tags: ["Cherry MX", "Macro Keys"],
  },
  {
    id: 7,
    name: "HyperX Cloud II Headset",
    currentPrice: 99,
    originalPrice: 129,
    rating: 4.5,
    reviewCount: 287,
    image: "/images/hyperx-headset.jpg",
    tags: ["7.1 Virtual", "Noise Cancelling"],
  },
  {
    id: 8,
    name: "PlayStation DualSense Controller",
    currentPrice: 69,
    originalPrice: 79,
    rating: 4.4,
    reviewCount: 153,
    image: "/images/ps5-controller.jpg",
    tags: ["Haptic Feedback", "Adaptive Triggers"],
  },
  {
    id: 9,
    name: 'ASUS ROG Monitor 27"',
    currentPrice: 499,
    originalPrice: 599,
    rating: 4.8,
    reviewCount: 112,
    image: "/images/asus-monitor.jpg",
    tags: ["1440p", "165Hz"],
  },
  {
    id: 10,
    name: "Nintendo Switch Pro Controller",
    currentPrice: 59,
    originalPrice: 69,
    rating: 4.3,
    reviewCount: 204,
    image: "/images/switch-controller.jpg",
    tags: ["Motion Controls", "HD Rumble"],
  },
];

function SalesCardSlider({ settings, sliderRef }) {
  return (
    <div className="-mx-[15px]">
      <Slider ref={sliderRef} {...settings}>
        {products.map(() => (
          <div className="px-[15px]">
            <div className="">
              <ProductCard />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SalesCardSlider;

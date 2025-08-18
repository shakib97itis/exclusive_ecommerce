import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const HeroSlide = ({ slide }) => {
  return (
    <div
      key={slide.id}
      className="bg-text-2 relative grid min-h-[300px] grid-cols-1 md:grid-cols-2"
    >
      {/* CONTENT */}
      <div className="h-full space-y-5 p-10 text-center md:ps-16 md:text-start">
        <p className="title-16-regular text-text flex items-center justify-center gap-3.5 md:justify-start">
          <FaApple />
          <span>{slide.subtitle}</span>
        </p>
        <h2 className="heading-48-semibold text-text">{slide.title}</h2>
        <Link
          to="/shop"
          className="title-16-medium text-text z-20 inline-flex items-center gap-1.5"
        >
          <span className="underline underline-offset-8">{slide.button}</span>
          <FaArrowRight className="relative top-[1px]" />
        </Link>
      </div>

      {/* IMAGE */}
      <div className="hidden items-center justify-center md:flex">
        <img
          src={slide.image}
          alt={slide.subtitle}
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSlide;

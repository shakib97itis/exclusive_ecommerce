import consoleImage from "../../assets/product-images/gamming-console.png";

import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Ratings from "../common/Ratings";

const ProductCard = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Product Image Placeholder - Responsive height */}
      <div className="group relative mb-4 flex min-h-60 w-full items-center justify-center overflow-hidden rounded bg-gray-200 px-10 py-9">
        <img
          src={consoleImage}
          alt="Product"
          className="h-full w-full object-cover"
        />
        {/* ABSLUTE POSITION ELEMENTS */}
        <div className="absolute end-2 top-2">
          <div className="mb-2 flex items-center justify-center rounded-full bg-white p-2">
            <IoHeartOutline className="text-text-2 text-2xl" />
          </div>
          <div className="mb-2 flex items-center justify-center rounded-full bg-white p-2">
            <IoEyeOutline className="text-text-2 text-2xl" />
          </div>
        </div>

        {/* ADD TO CART BUTTON */}
        <button className="bg-button hover:bg-button/80 title-16-medium absolute bottom-0 w-full md:translate-y-[110%] cursor-pointer rounded-b px-3 py-2 text-white transition-all duration-300 group-hover:translate-y-0">
          Add to Cart
        </button>
      </div>

      {/* Product Info - Responsive padding */}
      <div className="">
        <h3 className="title-16-medium text-text-2 mb-2 line-clamp-2">
          HAVIT HV-G92 Gamepad Wireless Controller for PC/PS4/Android
        </h3>

        {/* Price - Responsive text sizes */}
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="title-16-medium text-secondary-2">$120</span>
          <span className="title-16-medium text-button/50 line-through">
            $160
          </span>
        </div>

        {/* Ratings - Responsive sizing */}
        <Ratings reviewCount={10} maxRating={5} rating={3} />
      </div>
    </div>
  );
};

export default ProductCard;

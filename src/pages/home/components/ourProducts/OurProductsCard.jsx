import consoleImage from "../../../../assets/product-images/gamming-console.png";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const OurProductsCard = () => {
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
        <span className="bg-secondary-2 title-12-regular text-text absolute top-2 left-2 rounded px-3 py-1">
          -40%
        </span>

        <div className="absolute end-2 top-2">
          <div className="mb-2 flex items-center justify-center rounded-full bg-white p-2">
            <IoHeartOutline className="text-text-2 text-2xl" />
          </div>
          <div className="mb-2 flex items-center justify-center rounded-full bg-white p-2">
            <IoEyeOutline className="text-text-2 text-2xl" />
          </div>
        </div>

        {/* ADD TO CART BUTTON */}
        <button className="bg-button hover:bg-button/80 title-16-medium absolute bottom-0 w-full translate-y-[110%] cursor-pointer rounded-b px-3 py-2 text-white transition-all duration-300 group-hover:translate-y-0">
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
        <Ratings />
      </div>
    </div>
  );
};

const Ratings = ({ reviewCount }) => {
  return (
    <div className="flex items-center">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 fill-current sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <span className="ml-1 text-xs text-gray-600 sm:text-sm">
        ({reviewCount} reviews)
      </span>
    </div>
  );
};

export default OurProductsCard;

import { Link } from "react-router";
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
];

const BestSellingProducts = () => {
  return (
    <section>
      <div className="main-container border-button/30 border-b pt-[80px] pb-[70px]">
        {/* TOP TITLE */}
        <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
          <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
          <p>This Months</p>
        </div>

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-20">
            <h2 className="heading-36-semibold">Best Selling Products</h2>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/shop"
              className="bg-button-2 title-16-medium text-text px-12 py-4"
            >
              View All
            </Link>
          </div>
        </div>

        {/* PRODUCTS CARDS */}
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;

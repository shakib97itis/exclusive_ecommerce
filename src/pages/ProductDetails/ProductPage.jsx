import { useState } from "react";
import { Star, Truck, RotateCcw } from "lucide-react";
import image2 from "../../assets/product/console_2.png";
import image3 from "../../assets/product/console_3.png";
import image4 from "../../assets/product/console_4.png";
import image5 from "../../assets/product/console_5.png";
import ProductGallery from "./ProductGallery";
import Stars from "./components/Stars";
import RelatedItems from "./components/relatedItems/RelatedItems";

export default function Product() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [image2, image3, image4, image5];

  return (
    <div className="main-container">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr] mb-24">
        {/* LEFT - Product Gallery */}
        <ProductGallery thumbnails={thumbnails} />

        {/* RIGHT - Product Details */}
        <div className="flex flex-col">
          {/* Product Info */}
          <div className="border-text-2/40 mb-6 border-b pb-6">
            <h2 className="heading-24-semibold text-text-2 mb-4">
              Havic HV G-92 Gamepad
            </h2>

            <Stars
              isInStock={true}
              totalReviews={50}
              rating={4}
              totalStars={5}
              className="mb-4"
            />

            <p className="heading-24-regular text-text-2 mb-6">$ 192.00</p>
            <p className="title-14-regular text-text-2">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal.
              Pressure sensitive.
            </p>
          </div>

          {/* Color Selector */}
          <div className="mb-6 flex gap-6">
            <h4 className="heading-20-regular text-text-2`">Colours:</h4>
            <div className="flex gap-3">
              {["white", "red"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-6 w-6 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6 flex items-center gap-6">
            <h4 className="heading-20-regular text-text-2">Size:</h4>
            <div className="flex gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-text-2 title-14-m rounded-md border px-4 py-1 ${
                    selectedSize === size
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6 flex gap-4">
            <div className="border-text-2/40 flex gap-3 overflow-clip rounded-sm border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border-text-2/40 flex w-10 cursor-pointer items-center justify-center border-r p-1"
              >
                -
              </button>
              <span className="flex min-w-20 items-center justify-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-secondary-2 text-primary flex w-10 cursor-pointer items-center justify-center p-1"
              >
                +
              </button>
            </div>
            <button className="flex-1 rounded-lg bg-red-500 py-2 font-medium text-white hover:bg-red-600">
              Buy Now
            </button>
            <button className="w-10 h-10 border border-text-2/40 flex items-center justify-center rounded-md">
              <span className="text-4xl font-regular">♡</span>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="flex flex-col border rounded grow">
            <div className="flex items-center gap-3 p-3 grow border-b">
              <Truck className="h-5 w-5" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg p-3 grow">
              <RotateCcw className="h-5 w-5" />
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <RelatedItems />
    </div>
  );
}

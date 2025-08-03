import React from "react";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Free Delivery */}
          <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full w-[80px] h-[80px] bg-primary-1/60 p-2">
                <div className="flex rounded-full bg-button w-full h-full p-3 justify-center items-center">
                  <FaTruck className="text-3xl text-text" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 title-20-semibold text-button">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-button title-14-regular">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Customer Service */}
          <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full w-[80px] h-[80px] bg-primary-1/60 p-2">
                <div className="flex rounded-full bg-button w-full h-full p-3 justify-center items-center">
                  <FaHeadset className="text-3xl text-text" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 title-20-semibold text-button">
             24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-button title-14-regular">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Money Back */}
          <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full w-[80px] h-[80px] bg-primary-1/60 p-2">
                <div className="flex rounded-full bg-button w-full h-full p-3 justify-center items-center">
                  <FaMoneyBillWave className="text-3xl text-text" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 title-20-semibold text-button">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-button title-14-regular">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

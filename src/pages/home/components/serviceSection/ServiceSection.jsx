import React from "react";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <section>
      <div className="main-container pb-[70px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Free Delivery */}
            <div className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="bg-primary-1/60 h-[80px] w-[80px] rounded-full p-2">
                  <div className="bg-button flex h-full w-full items-center justify-center rounded-full p-3">
                    <FaTruck className="text-text text-3xl" />
                  </div>
                </div>
              </div>
              <h3 className="title-20-semibold text-button mb-2">
                FREE AND FAST DELIVERY
              </h3>
              <p className="text-button title-14-regular">
                Free delivery for all orders over $140
              </p>
            </div>

            {/* Customer Service */}
            <div className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="bg-primary-1/60 h-[80px] w-[80px] rounded-full p-2">
                  <div className="bg-button flex h-full w-full items-center justify-center rounded-full p-3">
                    <FaHeadset className="text-text text-3xl" />
                  </div>
                </div>
              </div>
              <h3 className="title-20-semibold text-button mb-2">
                24/7 CUSTOMER SERVICE
              </h3>
              <p className="text-button title-14-regular">
                Friendly 24/7 customer support
              </p>
            </div>

            {/* Money Back */}
            <div className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="bg-primary-1/60 h-[80px] w-[80px] rounded-full p-2">
                  <div className="bg-button flex h-full w-full items-center justify-center rounded-full p-3">
                    <FaMoneyBillWave className="text-text text-3xl" />
                  </div>
                </div>
              </div>
              <h3 className="title-20-semibold text-button mb-2">
                MONEY BACK GUARANTEE
              </h3>
              <p className="text-button title-14-regular">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

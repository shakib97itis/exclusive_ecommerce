import { useState } from "react";

export default function CheckoutSummary() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [coupon, setCoupon] = useState("");

  return (
    <div className="min-w-[600px] space-y-8 p-4">
      {/* Cart Items */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/console.png" alt="LCD Monitor" className="h-14 w-14" />
            <span className="title-16-regular">LCD Monitor</span>
          </div>
          <span className="title-16-regular">$650</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/console.png" alt="H1 Gamepad" className="h-14 w-14" />
            <span>H1 Gamepad</span>
          </div>
          <span className="">$1100</span>
        </div>
      </div>

      {/* Price Summary */}
      <div className="space-y-4">
        <div className="flex justify-between border-b pb-3 text-gray-600">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between border-b pb-3 text-gray-600">
          <span>Shipping:</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Total:</span>
          <span>$1750</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-red-500"
            />
            <span>Bank</span>
          </label>
          {/* Payment Logos */}
          <div className="flex items-center gap-2">
            <img
              src="/public/bank-logo/Bkash.png"
              alt="Bkash"
              className="h-6"
            />
            <img src="/public/bank-logo/Visa.png" alt="Visa" className="h-6" />
            <img
              src="/public/bank-logo/Mastercard.png"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="/public/bank-logo/Nagad.png"
              alt="Nagad"
              className="h-6"
            />
          </div>
        </div>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="accent-red-500"
          />
          <span>Cash on delivery</span>
        </label>
      </div>

      {/* Coupon */}
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-grow rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <button className="bg-button-2 hover:bg-secondary-2 cursor-pointer rounded-sm px-4 py-2 text-base text-white">
          Apply Coupon
        </button>
      </div>

      {/* Place Order Button */}
      <button className="bg-button-2 title-16-medium cursor-pointer rounded-sm px-12 py-4 text-white hover:bg-red-600">
        Place Order
      </button>
    </div>
  );
}

import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useState } from "react";

const placeholderImg =
  "https://images.unsplash.com/photo-1522069213448-443a614da9b6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: placeholderImg,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: placeholderImg,
    },
  ]);

  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(qty) } : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCouponApply = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid Coupon!");
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  
  const total = subtotal - subtotal * discount;

  return (
    <>
      <Header />
      <NavBar />
      <div className="main-container pt-20 pb-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Electronics", href: "/products/electronics" },
            { label: "Cameras", href: "/products/electronics/cameras" },
            { label: "Canon EOS R5" },
          ]}
          maxVisible={4}
        />
      </div>

      {/* CART START */}
      <section>
        <div className="main-container mb-20">
          {/* Cart Items */}
          <div className="mb-20 min-w-[600px]">
            <div className="mb-4 grid grid-cols-5 items-center px-10 py-6 shadow gap-4">
              <span className="col-span-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-4 grid grid-cols-5 items-center px-10 py-6 shadow gap-4"
              >
                <div className="flex items-center gap-3 col-span-2">
                  <div className="relative">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="font-bold text-primary bg-secondary-2 w-6 h-6 flex items-center justify-center rounded-full absolute -top-3 -left-3"
                    >
                      ✕
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded object-cover"
                    />
                  </div>
                  <span>{item.name}</span>
                </div>

                <span>${item.price}</span>
                <div>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="w-auto rounded border px-2 py-1"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}

            <div className="mt-6 flex justify-between">
              <button className="rounded border px-4 py-2">
                Return To Shop
              </button>
              <button className="rounded border px-4 py-2">Update Cart</button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="grid md:grid-cols-2">
            <div>
              <div className="flex mb-4 gap-4">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon Code"
                  className="w-1/2 rounded border px-3 py-2"
                />
                <button
                  onClick={handleCouponApply}
                  className="rounded bg-red-500 px-4 py-2 text-white"
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Cart Total */}
            <div className="h-fit rounded border p-6">
              <h2 className="mb-4 text-lg font-bold">Cart Total</h2>
              <div className="mb-2 flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-600">Free</span>
              </div>
              {discount > 0 && (
                <div className="mb-2 flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>-{discount * 100}%</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <button className="mt-4 w-full rounded bg-red-500 py-2 text-white">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CART END */}
      <Footer />
    </>
  );
};

export default CartPage;

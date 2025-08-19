import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import WishList from "./components/WishList/WishList";

const WishListPage = () => {
  const wishListCount = 4;

  return (
    <>
      <Header />
      <NavBar />
      <section>
        <div className="main-container pt-20 pb-12">
          <div className="mb-10 flex items-center justify-between">
            <div className="">Wishlist {wishListCount}</div>
            <button className="border px-12 py-4 cursor-pointer">Move All To Bag</button>
          </div>

          <WishList />

          <div className="mb-10 flex items-center justify-between">
            <div className="title-16-semibold text-secondary-2 mb-6 flex items-center gap-2.5">
              <div className="bg-secondary-2 h-10 w-5 rounded-sm"></div>
              <p>Related Items</p>
            </div>
            <button className="border px-12 py-4 cursor-pointer">See All</button>
          </div>

          {/* Just for you section */}
          <WishList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WishListPage;

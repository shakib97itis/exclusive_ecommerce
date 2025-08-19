import React from "react";
import NavBar from "../../components/navigation/NavBar";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import Product from "./ProductPage";

const ProductDetails = () => {
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

      {/* MAIN CONTENT START */}
      <Product />

      {/* MAIN CONTENT END */}

      <Footer />
    </>
  );
};

export default ProductDetails;

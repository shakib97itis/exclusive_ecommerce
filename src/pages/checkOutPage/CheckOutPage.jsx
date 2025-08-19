import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";

const CheckOutPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section>
        <div className="main-container">
          <h1>CheckOut</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckOutPage;

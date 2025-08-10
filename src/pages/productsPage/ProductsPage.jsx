import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="main-container">
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

      <main className="main-container grid grid-cols-[auto_1fr] gap-4">
        <aside>
          <div>
            <h3>Shop by Category</h3>
          </div>
          <div>
            <h3>Shop by Color</h3>
          </div>
        </aside>
        <section>
          <div>Show:5</div>
          {/**
           * TODO: GRID
           */}
          <div className="grid grid-cols-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;

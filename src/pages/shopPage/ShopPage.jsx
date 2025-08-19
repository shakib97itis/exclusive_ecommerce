import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import SidebarFilter from "../../features/products/components/sidebarFilter/SidebarFilter";
import OurProductsCard from "../../features/products/components/ourProducts/OurProductsCard";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ShopPage = () => {
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

      <main className="main-container grid grid-cols-[auto_1fr] gap-20">
        <aside>
          <SidebarFilter />
        </aside>
        <section>
          <div className="mb-7">Show:5</div>
          {/**
           * TODO: GRID
           */}
          <div className="grid grid-cols-3 gap-x-7 gap-y-10">
            {products.map((product) => (
              <OurProductsCard key={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ShopPage;

import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import SidebarFilter from "./components/sidebarFilter/SidebarFilter";
import ProductCard from "../../components/product/ProductCard";
import { useState } from "react";
import Pagination from "../../components/pagination/Pagination";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Header />
      <NavBar />

      {/** BREADCRUMB **/}
      <div className="main-container mb-10 pt-10">
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

      <main className="main-container mb-10 grid grid-cols-1 xl:grid-cols-[auto_1fr] xl:gap-x-14">
        <SidebarFilter isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <section>
          <div className="mb-7 flex items-center justify-between">
            <button
              className="text-text-2/70 hover:text-text-2 cursor-pointer xl:hidden"
              onClick={toggleSidebar}
            >
              Filter
            </button>

            <div className="ms-auto">
              <label
                htmlFor="show"
                className="title-16-regular text-text-2 me-1"
              >
                Show:{" "}
              </label>
              <input
                id="show"
                type="text"
                className="w-[97px] rounded-md border-2 border-gray-400 px-1 py-0.5 text-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} />
            ))}
          </div>
        </section>
      </main>

      {/* <section className="main-container mb-20">
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
      </section> */}

      <Footer />
    </div>
  );
};

export default ProductsPage;

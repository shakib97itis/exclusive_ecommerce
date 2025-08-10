import { Link } from "react-router";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import CategoryNav from "../../components/navigation/CategoryNav";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import FlashSales from "../../features/products/components/freshSales/FreshSales";
import BrowsByCategories from "../../features/products/components/browseByCategories/BrowseByCategories";
import BestSellingProducts from "../../features/products/components/bestSellingProducts/BestSellingProducts";
import SalesBanner from "../../features/products/components/salesBanner/SalesBanner";
import OurProducts from "../../features/products/components/ourProducts/OurProducts";
import NewArrival from "../../features/products/components/newArrival/newArrival";
import ServiceSection from "../../components/serviceSection/ServiceSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />

      {/* MAIN CONTENT START */}
      <div className="main-container mb-10 grid grid-cols-12">
        {/* CATEGORIES NAV HOLDER */}
        <CategoryNav />
        {/* HERO BANNER SLIDER */}
        <HeroSlider />
      </div>

      <section className="">
        <div className="main-container border-button/30 overflow-x-hidden border-b pb-[60px]">
          <FlashSales />
        </div>
      </section>

      <section className="">
        <div className="main-container border-button/30 overflow-x-hidden border-b pt-[80px] pb-[70px]">
          <BrowsByCategories />
        </div>
      </section>

      <section className="">
        <div className="main-container border-button/30 border-b pt-[80px] pb-[70px]">
          <BestSellingProducts />
        </div>
      </section>

      <section className="">
        <div className="main-container border-button/30 border-b pt-[80px] pb-[70px]">
          <SalesBanner />
        </div>
      </section>

      <section className="">
        <div className="main-container border-button/30 overflow-x-hidden border-b pt-[80px] pb-[70px]">
          <OurProducts />
        </div>
      </section>

      <section className="">
        <div className="main-container pt-[80px] pb-[70px]">
          <NewArrival />
        </div>
      </section>

      <section className="">
        <div className="main-container pb-[70px]">
          <ServiceSection />
        </div>
      </section>

      <Footer />

      {/* MAIN CONTENT END */}
    </>
  );
};

export default Home;

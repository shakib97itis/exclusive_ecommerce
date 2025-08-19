import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import HeroSection from "./components/heroSection/HeroSection";

import FlashSales from "./components/flashSales/FlashSales";
import BrowsByCategories from "./components/browseByCategories/BrowseByCategories";
import SalesBanner from "./components/salesBanner/SalesBanner";
import OurProducts from "./components/ourProducts/OurProducts";
import NewArrival from "./components/newArrival/newArrival";
import ServiceSection from "./components/serviceSection/ServiceSection";
import Footer from "../../components/footer/Footer";
import BestSellingProducts from "./components/bestSellingProducts/BestSellingProducts";

const Home = () => {
  return (
    <>
      {/* HEADER SECTION */}
      <Header />

      {/* NAV BAR SECTION */}
      <NavBar />

      {/* HERO SECTION */}
      <HeroSection />

      {/* FLASH SALES SECTION */}
      <FlashSales />

      {/* BROWSE BY CATEGORIES SECTION */}
      <BrowsByCategories />

      {/* BEST SELLING PRODUCTS SECTION */}
      <BestSellingProducts />

      {/* SALES BANNER SECTION */}
      <SalesBanner />

      {/* OUR PRODUCTS SECTION */}
      <OurProducts />

      {/* NEW ARRIVAL SECTION */}
      <NewArrival />

      {/* SERVICE SECTION */}
      <ServiceSection />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default Home;

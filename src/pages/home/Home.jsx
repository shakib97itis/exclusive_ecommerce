import { Link } from "react-router";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import CategoryNav from "../../components/navigation/CategoryNav";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import FlashSales from "../../features/products/components/freshSales/FreshSales";
import BrowsByCategories from "../../features/products/components/browseByCategories/BrowseByCategories";
import BestSellingProducts from "../../features/products/components/bestSellingProducts/BestSellingProducts";
import SalesBanner from "../../features/products/components/salesBanner/SalesBanner";

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
        <div className="main-container pb-[60px] border-b border-button/30">
          <FlashSales />
        </div>
      </section>

      <section className="">
        <div className="main-container pb-[70px] pt-[80px] border-b border-button/30">
          <BrowsByCategories />
        </div>
      </section>

      <section className="">
        <div className="main-container pb-[70px] pt-[80px] border-b border-button/30">
          <BestSellingProducts />
        </div>
      </section>

      <section className="">
        <div className="main-container pb-[70px] pt-[80px] border-b border-button/30">
          <SalesBanner />
        </div>
      </section>


      {/* MAIN CONTENT END */}
    </>
  );
};

export default Home;

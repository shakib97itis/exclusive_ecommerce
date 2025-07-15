import { Link } from "react-router";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import CategoryNav from "../../components/navigation/CategoryNav";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import FlashSales from "../../features/products/components/flashSales/FlashSales";

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
        <div className="main-container">
          <FlashSales />
        </div>
      </section>

      {/* MAIN CONTENT END */}
    </>
  );
};

export default Home;

import { Link } from "react-router";
import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import CategoryNav from "../../components/navigation/CategoryNav";
import HeroSlider from "../../components/heroSlider/HeroSlider";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      {/* HOME MAIN CONTENT LAYOUT */}

      <div className="container grid grid-cols-12">
        {/* CATEGORIES NAV HOLDER */}
        <CategoryNav />

        {/* HERO BANNER SLIDER */}
        <HeroSlider />
      </div>
    </>
  );
};

export default Home;

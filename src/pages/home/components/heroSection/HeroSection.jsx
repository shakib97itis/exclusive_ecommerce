import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import HeroSlider from "../heroSlider/HeroSlider";

const categoryNav = [
  { name: "Woman’s Fashion", path: "/categories/womens-fashion" },
  { name: "Men’s Fashion", path: "/categories/mens-fashion" },
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Home & lifestyle", path: "/categories/home-lifestyle" },
  { name: "Medicine", path: "/categories/" },
];

const HeroSection = () => {
  return (
    <section>
      <div className="main-container mb-10 grid grid-cols-12">
        {/* CATEGORY NAVIGATION */}
        <div className="border-r-text-2/30 col-span-2 hidden border-r pt-10 lg:block">
          <ul className="space-y-3">
            {categoryNav.map((nav) => (
              <li
                key={nav.name}
                className="title-16-regular text-text-2 hover:text-text-1 flex cursor-pointer items-center justify-between transition"
              >
                <Link to={nav.path}>{nav.name}</Link>
                {/* <FaChevronRight className="relative top-[1px]" /> */}
              </li>
            ))}
          </ul>
        </div>

        {/* HERO BANNER SLIDER */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default HeroSection;

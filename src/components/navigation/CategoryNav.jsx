import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";



const categoryNav = [
  { name: "Woman’s Fashion", path: "/categories/womens-fashion" },
  { name: "Men’s Fashion", path: "/categories/mens-fashion" },
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Home & lifestyle", path: "/categories/home-lifestyle" },
  { name: "Medicine", path: "/categories/" },
];

const CategoryNav = () => {
  return (
    <div className="border-r-text-2/30 col-span-2 hidden border-r pt-10 lg:block">
      <ul className="space-y-3">
        {categoryNav.map((nav) => (
          <li key={nav.name} className="title-16-regular flex items-center justify-between text-text-2 hover:text-text-1 transition cursor-pointer">
            <Link to={nav.path}>{nav.name}</Link>
            {/* <FaChevronRight className="relative top-[1px]" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;

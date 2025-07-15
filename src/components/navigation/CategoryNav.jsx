import { Link } from "react-router";

const categoryNav = [
  { name: "Woman’s Fashion", path: "/categories/womens-fashion" },
  { name: "Men’s Fashion", path: "/categories/mens-fashion" },
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Home & lifestyle", path: "/categories/home-lifestyle" },
  { name: "Medicine", path: "/categories/" },
];

const CategoryNav = () => {
  return (
    <div className="border-r-text-2/30 col-span-2 border-r pt-10">
      <ul className="space-y-3">
        {categoryNav.map((nav) => (
          <li key={nav.name} className="title-16-regular text-text-2">
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;

import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { Link } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="md:border-button/30 relative md:border-b md:pt-12 md:pb-6">
      <div className="main-container flex flex-wrap items-center justify-between py-4 md:py-0">
        {/* LOGO */}
        <Link to="/" className="heading-24-bold text-text-2">
          Exclusive
        </Link>

        <div className="flex space-x-3 md:order-2 md:space-x-0">
          <div className="flex items-center gap-[20px]">
            {/* SEARCH BAR */}
            <form className="hidden lg:block">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900"
              >
                Search
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex cursor-pointer items-center px-3">
                  <CiSearch className="text-text-2 h-4 w-4 text-base" />
                </div>

                <input
                  type="search"
                  id="default-search"
                  className="title-12-regular bg-secondary block w-full rounded-lg py-3 ps-5 pe-10 focus:outline-0"
                  placeholder="Search products..."
                  required
                />
              </div>
            </form>

            {/* FAVOURITE */}
            <div className="">
              <GrFavorite className="text-text-2 h-6 w-6 cursor-pointer" />
            </div>
            {/* CART */}
            <div className="cart">
              <IoCartOutline className="text-text-2 h-6 w-6 cursor-pointer" />
            </div>
            {/* USER */}
            <div className="user">
              <FiUser className="text-text-2 h-6 w-6 cursor-pointer" />
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `title-16-regular text-text-2 block rounded-sm px-3 py-2 text-center hover:font-semibold md:p-0 md:text-left ${
                      isActive ? "title-16-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router";

import { FiShoppingBag } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfilePreviewOpen, setIsProfilePreviewOpen] = useState(false);

  const navRef = useRef(null);

  // Close when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (navRef.current && !navRef.current.contains(e.target)) {
  //       setIsNavOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <nav className="">
      <div className="main-container">
        <div className="border-button/30 relative border-b">
          <div className="flex items-center justify-between gap-4 pt-10 pb-4">
            {/* Logo link */}
            <div className="flex items-center">
              <Link to="/" className="heading-24-bold text-text-2">
                Exclusive
              </Link>
            </div>

            {/* Desktop Nav (hidden on mobile) */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-12">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `title-16-regular text-text-2 transition ${
                          isActive ? "title-16-semibold" : "hover:text-text-1"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons and Search */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="bg-secondary title-12-regular rounded border border-none py-2.5 pr-[70px] pl-5 text-sm focus:outline-none"
                  />
                  <CiSearch className="text-text-2 absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2" />
                </div>
              </div>

              <GrFavorite className="text-text-2 hover:text-text-1 h-8 w-8 cursor-pointer" />

              <IoCartOutline className="text-text-2 hover:text-text-1 h-8 w-8 cursor-pointer" />

              <div className="relative">
                {/* User Icon */}
                <FiUser
                  onClick={() => setIsProfilePreviewOpen(!isProfilePreviewOpen)}
                  className="text-text-2 hover:text-text-1 h-8 w-8 cursor-pointer"
                />
                {/* User profile preview */}
                <ProfilePreview isProfilePreviewOpen={isProfilePreviewOpen} />
              </div>

              {/* Mobile menu button (TODO: WORK ON THE ICON)*/}
              <button
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none md:hidden"
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-expanded={isNavOpen}
              >
                {isNavOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu using CSS Grid animation */}
          <div
            ref={navRef}
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
              isNavOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-2 pb-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsNavOpen(false)}
                    className={({ isActive }) =>
                      `title-16-regular text-text-2 block px-3 py-2 ${
                        isActive
                          ? "title-16-semibold bg-gray-100"
                          : "text-gray-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile search */}
                <div className="">
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="bg-secondary title-12-regular w-full rounded border border-none py-2.5 pr-[70px] pl-5 text-sm focus:outline-none"
                    />
                    <CiSearch className="text-text-2 absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const ProfilePreview = ({ isProfilePreviewOpen }) => {
  return (
    <div
      className={`absolute top-14 right-0 z-10 grid min-w-[250px] rounded-md bg-black/20 shadow-md backdrop-blur-md transition-[grid-template-rows] duration-300 ease-in-out ${isProfilePreviewOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className="overflow-hidden">
        <div className="space-y-3.5 ps-5 pe-2.5 pt-5 pb-2.5">
          <Link to="/profile" className="flex items-center gap-4">
            <FiUser className="text-text hover:text-text-1 h-6 w-6 cursor-pointer" />
            <span className="text-text title-14-regular">
              Manage My Account
            </span>
          </Link>
          <Link to="/profile" className="flex items-center gap-4">
            <FiShoppingBag className="text-text hover:text-text-1 h-6 w-6 cursor-pointer" />
            <span className="text-text title-14-regular">My Order</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-4">
            <FiXCircle className="text-text hover:text-text-1 h-6 w-6 cursor-pointer" />
            <span className="text-text title-14-regular">My Cancellations</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-4">
            <FiStar className="text-text hover:text-text-1 h-6 w-6 cursor-pointer" />
            <span className="text-text title-14-regular">My Reviews</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-4">
            <FiLogOut className="text-text hover:text-text-1 h-6 w-6 cursor-pointer" />
            <span className="text-text title-14-regular">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

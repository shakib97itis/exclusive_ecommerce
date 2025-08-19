const categories = ["Category 1", "Category 2", "Category 3"];

const colors = [
  { name: "Red", code: "#FF0000" },
  { name: "Green", code: "#00FF00" },
  { name: "Blue", code: "#0000FF" },
];

const SidebarFilter = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Desktop */}
      <aside className="hidden space-y-10 xl:block">
        {/* Shop by Category */}
        <div className="">
          <h2 className="title-20-semibold mb-4">Shop by Category</h2>
          <ul className="space-y-4">
            {categories.map((category, idx) => (
              <li
                key={idx}
                className="text-text-2/70 hover:text-text-2 title-16-regular cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Shop by Color */}
        <div>
          <h2 className="title-20-semibold mb-4">Shop by Color</h2>
          <ul className="space-y-4">
            {colors.map((color, idx) => (
              <li key={idx} className="flex cursor-pointer items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: color.code }}
                ></span>
                <span className="text-text-2/70 title-16-regular">
                  {color.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-10 h-dvh min-w-[300px] overflow-y-auto bg-white p-6 transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"} xl:hidden`}
      >
        {/* Close Button */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="heading-20-semibold">Filter</h2>
          <button
            className="text-text-2/70 hover:text-text-2 cursor-pointer"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-10">
          {/* Shop by Category */}
          <div className="">
            <h2 className="title-20-semibold mb-4">Shop by Category</h2>
            <ul className="space-y-4">
              {categories.map((category, idx) => (
                <li
                  key={idx}
                  className="text-text-2/70 hover:text-text-2 title-16-regular cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Color */}
          <div>
            <h2 className="title-20-semibold mb-4">Shop by Color</h2>
            <ul className="space-y-4">
              {colors.map((color, idx) => (
                <li
                  key={idx}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: color.code }}
                  ></span>
                  <span className="text-text-2/70 title-16-regular">
                    {color.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarFilter;

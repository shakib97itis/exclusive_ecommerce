import React from "react";

const categories = ["Category 1", "Category 2", "Category 3"];

const colors = [
  { name: "Red", code: "#FF0000" },
  { name: "Green", code: "#00FF00" },
  { name: "Blue", code: "#0000FF" },
];

const SidebarFilter = () => {
  return (
    <aside className="">
      {/* Shop by Category */}
      <div className="mb-8">
        <h2 className="mb-4 ">Shop by Category</h2>
        <ul className="space-y-2">
          {categories.map((category, idx) => (
            <li
              key={idx}
              className="cursor-pointer text-gray-700 hover:text-gray-900"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Shop by Color */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Shop by Color</h2>
        <ul className="space-y-3">
          {colors.map((color, idx) => (
            <li key={idx} className="flex cursor-pointer items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: color.code }}
              ></span>
              <span className="text-gray-700">{color.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFilter;

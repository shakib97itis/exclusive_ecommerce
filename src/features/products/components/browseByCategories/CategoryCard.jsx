import React from "react";

const CategoryCard = ({ icon: CategoryIcon, title }) => {
  return (
    <div className="group hover:bg-secondary-2 border-text-2/30 flex h-full cursor-pointer flex-col items-center justify-center rounded border px-14 py-6 transition-all hover:border-none">
      {/* category icons */}
      {CategoryIcon ? (
        <CategoryIcon className="text-button group-hover:text-text mb-4 text-[56px] transition-colors" />
      ) : (
        <p>{title}</p>
      )}
      {/* category title */}
      <p className="title-16-regular text-text-2 group-hover:text-text transition-colors">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;

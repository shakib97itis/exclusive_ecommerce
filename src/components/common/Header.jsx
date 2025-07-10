import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto bg-neutral-900 text-white flex justify-between">
      <p className="flex-grow text-center">Exclusive E-Commerce</p>
      <select className="" name="" id="">
        <option value="">Select language</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
      </select>
    </div>
  );
};

export default Header;

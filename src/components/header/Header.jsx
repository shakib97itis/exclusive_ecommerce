import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-button text-text">
      <div className="main-container flex justify-center md:justify-between">
        <p className="title-14-regular text-text hidden flex-grow py-[15px] text-center md:block">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/" className="title-14-semibold text-text ml-2 underline">
            Shop Now
          </Link>
        </p>

        <div className="flex py-1">
          <select
            id="language"
            className="bg-text-2 cursor-pointer py-2.5 text-sm focus:outline-none"
          >
            <option defaultValue={true}>ENGLISH</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;

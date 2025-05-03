import React from "react";
import Links from "./Links";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-[55px] bg-[#2E3192] flex items-center px-4 gap- z-50">
        {/* Logo */}
        <img
          src="/indimart-logo-removebg-preview.png"
          alt="logo"
          className="w-40 cursor-pointer"
          onClick={() => window.location.reload()}
        />

        {/* Search Bar */}
        <SearchBar />

        {/* Get Best Price Button */}
        <button className="w-[115px] h-[35px] text-[#2E3192] bg-white ml-4 rounded-[3px] font-extrabold text-[15px] font-style">
          Get Best Price
        </button>

        {/* Right Side Links */}
        <Links />

      </div>
      <div className="pb-[60px]"></div>
    </>
  );
};

export default Navbar;

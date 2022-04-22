import React from "react";
import { Navbar } from "../components";
import { FiZap } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex fixed z-30 flex-row-reverse md:flex-row justify-between px-12 xl:px-40 py-8 inset top-0 text-skin-base  w-full backdrop-blur-sm">
      <div className="logo">
        <a href="#الرئيسية">
          <FiZap className="text-4xl" />
        </a>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

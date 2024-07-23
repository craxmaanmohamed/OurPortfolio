import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md font-sans tracking-wide relative ">
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-2 bg-whitee min-h-[70px]">
        <a href="/">
          <img  src="/images/white logo.png" alt="logo" className=" w-auto h-8" />
        </a>

        <div className={`${isMenuOpen ? 'fixed': 'hidden'}`} onClick={toggleMenu}></div>
        
        <div>
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block fixed lg:static top-0 left-0 lg:w-auto w-1/2 min-w-[300px] bg-whitee  h-full lg:h-auto max-lg:bg  p-6 lg:p-0 shadow-md lg:shadow-none overflow-auto z-50`}>
            <button onClick={toggleMenu} className="lg:hidden border-2 bg-pr-color border-pr-color fixed top-2 right-4 z-[100] rounded-full  p-3">
              <FaTimes className="w-5 h-5 " />
            </button>
            <ul className="lg:flex lg:h-14 lg:items-center lg:gap-x-5 max-lg:space-y-3 ">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="/" onClick={toggleMenu} className="hover:text-pr-color block font-bold text-[15px]">Home</Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="/AboutUs" onClick={toggleMenu} className="hover:text-pr-color text-[#333] block font-bold text-[15px]">About</Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="/OurBlogs" onClick={toggleMenu} className="hover:text-pr-color text-[#333] block font-bold text-[15px]">Blog</Link>
              </li>
              <li className="max-lg:border-b rounded-sm hover:bg-transparent border-2 transition-all duration-500 border-pr-color max-lg:py-3 px-3 bg-pr-color">
                <Link to="/ContactUs" onClick={toggleMenu} className="hover:text-pr-color text-white p-2 block font-bold text-[15px]">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            <FiMenu className="w-8 h-8 fill-black" />
          </button>
        </div>
      </div>
    </header>
  );
}

import React, { useState } from "react";
import { LuSunMedium, LuMoon } from "react-icons/lu";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" container flex items-center justify-between flex-wrap px-8 py-4 w-full backdrop-blur-xl sticky top-0 z-30 border-b border-transparent bg-gray border-gray-light-100 dark:border-gray-dark-100">
      <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
        <span className="text-gray-900 text-[30px] font-bold dark:text-gray-dark-900">&lt;RB/&gt;</span>
      </div>
      <div className="block lg:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 dark:text-gray-50 dark:hover:text-gray-400">
          <svg
            className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-80 block right-0 lg:flex lg:items-center lg:w-auto ${
          isOpen ? "absolute top-6 shadow-md rounded-sm p-4 z-10 bg-gray-light-100 dark:bg-gray-dark-100 " : "hidden"
        }`}>
        <div className="text-sm text-[16px] font-medium text-gray-light-600 dark:text-gray-dark-600">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4  hover:text-gray-light-400">
            About
          </a>
          <a
            href="#work"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4  hover:text-gray-light-400">
            Work
          </a>
          <a
            href="#testimonials"
            className="block mt-4 lg:inline-block lg:mt-0 0 mr-4  hover:text-gray-light-400">
            Testimonials
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4  hover:text-gray-light-400">
            Contact
          </a>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-gray-light-400">
            {darkMode ? (
              <LuMoon
                className={`w-6 h-6 block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${isOpen ? "mb-3 " : ""}`}
                onClick={toggleDarkMode}
              />
            ) : (
              <LuSunMedium
                className={`w-6 h-6 block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${isOpen ? "mb-3 " : ""}`}
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>
        <button className=" bg-gray-light-900 text-gray-light-50 dark:bg-gray-dark-900 dark:text-gray-dark-50 text-[16px] font-medium px-4 py-1.5 rounded-xl lg:mx-4 ">
          Download CV
        </button>
        <div></div>
      </div>
    </nav>
  );
}

{
  /* <LuSunMedium className="w-6 h-6 block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" />
          <button className="bg-gray-900 text-gray-50 text-[16px] font-medium px-4 py-1.5 rounded-xl mx-4 ">
            Download CV
          </button> */
}

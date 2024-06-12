import React, { useState } from "react";
import DarkMode from "./DarkMode";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="section">
      <div className="bg-gray-200 border-gray-200 dark:bg-gray-900 shadow-xl ">
        <nav className="">
          <div className="max-w-screen-4xl text-2xl flex flex-wrap items-center justify-between mx-auto p-6">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src={Logo}
                className="h-12"
                alt="Logo"
              />
              <span className="self-center dark:text-white text-bold text-3xl font-semibold whitespace-nowrap mt-2">
                FlufFu
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="#"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default tracking-wider">
              <ul className="font-small flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black 0 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  0 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
               
                <li>
                  <Link
                    to="/price-list"
                    // to="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black   md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    // to="/services"
                    to="/customer-service"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black   md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    FAQ
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/contact-us"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
                <DarkMode />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

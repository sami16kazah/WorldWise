import { NavLink } from 'react-router-dom';

import { useState } from 'react';

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-gray-800">
      {/* Logo and first link */}
      <div className="flex items-center space-x-4">
        <img className="w-8 md:w-10" src="/vite.svg" alt="WorldWise Logo" />
        <NavLink
          to="/"
          className={`text-white hover:text-gray-300 tracking-widest font-bold`}
        >
          WorldWise
        </NavLink>
      </div>

      {/* Navigation links */}
      <ul className="hidden md:flex items-center space-x-4 list-none">
        <li>
          <NavLink
            to="/pricing"
            className="text-white hover:text-gray-300 tracking-widest"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className="text-white hover:text-gray-300 tracking-widest"
          >
            Product
          </NavLink>
        </li>
        <li>
          <button className="bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2 text-white tracking-widest">
            <NavLink to="/login" className="text-center">
              Log in
            </NavLink>
          </button>
        </li>
      </ul>

      {/* Mobile hamburger menu button */}
      <button
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-white block"
        onClick={() => {
          handleMenuToggle();
        }}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu content */}
      <div
        className={`absolute top-0 left-0 h-full w-full bg-gray-800 z-50 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-white">
          <li>
            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-white block"
              onClick={() => {
                handleMenuToggle();
              }}
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </li>
          <li>
            <NavLink to="/" className="hover:text-gray-300">
              WorldWise
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="hover:text-gray-300">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="hover:text-gray-300">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="hover:text-gray-300">
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PageNav;

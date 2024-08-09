import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

const NavbarHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const [cartCount, setCartCount] = useState(getCartCount());
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleCartUpdate = () => {
      setCartCount(getCartCount());
    };

    handleCartUpdate();
  }, [getCartCount]);

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="bg-white text-black py-4 px-6 lg:px-10 fixed top-0 left-0 w-full z-50 flex items-center justify-between font-roboto">
        {/* Title */}
        <div className="flex items-center w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-pink-500">
            DarkMoon
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
          <Link to="/" className={`hover:text-pink-500 uppercase text-sm font-semibold ${isActive("/") ? "text-pink-500" : ""}`}>
            Home
          </Link>
          <Link to="/products" className={`hover:text-pink-500 uppercase text-sm font-semibold ${isActive("/products") ? "text-pink-500" : ""}`}>
            Products
          </Link>
          <Link to="/about-us" className={`hover:text-pink-500 uppercase text-sm font-semibold ${isActive("/about-us") ? "text-pink-500" : ""}`}>
            About Us
          </Link>
          <Link to="/trending" className={`hover:text-pink-500 uppercase text-sm font-semibold ${isActive("/trending") ? "text-pink-500" : ""}`}>
            Trending
          </Link>
          <Link to="/contact" className={`hover:text-pink-500 uppercase text-sm font-semibold ${isActive("/contact") ? "text-pink-500" : ""}`}>
            Contact
          </Link>
        </div>

        {/* Cart Icon for Desktop */}
        <div className="hidden md:flex items-center relative">
          <Link to="/cart" className="relative text-pink-500 hover:text-pink-700">
            <FaShoppingCart size={32} />
            {cartCount > 0 && <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1/2 -translate-y-1/2">{cartCount}</span>}
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ml-auto cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-3 left-0 w-full z-10 bg-white text-black transition-transform duration-300 ease-in-out ${isOpen ? "mt-10 translate-y-0" : "-translate-y-full"} md:hidden shadow-lg`}>
        <ul className="flex flex-col items-center">
          <li>
            <Link to="/" className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/") ? "text-pink-500" : ""}`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/products") ? "text-pink-500" : ""}`} onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about-us" className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/about-us") ? "text-pink-500" : ""}`} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/trending" className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/trending") ? "text-pink-500" : ""}`} onClick={() => setIsOpen(false)}>
              Trending
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`block px-4 py-2 hover:bg-gray-200 ${isActive("/contact") ? "text-pink-500" : ""}`} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          {/* Cart Icon in Mobile Menu */}
          <li className="mt-4 flex items-center mb-2">
            <Link to="/cart" className="flex items-center text-pink-500 hover:text-pink-700">
              <FaShoppingCart size={24} />
              {cartCount > 0 && <span className="ml-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">{cartCount}</span>}
              <span className="ml-2 text-sm font-medium">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarHero;

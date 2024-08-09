import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">
              Dark<span className="text-white">moon</span>
            </Link>
            <p className="text-gray-200">© 2024 Darkmoon. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-6 mb-4 md:mb-0">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/products" className="hover:text-gray-200">
              Products
            </Link>
            <Link to="/about-us" className="hover:text-gray-200">
              About Us
            </Link>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4 mt-1 justify-center items-center">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaFacebookF size={20} />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaTwitter size={20} />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

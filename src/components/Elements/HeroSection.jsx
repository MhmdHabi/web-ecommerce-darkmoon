import { Link } from "react-router-dom";
import AboutUs from "./About";

const HeroSectionPage = () => {
  return (
    <>
      <div className=" bg-[url('/assets/bg-hero.jpeg')] bg-cover bg-center min-h-screen pt-16">
        <div className="flex flex-col md:flex-row items-center justify-center text-black p-4 bg-opacity-60 bg-white rounded-lg">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img src="/assets/hero.png" alt="Hero" className="w-full max-w-md rounded-lg" />
          </div>

          {/* Description */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start font-roboto">
            <h2 className="text-4xl md:text-6xl font-semibold text-pink-500">Online</h2>
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-pink-500">Shopping</h2>
            <p className="text-lg md:text-2xl mb-4">Discover our amazing products and services</p>
            <p className="text-lg md:text-2xl mb-6 text-center md:text-left">
              Discover a world of exclusive deals and premium products crafted just for you. Shop our top-rated items and elevate your experience with quality and style. Enjoy seamless shopping and unbeatable offers tailored to your needs.
            </p>

            {/* Shop Now Button */}
            <Link to="products" className="inline-block px-8 py-2 bg-pink-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-pink-700 transition duration-300">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default HeroSectionPage;

import React from "react";

const AboutUs = () => {
  return (
    <div className=" min-h-screen pt-16">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src="/assets/about.jpg" alt="About Us" className="w-full max-w-lg rounded-lg shadow-lg" />
          </div>

          {/* Description */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <p className="text-lg md:text-xl mb-4 text-gray-800">
              At DarkMoon, our mission is to bring you the best shopping experience. We are dedicated to offering high-quality products and exceptional customer service. Our team works tirelessly to ensure that every product meets our
              rigorous standards and that your experience with us is nothing short of excellent.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-800">
              Founded in 2024, LightMoon has quickly established itself as a leading retailer in the industry. We pride ourselves on our commitment to innovation, sustainability, and customer satisfaction.
            </p>

            {/* Call to Action Button */}
            <a href="/contact" className="inline-block px-8 py-2 bg-pink-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-pink-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-10 px-6 lg:px-20 bg-gray-100 mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" className="block w-full border border-pink-300 py-2 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" className="block w-full border border-pink-300 py-2 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows="4" className="block w-full border border-pink-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50" required></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

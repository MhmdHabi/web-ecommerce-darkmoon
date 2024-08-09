import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getProducts } from "../../services/product.service";

const TrendingPage = () => {
  const [products, setProducts] = useState([]);

  const truncateWords = (str, num) => {
    return str.split(" ").slice(0, num).join(" ") + (str.split(" ").length > num ? "..." : "");
  };

  useEffect(() => {
    getProducts().then((data) => {
      // Filter products with rating 4 or higher
      const trendingProducts = data.filter((product) => product.rating.rate >= 4);
      setProducts(trendingProducts);
    });
  }, []);

  const formatRating = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} size={16} color={index < Math.floor(rating) ? "gold" : "gray"} />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-16 mb-16 px-6 md:px-10">
      {/* Hero Section */}
      <div className="bg-pink-500 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Top Rated Picks</h1>
        <p className="text-lg text-center mb-6 text-white">
          Discover our best-selling products, each with a stellar rating. These items have received rave reviews from our satisfied customers. Explore these top-rated picks that shine above the rest.
        </p>
      </div>

      {/* Trending Products Section */}
      <div className="mt-12">
        {products.length === 0 ? (
          <div className="text-center text-lg font-semibold">No trending products found</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="max-w-sm border border-gray-300 rounded overflow-hidden shadow-lg flex flex-col">
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                <div className="px-6 py-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">{truncateWords(product.title, 3)}</h2>
                    {formatRating(product.rating.rate)}
                  </div>
                  <p className="text-gray-700 text-base mt-2 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-900 text-sm font-bold">${product.price}</span>
                    <Link to={`/product/${product.id}`} className="bg-yellow-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-yellow-700">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingPage;

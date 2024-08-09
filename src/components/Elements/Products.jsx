import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import { useProducts } from "./ProductContext";

const ProductsPage = () => {
  const { updateCart } = useCart();
  const { products } = useProducts();

  const truncateWords = (str, num) => {
    return str.split(" ").slice(0, num).join(" ") + (str.split(" ").length > num ? "..." : "");
  };

  const truncateLines = (str, numLines) => {
    const lines = str.split("\n");
    return lines.slice(0, numLines).join("\n") + (lines.length > numLines ? "..." : "");
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCart(cart); // Update cart in context
  };

  return (
    <div className="container mx-auto mt-16 px-6">
      <h1 className="text-3xl font-bold my-8 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm border border-gray-300 rounded overflow-hidden shadow-lg my-4 mx-2 flex flex-col justify-between">
            <div>
              <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xl mb-2">{truncateWords(product.title, 3)}</div>
                  <FaShoppingCart size={24} className="text-yellow-500 cursor-pointer hover:text-yellow-900" onClick={() => addToCart(product)} />
                </div>
                <p className="text-gray-700 text-base truncate">{truncateLines(product.description, 3)}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{product.category}</span>
                  <p className="text-gray-900 text-sm font-bold">${product.price}</p>
                </div>
              </div>
            </div>
            <div className="px-6 pt-4 mb-2 pb-2 flex justify-between items-center">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{product.rating.rate} ★</span>
              <Link to={`/product/${product.id}`} className="bg-yellow-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-yellow-700">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

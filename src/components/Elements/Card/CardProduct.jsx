import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm border border-gray-300 rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 font-bold">${product.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.rating.rate} ★</span>
      </div>
    </div>
  );
};

export default ProductCard;

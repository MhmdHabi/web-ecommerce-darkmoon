import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../services/product.service";
import NavbarHero from "./NavbarHero";
import Footer from "./Footer";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    getProductById(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
        <div className="px-6 py-4">
          <h1 className="font-bold text-3xl mb-2">{product.title}</h1>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <p className="text-gray-900 font-bold text-xl mb-4">${product.price}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{product.category}</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{product.rating.rate} ★</span>
          </div>
          <button onClick={() => navigate(-1)} className="bg-blue-500 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700">
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

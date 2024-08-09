import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../services/product.service";
import NavbarHero from "./NavbarHero/NavbarHero";

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("q");
    setQuery(searchQuery || "");

    if (searchQuery) {
      getProducts().then((data) => {
        const filteredProducts = data.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase()));
        setProducts(filteredProducts);
      });
    }
  }, [location.search]);

  return (
    <>
      <NavbarHero />
      <div className="container mx-auto my-8 mt-20">
        <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4">
                <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.title} />
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-900 font-bold">${product.price}</p>
                  <p className="text-gray-900 font-bold">★ {product.rating.rate}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResultsPage;

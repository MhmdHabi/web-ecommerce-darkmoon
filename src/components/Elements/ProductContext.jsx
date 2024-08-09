import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../../services/product.service";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const cachedProducts = localStorage.getItem("products");
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
      } else {
        const data = await getProducts();
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      }
    };

    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export const useProducts = () => React.useContext(ProductContext);

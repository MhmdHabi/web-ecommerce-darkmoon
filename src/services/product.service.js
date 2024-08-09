import axios from "axios";

export const getProducts = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const getProductById = (id) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return null;
    });
};

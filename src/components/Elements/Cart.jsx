import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems, updateCart } = useCart();
  const [localCartItems, setLocalCartItems] = useState(cartItems);

  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = localCartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
    setLocalCartItems(updatedCartItems);
    updateCart(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = localCartItems.filter((item) => item.id !== id);
    setLocalCartItems(updatedCartItems);
    updateCart(updatedCartItems);
  };

  const getTotalPrice = () => {
    return localCartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-16 mb-16 px-10">
      <h1 className="text-3xl font-bold my-8 text-center">Shopping Cart</h1>
      {localCartItems.length === 0 ? (
        <div className="text-center text-lg font-semibold">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {localCartItems.map((item) => (
            <div key={item.id} className="max-w-sm border border-gray-300 rounded overflow-hidden shadow-lg my-4 mx-2 flex flex-col">
              <div className="relative">
                <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
                <FaTrashAlt size={24} className="absolute top-2 right-2 text-red-600 cursor-pointer hover:text-red-900" onClick={() => removeFromCart(item.id)} />
              </div>
              <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 text-sm font-bold">${item.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                      <FaMinus />
                    </button>
                    <input type="text" value={item.quantity} readOnly className="w-12 text-center border border-gray-300 rounded-md mx-2" />
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {localCartItems.length > 0 && (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Total Price: ${getTotalPrice()}</h2>
          <Link to="/checkout" className="inline-block px-8 py-2 bg-pink-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-pink-700 transition duration-300 mt-4">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

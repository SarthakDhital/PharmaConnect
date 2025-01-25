"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // const response = await axios.get("/api/cart"); // Replace with the actual API endpoint
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Header />

      <div className="bg-white py-8 flex-grow">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Shopping Cart</h1>

          {cart.length > 0 ? (
            <div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2">Product</th>
                      <th className="border border-gray-200 px-4 py-2">Category</th>
                      <th className="border border-gray-200 px-4 py-2">Price</th>
                      <th className="border border-gray-200 px-4 py-2">Quantity</th>
                      <th className="border border-gray-200 px-4 py-2">Total</th>
                      <th className="border border-gray-200 px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-200 px-4 py-2">{item.category}</td>
                        <td className="border border-gray-200 px-4 py-2">${item.price.toFixed(2)}</td>
                        <td className="border border-gray-200 px-4 py-2">
                          <input
                            type="number"
                            className="w-16 p-1 border border-gray-300 rounded text-center"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                          />
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-end">
                <div className="text-lg font-semibold">
                  Total: <span className="text-green-600">${calculateTotal()}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;

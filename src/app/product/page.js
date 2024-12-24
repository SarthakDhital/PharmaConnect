'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

// Dummy product data (you can fetch this from an API)
const product = {
  id: 1,
  name: "Product Name",
  description: "This is a description of the product.",
  price: 29.99,
  image: "https://via.placeholder.com/500", // Replace with your image URL
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  const handleAddToCart = () => {
    // Add the product to the cart
    const newCart = [...cart, { ...product, quantity }];
    setCart(newCart);
    alert("Added to cart!");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-lg font-medium">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-16 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Cart Display (Optional) */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart</h2>
        <ul className="list-disc pl-6">
          {cart.map((item, index) => (
            <li key={index} className="text-lg">
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

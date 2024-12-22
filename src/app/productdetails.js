import { useState } from "react";

export default function ProductDescription({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} of "${product.name}" to the cart.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-3">{product.description}</p>
          <p className="text-xl font-semibold text-green-500 mt-4">Rs {product.price}</p>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center space-x-4">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-20 border rounded-md p-2"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

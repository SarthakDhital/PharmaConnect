// pages/products.js
"use client"
import { useState } from 'react';
import Nav from "../components/nav";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: 'Aspirin', category: 'Pain Relief', price: 12.99 },
  { id: 2, name: 'Cough Syrup', category: 'Cough & Cold', price: 8.99 },
  { id: 3, name: 'Vitamins', category: 'Supplements', price: 15.49 },
  { id: 4, name: 'Antiseptic', category: 'First Aid', price: 5.99 },
  { id: 5, name: 'Allergy Medicine', category: 'Allergy', price: 9.99 },
  { id: 6, name: 'Face Mask', category: 'Personal Care', price: 3.49 },
  // Add more products as needed
];

const categories = ['All', 'Pain Relief', 'Cough & Cold', 'Supplements', 'First Aid', 'Allergy', 'Personal Care'];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
     <div className="bg-gray-50 text-gray-800">
          <Nav/>
    
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Product List</h1>

        {/* Search Bar and Filters */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border border-gray-300 rounded w-1/3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Category Filter */}
          <select
            className="p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-lg font-bold text-green-600">${product.price}</p>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductList;

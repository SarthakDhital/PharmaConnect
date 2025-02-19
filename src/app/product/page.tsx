"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All", "Pain Relief", "Cough & Cold", "Supplements",
  "First Aid", "Allergy", "Personal Care"
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://pharmaconnect-backend.onrender.com/products/getAllProduct"
        );
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
      } catch {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <div className="bg-white min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Product List
          </h1>
          <div className="mb-6 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search products or categories..."
              className="p-2 border border-gray-300 rounded w-1/3 text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-2 border border-gray-300 rounded text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                          lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="border border-gray-200 bg-white p-4 rounded-lg 
                             shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                    width={245}
                    height={300}
                    unoptimized
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-500">{product.category}</p>
                  <p className="text-lg font-bold text-green-600">
                    ${product.price}
                  </p>
                  <Link href={`/productdetails/${product._id}`}>
                    <button className="mt-4 w-full py-2 bg-blue-600 text-white 
                                       rounded-lg hover:bg-blue-700 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500">
                      View Details
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;

"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("token");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://pharmaconnect-backend.onrender.com/products/getProductById/${id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setProduct(response.data.data);
      } catch {
        setError("Error fetching product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = async (productId) => {
    try {
      await axios.post(
        "https://pharmaconnect-backend.onrender.com/cart/manageCart",
        { productId },
        {
          headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add product to cart.");
    }
  };

  if (loading)
    return <div className="text-center py-10 text-lg font-semibold">Loading product details...</div>;

  if (error)
    return <div className="text-center text-red-600 py-10 font-bold">{error}</div>;

  if (!product)
    return <div className="text-center py-10 text-gray-600">Product not found.</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow py-16 bg-gray-50 mt-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center h-full">
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-fill rounded-lg shadow-lg"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-green-600 font-bold text-2xl mb-4">Rs.{product.price}</p>
              </div>
              {/* <div className="flex items-center mb-4">
                <button
                  onClick={decreaseQuantity}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 text-lg font-semibold">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-r-lg"
                >
                  +
                </button>
              </div> */}
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition-transform transform hover:scale-105"
                >
                  Add to Cart
                </button>
                <Link
                  href="/product"
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg font-medium transition-transform transform hover:scale-105"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
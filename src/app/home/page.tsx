'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("https://pharmaconnect-backend.onrender.com/products/getAllProduct", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setProducts(data.data);
        const shuffledProducts = data.data.sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffledProducts.slice(0, 4));
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching products");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      <section
        id="home"
        className="relative bg-sereneBlue-600 text-white h-[605px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/pharmacy-hero.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">Your Trusted Pharmacy</h1>
          <p className="text-xl mb-8">Fast delivery, genuine products, and exceptional service.</p>
          <Link
            href="/product"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-lg font-bold shadow-md transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-60 mb-6">
        <Image
          src={product.image}
          alt={product.name}
          width={245}
          height={300}
          className="w-full h-full object-cover rounded-md"
          unoptimized
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-500 mb-2">{product.category}</p>
      <p className="text-lg font-bold text-green-600 mb-4">${product.price}</p>
      <Link href={`/productdetails/${product._id}`}>
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Home;

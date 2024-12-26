'use client'
import React, { useState } from "react";
import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Nav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-sereneBlue-700 text-white h-[524px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/hello.jpg')" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">Your Health, Our Priority</h2>
          <p className="text-lg mb-6 animate-slide-up">
            Find medicines, wellness products, and healthcare essentials online with fast delivery and trusted service.
          </p>
          <a
            href="./product"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded font-bold transition duration-300 animate-bounce"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Healthy with Us</h2>
        <p className="mb-6">Shop your healthcare essentials now and get exclusive offers!</p>
        <a
          href="#products"
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 text-gray-800 font-bold rounded transition duration-300"
        >
          Explore Products
        </a>
      </section>

      <Footer />
    </div>
  );
}

// ProductCard Component
function ProductCard({ imageSrc, title, price, isHovered, onHover, onLeave }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105 ${
        isHovered ? "ring-2 ring-yellow-400" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={150}
        height={150}
        className="mx-auto mb-4 animate-fade-in"
      />
      <h3 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h3>
      <p className="text-green-600 font-bold">{price}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:-translate-y-2 duration-300">
      <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Mock Data
const products = [
  {
    imageSrc: "/product1.png",
    title: "Eventone-C Cream 30gm",
    price: "Rs 2750",
  },
  {
    imageSrc: "/product2.png",
    title: "Plum 2% Niacinamide SPF 50",
    price: "Rs 574.56",
  },
  {
    imageSrc: "/product3.png",
    title: "Insulin Mixtard 30 HM",
    price: "Rs 631.79",
  },
];

const services = [
  {
    title: "Fast Delivery",
    description: "Get your medicines delivered to your doorstep quickly.",
  },
  {
    title: "24/7 Support",
    description: "We are available 24/7 to assist with your healthcare needs.",
  },
  {
    title: "Genuine Medicines",
    description: "We provide 100% genuine and verified products.",
  },
];

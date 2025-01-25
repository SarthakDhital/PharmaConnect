import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <section
        id="home"
        className="relative bg-sereneBlue-600 text-white h-[605px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/pharmacy-hero.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Your Trusted Pharmacy
          </h1>
          <p className="text-xl mb-8">
            Fast delivery, genuine products, and exceptional service.
          </p>
          <Link
            href="/product"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-lg font-bold shadow-md transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="text-center border rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-green-600 font-bold text-xl mb-4">
                  ${product.price}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition-transform transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const categories = [
  { name: "Pain Relief", image: "/categories/pain-relief.jpg" },
  { name: "Cough & Cold", image: "/categories/cough-cold.jpg" },
  { name: "Supplements", image: "/categories/supplements.jpg" },
  { name: "First Aid", image: "/categories/first-aid.jpg" },
];

const featuredProducts = [
  { id: 1, name: "Aspirin", price: 12.99, image: "/products/aspirin.jpg" },
  { id: 2, name: "Cough Syrup", price: 8.99, image: "/products/cough-syrup.jpg" },
  { id: 3, name: "Vitamin C", price: 15.49, image: "/products/vitamin-c.jpg" },
  { id: 4, name: "Bandages", price: 5.99, image: "/products/bandages.jpg" },
];

export default Home;

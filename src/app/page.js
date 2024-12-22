import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* <Image
      src={}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /> */}
          <h1 className="text-2xl font-bold">ePharmacy</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="./login" className="hover:text-gray-300">LogIn</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-blue-500 text-white h-[500px] flex items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-lg mb-6">
            Find medicines, wellness products, and healthcare essentials online
            with fast delivery and trusted service.
          </p>
          <a
            href="#products"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded font-bold transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <div className="absolute right-12 bottom-0 hidden md:block">
          <Image
            src="/hero-image.png"
            alt="Pharmacy Hero"
            width={300}
            height={300}
          />
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Trending Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Cards */}
          <ProductCard
            imageSrc="/product1.png"
            title="Eventone-C Cream 30gm"
            price="Rs 2750"
          />
          <ProductCard
            imageSrc="/product2.png"
            title="Plum 2% Niacinamide SPF 50"
            price="Rs 574.56"
          />
          <ProductCard
            imageSrc="/product3.png"
            title="Insulin Mixtard 30 HM"
            price="Rs 631.79"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Fast Delivery"
              description="Get your medicines delivered to your doorstep quickly."
            />
            <ServiceCard
              title="24/7 Support"
              description="We are available 24/7 to assist with your healthcare needs."
            />
            <ServiceCard
              title="Genuine Medicines"
              description="We provide 100% genuine and verified products."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Anita Sharma"
            feedback="Great service and quick delivery! Highly recommend their products."
          />
          <TestimonialCard
            name="Ramesh Thapa"
            feedback="Very helpful support team and affordable prices for medicines."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Healthy with Us</h2>
        <p className="mb-6">
          Shop your healthcare essentials now and get exclusive offers!
        </p>
        <a
          href="#products"
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 text-gray-800 font-bold rounded transition duration-300"
        >
          Explore Products
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} ePharmacy. All rights reserved.</p>
          <p>Email: <a href="mailto:support@epharmacy.com" className="underline">support@epharmacy.com</a></p>
          <p>Phone: +977-9800000000</p>
        </div>
      </footer>
    </div>
  );
}

// ProductCard Component
function ProductCard({ imageSrc, title, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition hover:scale-105 duration-300">
      <Image
        src={imageSrc}
        alt={title}
        width={150}
        height={150}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-green-600 font-bold">{price}</p>
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// TestimonialCard Component
function TestimonialCard({ name, feedback }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="italic mb-4">"{feedback}"</p>
      <p className="font-semibold text-right">- {name}</p>
    </div>
  );
}


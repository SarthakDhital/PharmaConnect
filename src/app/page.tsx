'use client';

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      <div
        id="home"
        className="relative bg-sereneBlue-700 text-white h-[605px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/vis/hello.jpg')" }}
      >
        <section className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-lg mb-6">
            Find medicines, wellness products, and healthcare essentials online with fast delivery and trusted service.
          </p>
          <a
            href="./product"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded font-bold transition duration-300"
          >
            Shop Now
          </a>
        </section>
      </div>

      <motion.section
        id="services"
        className="bg-blue-50 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="features"
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="italic">“{testimonial.feedback}”</p>
                <h4 className="mt-4 font-bold">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-indigo-700 text-white py-16 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-4">Stay Healthy with Us</h2>
        <p className="mb-6">
          Shop your healthcare essentials now and get exclusive offers!
        </p>
        <a
          href="./login"
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 text-gray-800 font-bold rounded transition duration-300"
        >
          Explore Products
        </a>
      </motion.section>

      <Footer />
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:-translate-y-2 duration-300">
      <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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

const features = [
  {
    title: "Trusted Service",
    description: "We have served thousands of happy customers.",
  },
  {
    title: "Affordable Prices",
    description: "Get the best deals on all healthcare essentials.",
  },
  {
    title: "Wide Selection",
    description: "Choose from a vast array of products.",
  },
  {
    title: "Easy Returns",
    description: "Hassle-free return policy for your convenience.",
  },
];

const testimonials = [
  {
    feedback: "Great service and quick delivery. Highly recommended!",
    name: "John Doe",
  },
  {
    feedback: "The quality of products is excellent. Will buy again!",
    name: "Jane Smith",
  },
];
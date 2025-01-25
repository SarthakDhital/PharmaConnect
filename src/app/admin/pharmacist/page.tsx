"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaCapsules,
  FaTag,
  FaInfoCircle,
  FaImages,
} from "react-icons/fa";

const PharmacyAdmin = () => {
  const [stats, setStats] = useState({
    customers: 0,
    packages: 0,
    orders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/stats"); // Adjust the endpoint
        setStats({
          customers: response.data.customers || 0,
          packages: response.data.packages || 0,
          orders: response.data.orders || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error.message);
      }
    };
    fetchStats();
  }, []);

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productExpiryDate: "",
    productImage1: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const form = new FormData();
    form.append("name", formData.productName);
    form.append("price", formData.productPrice);
    form.append("expiryDate", formData.productExpiryDate);

    // Append the image
    if (formData.productImage1) {
      form.append("image", formData.productImage1);
    }

    try {
      // POST request to add the product using axios
      const response = await axios.post(
        "https://pharma-connect-backend.onrender.com/product/createproduct",
        form, // Send as form data
      );

      if (response.status === 200) {
        console.log("Product added successfully:", response.data);

        // Reset form data on success
        setFormData({
          productName: "",
          productPrice: "",
          productImage1: null,
          productExpiryDate: "",
        });
      } else {
        console.error("Error adding product:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-[#5F41E4] w-64 p-5 text-white">
        <h1 className="text-2xl font-bold mb-8">Pharma-Connect</h1>
        <ul>
          <li className="mb-4 flex items-center">
            <FaUsers className="mr-2" /> Customers
          </li>
          <li className="mb-4 flex items-center">
            <FaBoxOpen className="mr-2" /> Package Requests
          </li>
          <li className="mb-4 flex items-center">
            <FaShoppingCart className="mr-2" /> Orders
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-gray-100 text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black">{stats.customers}</h2>
            <p>Customers</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black">{stats.packages}</h2>
            <p>Packages</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black">{stats.orders}</h2>
            <p>Orders</p>
          </div>
        </div>

        {/* Add Your Product Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl mb-6 text-center text-black">
            Add Your Product
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="flex flex-col">
              <label htmlFor="productName" className="text-sm font-medium mb-1">
                <FaCapsules className="mr-2 text-gray-500" /> Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Product Price */}
            <div className="flex flex-col">
              <label
                htmlFor="productPrice"
                className="text-sm font-medium mb-1"
              >
                <FaTag className="mr-2 text-gray-500" /> Product Price
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
                placeholder="Enter product price"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Product Image */}
            <div className="flex flex-col">
              <label
                htmlFor="productImage1"
                className="text-sm font-medium mb-1"
              >
                <FaImages className="mr-2 text-gray-500" /> Product Image
              </label>
              <input
                type="file"
                id="productImage1"
                name="productImage1"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                accept="image/*"
                required
              />
            </div>

            {/* Product Expiry Date */}
            <div className="flex flex-col">
              <label
                htmlFor="productExpiryDate"
                className="text-sm font-medium mb-1"
              >
                <FaInfoCircle className="mr-2 text-gray-500" /> Expiry Date
              </label>
              <input
                type="date"
                id="productExpiryDate"
                name="productExpiryDate"
                value={formData.productExpiryDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#5F41E4] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PharmacyAdmin;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdVisibility, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";
import Nav from "../components/Header";
import Footer from "../components/Footer";
import Validation from "./signupValidation";

const PharmacistSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword((prevState) => !prevState);
  const router = useRouter();

  const [formData, setFormData] = useState({
    pharmacy_name: "",
    date_of_establishment: "",
    first_name: "",
    last_name: "",
    license_number: "",
    location: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const [error, setError] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: "" });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = Validation(formData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await axios.post(
        "https://pharmaconnect-backend.onrender.com/pharma/Pregister",
        formData
      );

      if (res.data.success) {
        router.push("../home");
      } else {
        setError({
          general: res.data.message || "An error occurred during registration.",
        });
      }
    } catch (err) {
      if (err.response) {
        const backendError = {};
        if (err.response.data.message === "Email already exists") {
          backendError.email = "Email already exists.";
        }
        if (err.response.data.message === "Phone number already exists") {
          backendError.phone_number = "Phone number already exists.";
        }
        if (err.response.data.message === "License number already exists") {
          backendError.license_number = "License number already exists.";
        }
        setError(backendError);
      } else {
        setError({
          general: err.message || "An error occurred during registration.",
        });
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Nav />
      <div className="flex flex-1 justify-center items-center my-12 mt-32">
        <div className="relative w-full max-w-4xl p-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl shadow-xl">
          <div className="flex w-full bg-white rounded-3xl overflow-hidden">
            <div className="w-1/2 bg-gray-200 p-6 flex justify-center items-center">
              <img
                src="/vis/logo.jpg"
                alt="Logo"
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Pharmacist Signup
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="pharmacy_name"
                      placeholder="Pharmacy Name"
                      value={formData.pharmacy_name}
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <span className="text-xs text-red-500 italic">
                      {error.pharmacy_name || ""}
                    </span>
                  </div>
                  <div>
                    <input
                      type="date"
                      name="date_of_establishment"
                      value={formData.date_of_establishment}
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <span className="text-xs text-red-500 italic">
                      {error.date_of_establishment || ""}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="Owner First Name"
                        value={formData.first_name}
                        onChange={handleInput}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                        required
                      />
                      <span className="text-xs text-red-500 italic">
                        {error.first_name || ""}
                      </span>
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Owner Last Name"
                        value={formData.last_name}
                        onChange={handleInput}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                        required
                      />
                      <span className="text-xs text-red-500 italic">
                        {error.last_name || ""}
                      </span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="license_number"
                      placeholder="License Number"
                      value={formData.license_number}
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <span className="text-xs text-red-500 italic">
                      {error.license_number || ""}
                    </span>
                  </div>
                  <div>
                    <select
                      name="location"
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                      value={formData.location}
                    >
                      <option value="" disabled hidden>
                        Select Location
                      </option>
                      <option value="Kathmandu">Kathmandu</option>
                      <option value="Lalitpur">Lalitpur</option>
                      <option value="Bhaktapur">Bhaktapur</option>
                    </select>
                    <span className="text-xs text-red-500 italic">
                      {error.location || ""}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <MdOutlineEmail className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
                    <span className="text-xs text-red-500 italic">
                      {error.email || ""}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleVisibility}
                      className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400"
                    >
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </button>
                    <span className="text-xs text-red-500 italic">
                      {error.password || ""}
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={formData.phone_number}
                      onChange={handleInput}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <span className="text-xs text-red-500 italic">
                      {error.phone_number || ""}
                    </span>
                  </div>
                </div>
                {error.general && (
                  <p className="text-red-500 text-center mt-4">
                    {error.general}
                  </p>
                )}
                <div className="mt-6 space-y-4">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center text-black mt-6">
                Already have an account?{" "}
                <a href="../login" className="text-blue-600 hover:underline">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PharmacistSignup;

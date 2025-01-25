"use client";
import Nav from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Validation from "./signupValidation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdVisibility, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword((prevState) => !prevState);
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    phoneNumber: "",
  });

  const [error, setError] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: "" });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const validationError = Validation(formData);
    setError(validationError);

    if (Object.keys(validationError).length > 0) {
      return; // Stop if there are validation errors
    }

    try {
      const res = await axios.post(
        "https://pharmaconnect-backend.onrender.com/auth/register",
        formData
      );

      console.log("Backend Response:", res.data);

      if (res.data.success) {
        router.push("/login"); // Redirect to login page on success
      }
    } catch (err) {
      console.error("Error during registration:", err);

      if (err.response && err.response.data) {
        const backendError = {};

        // Dynamically display the backend's error message
        if (err.response.data.message) {
          backendError.general = err.response.data.message;
        } else {
          backendError.general = "An unexpected error occurred.";
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
                Create New Account
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="flex space-x-2">
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleInput}
                        placeholder="First Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                        required
                      />
                      <span className="text-xs text-red-500 italic">
                        {error.firstName || ""}
                      </span>
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleInput}
                        placeholder="Last Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                        required
                      />
                      <span className="text-xs text-red-500 italic">
                        {error.lastName || ""}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      onChange={handleInput}
                      placeholder="Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <MdOutlineEmail className="absolute top-1/3 right-3 text-gray-400" />
                    <span className="text-xs text-red-500 italic">
                      {error.email || ""}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleInput}
                      placeholder="Password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <button
                      className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                      aria-controls="password"
                    >
                      {showPassword ? (
                        <MdVisibilityOff size={20} aria-hidden="true" />
                      ) : (
                        <MdVisibility size={20} aria-hidden="true" />
                      )}
                    </button>
                    <span className="text-xs text-red-500 italic">
                      {error.password || ""}
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
                  <div>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleInput}
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                      required
                    />
                    <span className="text-xs text-red-500 italic">
                      {error.phoneNumber || ""}
                    </span>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Sign Up
                  </button>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="flex items-center px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 transition duration-200"
                    >
                      <img
                        src="/vis/google.jpg"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                      />
                      <span className="text-gray-700 font-medium">
                        Sign in with Google
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-center text-black mt-6">
                Already have an account?{" "}
                <a href="../login" className="text-blue-600 hover:underline">
                  Log in
                </a>
              </div>
              <div className="text-center text-black mt-4">
                <a
                  href="../pharmacist"
                  className="text-blue-600 hover:underline"
                >
                  I'm a pharmacist
                </a>
              </div>
              {error.general && (
                <p className="mt-4 text-center text-red-500 text-sm italic">
                  {error.general}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

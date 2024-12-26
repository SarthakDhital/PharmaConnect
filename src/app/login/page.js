import Link from 'next/link'
import React from 'react'
import Nav from "../components/nav";
import Footer from '../components/Footer';
const page = () => {
  return (
    <div className='header'>
      <Nav/>   
    <div className="flex justify-center items-center min-h-screen bg-gray-100" >
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-3xl font-semibold text-center mb-4 text-black">Log In</h2>
        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Log In Button */}
        <button
          type="submit"
          className="w-full bg-sereneBlue-700 text-white font-semibold mt-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Log In
        </button>

        {/* Forgot Password Link */}
        <div className="text-center mt-2">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Divider */}
        <div className="border-t mt-4"></div>

        <Link href="/signup" >
        {/* Create New Account Button */}
        <button className="w-full mt-4 bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition duration-300">
          
          Create new account
        </button>
        </Link>
      </div>
    </div>
    <div className='footer'>
      <Footer/>   
      </div>
    </div>
  )
}

export default page
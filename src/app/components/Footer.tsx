import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 text-center">
        <p className="text-base">
          &copy; PharmaConnect-{new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mt-2">
          <p className="flex items-center space-x-2 text-base">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Koteshwor, Kathmandu, Nepal</span>
          </p>
          <p className="flex items-center space-x-2 text-base">
            <FaPhoneAlt className="text-yellow-400" />
            <span>+977-9843929658</span>
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <p className="flex items-center space-x-2 text-base">
            <FaEnvelope className="text-yellow-400" />
            <span>support@pharmaconnect.com</span>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xs font-semibold text-yellow-400">
            YOUR HEALTH, JUST A CLICK AWAY!
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

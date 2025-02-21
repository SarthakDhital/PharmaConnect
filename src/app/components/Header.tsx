'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCartSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";

const Header = ({ onLogoutClick, user }) => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkPath = () => {
      const currentPath = window.location.pathname;
      setIsLoginPage(
        currentPath.includes("login") ||
        currentPath.includes("signup") ||
        currentPath.includes("home")
      );
    };

    checkPath();
    window.addEventListener("popstate", checkPath);
    return () => window.removeEventListener("popstate", checkPath);
  }, []);

  const handleProfileClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <header className="bg-sereneBlue-700 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="/vis/logo.jpg"
            width={100}
            height={100}
            alt="Logo"
            className="rounded-full"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/cart" className="hover:text-gray-300 flex items-center">
                <div className="border-2 border-gray-300 hover:border-gray-500 p-3 rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300">
                  <IoCartSharp className="text-3xl" />
                </div>
              </Link>
            </li>
            {!isLoginPage && (
              <li>
                <Link href="/home" className="hover:text-gray-300 flex items-center">
                  <div className="border-2 border-gray-300 hover:border-gray-500 p-3 rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300">
                    <FaHome className="text-3xl" />
                  </div>
                </Link>
              </li>
            )}
            <li className="relative">
              <button
                onClick={handleProfileClick}
                className="hover:text-gray-300 flex items-center"
              >
                <div className="border-2 border-gray-300 hover:border-gray-500 p-3 rounded-full flex items-center justify-center w-12 h-12 transition-colors duration-300">
                  <VscAccount className="text-3xl" />
                </div>
              </button>
              {isDropdownOpen && user && (
                <div className="absolute right-0 mt-2 bg-gray-900 text-white rounded-lg shadow-lg z-50 w-40 py-2 top-full">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="font-semibold">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  <button
                    onClick={onLogoutClick}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

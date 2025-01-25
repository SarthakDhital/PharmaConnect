'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";

const Header = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

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

    return () => {
      window.removeEventListener("popstate", checkPath);
    };
  }, []);

  return (
    <header className="bg-sereneBlue-700 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="relative">
          <Link
            href="/"
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src="/vis/logo.jpg"
              width={100}
              height={100}
              alt="Logo"
              className="rounded-full"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/cart" className="hover:text-gray-300 flex items-center">
                <div className="border border-black p-2 rounded-full flex items-center justify-center w-10 h-10">
                  <IoCartSharp className="text-xl" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/home" className="hover:text-gray-300 flex items-center">
                <div className="border border-black p-2 rounded-full flex items-center justify-center px-4 py-2">
                  Home
                </div>
              </Link>
            </li>
            {!isLoginPage && (
              <li>
                <Link href="/login" className="hover:text-gray-300 flex items-center">
                  <div className="border border-black p-2 rounded-full flex items-center justify-center px-4 py-2">
                    Log In
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

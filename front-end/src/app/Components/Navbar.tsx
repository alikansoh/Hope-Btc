"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname === href + "/";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },

    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const topBarHeight = 48;
  const mainNavHeight = 120;

  return (
    <>
      {/* Top Bar */}
      <div
        className="fixed top-0 left-0 w-full z-50 text-white shadow-lg"
        style={{
          height: `${topBarHeight}px`,
          background:
            "linear-gradient(to right, rgb(21, 107, 171), rgba(21, 107, 171, 0.9))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          <div className="flex items-center space-x-8">
            {/* Email */}
            <div className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:text-blue-200">
              <div className="p-1 rounded-full bg-black/20 group-hover:bg-black/30">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-sm font-medium">info@hope-btc.co.uk</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:text-blue-200">
              <div className="p-1 rounded-full bg-black/20 group-hover:bg-black/30">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-sm font-medium">+44 1206 123 456</span>
            </div>
          </div>

          {/* Badges */}
          <div className="hidden md:flex  items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <svg
                className="w-4 h-4 text-green-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-blue-100">
                Accredited Center
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"></div>
              <span className="text-sm font-semibold text-blue-100">
                F-Gas Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="fixed left-0 w-full z-40 bg-white/85 backdrop-blur-lg border-b border-gray-100 lg:shadow-sm"
        style={{ top: `${topBarHeight}px`, height: `${mainNavHeight}px` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link href="/" className="block relative">
              <div className="w-40 sm:w-48 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={180}
                  height={80}
                  priority
                  className="drop-shadow-sm"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-110" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-6 py-3 text-base font-semibold text-gray-700 hover:text-blue-700 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute bottom-2 left-6 right-6 h-0.5 rounded-full transform transition-transform duration-300 origin-center ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ backgroundColor: "rgb(21, 107, 171)" }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-2xl text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 active:scale-95 group"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-200 ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100 my-1"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden bg-white border-b border-gray-100 drop-shadow-lg ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
                  isActive(item.href) ? "text-white" : "text-gray-700"
                }`}
                style={
                  isActive(item.href)
                    ? { backgroundColor: "rgb(21, 107, 171)" }
                    : {}
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
}

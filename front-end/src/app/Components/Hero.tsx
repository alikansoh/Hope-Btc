"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="relative overflow-hidden text-white min-h-screen flex items-center"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="F-Gas Training Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-slate-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-sm font-semibold text-white shadow-2xl hover:bg-white/15 transition-colors duration-300">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 shadow-lg animate-pulse" />
          F-Gas Training Provider
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          <span
            className="block text-white drop-shadow-2xl"
            style={{
              textShadow:
                "0 4px 20px rgba(0, 0, 0, 0.5), 0 8px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            Welcome to
          </span>
          <span
            className="block font-black mt-2"
            style={{
              color: "#4A90E2",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
              fontWeight: "900",
              letterSpacing: "-0.02em",
            }}
          >
            Hope BTC
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-semibold mb-8 max-w-4xl mx-auto"
          style={{
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
       F-Gas Training Provider
        </p>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
            Whether you&apos;re starting a career in refrigeration, air
            conditioning and heat pumps or looking to renew your certification,
            we&apos;re here to support you every step of the way.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Our high-quality, accredited F-Gas training is designed to meet
            legal compliance and industry standards. Conveniently located in
            Park Royal London, we offer small class sizes, expert instructors,
            hands-on learning, and flexible schedules.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          <Link
            href="/courses"
            className="px-8 py-4 bg-[#146AAC] hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-lg text-white shadow-lg transition-all duration-200"
            aria-label="View available courses"
          >
            View Courses
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/15 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300"
            aria-label="Contact us"
          >
            Contact Us
          </Link>
        </div>

        {/* Certification Badge */}
        <div className="inline-flex items-center justify-center px-8 py-5 bg-white/8 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg animate-ping" aria-hidden="true" />
              <span className="text-sm font-bold text-white">
                Categories I, II, III, IV F-Gas Certification
              </span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-white/40 rounded-full" aria-hidden="true"></div>
            <span className="text-sm font-semibold text-gray-200">
              Accredited by LCL Awards
            </span>
          </div>
        </div>

        {/* Scroll indicator (with motion) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
          onClick={() => {
            const section = document.getElementById("why-choose");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-7 h-12 border-2 border-white/40 hover:border-white/60 rounded-full flex justify-center cursor-pointer transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [2, 14, 2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-4 bg-gradient-to-b from-white/60 to-white/30 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center">
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
        {/* Improved gradient overlay with better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-slate-800/80" />
        
        {/* Animated floating elements with better positioning */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/6 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/5 rounded-full blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-sm font-semibold text-white shadow-2xl hover:bg-white/15 transition-colors duration-300"
          >
            <motion.span 
              className="w-2 h-2 bg-emerald-400 rounded-full mr-3 shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            London&apos;s #1 F-Gas Training Provider
          </motion.div>

          {/* Main Heading with improved typography and better contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            <motion.span 
              className="block text-white drop-shadow-2xl"
              style={{ 
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 8px 40px rgba(0, 0, 0, 0.3)' 
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to
            </motion.span>
            <motion.span 
              className="block font-black mt-2"
              style={{
                color: '#4A90E2',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                fontWeight: '900',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hope BTC
            </motion.span>
          </motion.h1>

          {/* Subtitle with better hierarchy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-semibold mb-8 max-w-4xl mx-auto"
            style={{ 
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' 
            }}
          >
            London&apos;s Most Trusted F-Gas Training Provider
          </motion.p>

          {/* Description with improved readability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mb-12 space-y-4"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Whether you&apos;re starting a career in refrigeration, air conditioning and heat pumps 
              or looking to renew your certification, we&apos;re here to support you every step of the way.
            </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our high-quality, accredited F-Gas training is designed to meet legal compliance and 
              industry standards. Conveniently located in Park Royal London, we offer small class sizes, 
              expert instructors, hands-on learning, and flexible schedules.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center flex-wrap gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/courses"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-lg text-white shadow-lg transition-all duration-200"
              >
                View Courses
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/15 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Certification Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-flex items-center justify-center px-8 py-5 bg-white/8 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(251, 191, 36, 0.7)',
                      '0 0 0 8px rgba(251, 191, 36, 0)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-bold text-white">
                  Categories I, II, III, IV F-Gas Certification
                </span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-white/40 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-200">
                Accredited by LCL Awards
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Improved scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-7 h-12 border-2 border-white/40 hover:border-white/60 rounded-full flex justify-center cursor-pointer transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [2, 14, 2] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-4 bg-gradient-to-b from-white/60 to-white/30 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
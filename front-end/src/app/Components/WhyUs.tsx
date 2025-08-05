import React from "react";
import { FaChalkboardTeacher, FaCheckCircle, FaClock, FaStar } from "react-icons/fa";

export default function WhyChooseHopeBTC() {
  const iconColor = "rgb(21, 107, 171)";

  return (
    <section
      id="why-choose"
      aria-label="Why Choose Hope BTC"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 text-gray-900 py-20 px-6 sm:px-12 lg:px-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-100/20 to-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
       
        <h2 className="text-5xl sm:text-6xl font-black mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Why Choose{" "}
          </span>
          <span className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Hope BTC
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-70"></div>
          </span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            ?
          </span>
        </h2>
        <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed font-light">
          At Hope BTC, we&apos;re committed to providing{" "}
          <span className="font-semibold text-blue-700">high-quality, accredited F-Gas training</span>{" "}
          tailored to your career goals. Discover what makes us the trusted choice for London&apos;s professionals.
        </p>
      </div>

      <div className="relative z-10 grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {/* Expert Instructors */}
        <article className="group relative bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Icon with animated background */}
          <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
            <FaChalkboardTeacher
              className="relative w-10 h-10 z-10"
              aria-hidden="true"
              color={iconColor}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-center group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Expert Instructors
          </h3>
          <p className="text-gray-600 leading-relaxed text-center text-base group-hover:text-gray-700 transition-colors duration-300">
            Learn from{" "}
            <span className="font-semibold text-blue-700">industry-certified trainers</span>{" "}
            with years of real-world experience, ensuring you get practical knowledge and guidance.
          </p>
          
          {/* Animated bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </article>

        {/* Accredited Certification */}
        <article className="group relative bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
            <FaCheckCircle
              className="relative w-10 h-10 z-10"
              aria-hidden="true"
              color="rgb(21, 128, 61)"
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-center group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Accredited Certification
          </h3>
          <p className="text-gray-600 leading-relaxed text-center text-base group-hover:text-gray-700 transition-colors duration-300">
            Our courses meet the{" "}
            <span className="font-semibold text-green-700">highest legal and industry standards</span>,
            providing you with fully recognised F-Gas certification.
          </p>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </article>

        {/* Flexible Scheduling */}
        <article className="group relative bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 overflow-hidden sm:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-violet-200/50 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
            <FaClock
              className="relative w-10 h-10 z-10"
              aria-hidden="true"
              color="rgb(147, 51, 234)"
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-center group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Flexible Scheduling
          </h3>
          <p className="text-gray-600 leading-relaxed text-center text-base group-hover:text-gray-700 transition-colors duration-300">
            Choose from{" "}
            <span className="font-semibold text-purple-700">a variety of class times</span>{" "}
            to fit your busy lifestyle, including evening and weekend options.
          </p>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </article>
      </div>

      {/* Call-to-action */}
      <div className="relative z-10 text-center mt-16">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <span>Start Your Journey Today</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
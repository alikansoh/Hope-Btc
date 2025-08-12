"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Book Your Place",
      description:
        "Choose the right course and reserve your spot online or by phone with our easy booking system.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      bgPattern: "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100",
    },
    {
      title: "Attend Theory Classes",
      description:
        "Join our comprehensive theory sessions to learn the fundamental concepts and regulations of F-Gas handling.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      bgPattern: "bg-gradient-to-br from-green-50 via-emerald-50 to-green-100",
    },
    {
      title: "Attend Practical Training",
      description:
        "Join our hands-on training sessions at our fully equipped centre in Park Royal with expert instructors.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      bgPattern: "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100",
    },
    {
      title: "Take Online Exam & Practical Assessments",
      description:
        "Complete your knowledge test online and demonstrate your practical skills through comprehensive assessments.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      bgPattern: "bg-gradient-to-br from-orange-50 via-red-50 to-orange-100",
    },
    {
      title: "Get Certified",
      description:
        "Receive your official F-Gas certificate upon successful completion and join the certified professionals.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      bgPattern: "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100",
    },
    {
      title: "Start Work or Upgrade Your Career",
      description:
        "Use your certification to access new job opportunities or enhance your current role in the industry.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      bgPattern: "bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-[#146AAC] mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#146AAC] to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            From booking to certification – here&apos;s your seamless journey to
            F-Gas certification at Hope BTC.
          </p>
        </div>

        {/* Large Screen: 3×2 Grid */}
        <div className="hidden lg:block mb-20">
          <div className="grid grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Number Circle */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl relative z-10 transition-all duration-500 ${
                      activeStep === index
                        ? "scale-110 shadow-blue-500/50"
                        : "scale-100 hover:scale-105"
                    }`}
                    style={{
                      background:
                        activeStep === index
                          ? `linear-gradient(135deg, #146AAC, #2563eb)`
                          : `linear-gradient(135deg, #64748b, #475569)`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                    {index + 1}
                  </div>
                </div>

                {/* Step Card */}
                <div
                  className={`${
                    step.bgPattern
                  } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 backdrop-blur-sm group overflow-hidden relative h-80 ${
                    activeStep === index
                      ? "ring-2 ring-blue-400/50 ring-offset-2"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 group-hover:from-white/90 group-hover:to-white/60 transition-all duration-500"></div>
                  <div className="text-center relative z-10 flex flex-col items-center justify-center h-full">
                    <div
                      className={`mb-6 transition-all duration-500 ${
                        activeStep === index
                          ? "scale-110"
                          : "group-hover:scale-105"
                      }`}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-700 group-hover:text-[#146AAC] transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#146AAC] transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden mb-20">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="transition-all duration-700"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl relative z-10 transition-all duration-500 ${
                      activeStep === index
                        ? "scale-110 shadow-blue-500/50"
                        : "scale-100 hover:scale-105"
                    }`}
                    style={{
                      background:
                        activeStep === index
                          ? `linear-gradient(135deg, #146AAC, #2563eb)`
                          : `linear-gradient(135deg, #64748b, #475569)`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                    {index + 1}
                  </div>
                </div>
                <div
                  className={`${step.bgPattern} rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-white/50 backdrop-blur-sm group`}
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-700 group-hover:text-[#146AAC] transition-colors duration-300 mx-auto mb-4">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-[#146AAC] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl transition-all duration-500 ${
                    activeStep === index ? "scale-110 shadow-blue-500/50" : ""
                  }`}
                  style={{
                    background:
                      activeStep === index
                        ? `linear-gradient(135deg, #146AAC, #2563eb)`
                        : `linear-gradient(135deg, #64748b, #475569)`,
                  }}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="w-1 h-16 mt-4 rounded-full"
                    style={{
                      background:
                        activeStep > index
                          ? `linear-gradient(to bottom, #146AAC, #2563eb)`
                          : "#e5e7eb",
                    }}
                  ></div>
                )}
              </div>
              <div
                className={`${step.bgPattern} rounded-2xl p-6 shadow-xl border border-white/50 backdrop-blur-sm flex-1`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-700 flex-shrink-0">
                    <div className="w-6 h-6">{step.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Directly under content */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl inline-block border border-white/50 group hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
            {/* CTA Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-gray-800 mb-4 group-hover:text-[#146AAC] transition-colors duration-300">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md mx-auto">
                Join hundreds of professionals who have advanced their careers
                with Hope BTC.
              </p>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#146AAC] to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 group relative overflow-hidden inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Book Your Course Today
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

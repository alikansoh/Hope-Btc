import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#156BAA] via-[#1B7BC0] to-[#0F5A96] text-white relative overflow-hidden mt-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">H</span>
                </div>
                <h3 className="text-xl font-bold">Hope BTC</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-sm">
                London&apos;s trusted F-Gas training provider, offering
                accredited courses, expert instructors, and hands-on practical
                learning in Park Royal.
              </p>
             
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-1 h-6 bg-white/60 rounded-full mr-3"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center text-sm group"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-200 mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center text-sm group"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-200 mr-2"></span>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center text-sm group"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-200 mr-2"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center text-sm group"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-200 mr-2"></span>
                    Contact
                  </Link>
                </li>
              
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-1 h-6 bg-white/60 rounded-full mr-3"></span>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-white/30 transition-colors">
                    <span className="text-xs">📍</span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Park Royal, London, UK
                  </p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-xs">📞</span>
                  </div>
                  <a
                    href="tel:+441234567890"
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    +44 1234 567 890
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-xs">✉️</span>
                  </div>
                  <a
                    href="mailto:info@hopebtc.co.uk"
                    className="text-white/90 hover:text-white transition-colors text-sm break-all"
                  >
                    info@hopebtc.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/20 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-white/70">
              &copy; {new Date().getFullYear()} Hope BTC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-white/70">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
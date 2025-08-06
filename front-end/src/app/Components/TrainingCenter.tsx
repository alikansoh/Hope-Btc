"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TrainingCentre() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('training-centre');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    "Hands-on training with modern HVAC tools and systems",
    "Supportive and approachable instructors with real-world experience",
    "Calm, focused environment ideal for practical learning",
    "Small class sizes for maximum interaction and guidance",
    "Clean, professional classrooms with all required safety standards",
    "Real-world scenarios preparing you for immediate field work"
  ];

  return (
    <section id="training-centre" className="relative py-20 overflow-hidden">
      {/* Simple background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-[#1569AA]/5"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`transform transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="relative">
              <div className="bg-white p-3 rounded-2xl shadow-xl">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/center.jpeg"
                    alt="Hope BTC Training Centre"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transform transition-all duration-800 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Inside Our 
                  <span className="text-[#1569AA]"> Training Centre</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Our facility is fully equipped with real-world refrigeration and air
                  conditioning systems, giving you the hands-on experience needed to
                  confidently work in the field.
                </p>
              </div>

              {/* Features List */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#1569AA]/10">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start text-gray-700 leading-relaxed transform transition-all duration-500 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 400}ms` }}
                    >
                      <div className="w-2 h-2 bg-[#1569AA] rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-[#1569AA] rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">Ready to Start Your Training?</h4>
                <p className="text-blue-100 mb-4">
                  Learn more about our programs and facility. Get all the information you need to begin your HVAC career.
                </p>
                <a 
                  href="/contact-us" 
                  className="inline-block bg-white text-[#1569AA] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
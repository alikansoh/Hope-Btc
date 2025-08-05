"use client"
import { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: 'Book Your Place',
      description: 'Choose the right course and reserve your spot online or by phone with our easy booking system.',
      icon: '📝',
      gradient: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100',
    },
    {
      title: 'Attend Practical Training',
      description: 'Join our hands-on training sessions at our fully equipped centre in Park Royal with expert instructors.',
      icon: '🧑‍🔧',
      gradient: 'from-indigo-500 to-purple-500',
      bgPattern: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100',
    },
    {
      title: 'Get Certified',
      description: 'Receive your official F-Gas certificate upon successful completion and join the certified professionals.',
      icon: '🎓',
      gradient: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100',
    },
    {
      title: 'Start Work or Upgrade Your Career',
      description: 'Use your certification to access new job opportunities or enhance your current role in the industry.',
      icon: '🚀',
      gradient: 'from-emerald-500 to-teal-500',
      bgPattern: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <h2 className="text-5xl font-black bg-gradient-to-r from-[#146AAC] via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#146AAC] to-blue-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From booking to certification – here&apos;s your seamless journey to F-Gas certification at Hope BTC.
          </p>
        </div>

        {/* Desktop and Tablet View */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Animated Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-2 bg-gray-200 rounded-full mx-40">
              <div 
                className="h-full bg-gradient-to-r from-[#146AAC] to-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{width: `${((activeStep + 1) / 4) * 100}%`}}
              ></div>
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Enhanced Step Number Circle */}
                  <div className="flex justify-center mb-8">
                    <div 
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl relative z-10 transition-all duration-500 ${
                        activeStep === index 
                          ? 'scale-110 shadow-blue-500/50' 
                          : 'scale-100 hover:scale-105'
                      }`}
                      style={{
                        background: activeStep === index 
                          ? `linear-gradient(135deg, #146AAC, #2563eb)` 
                          : `linear-gradient(135deg, #64748b, #475569)`
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Enhanced Step Card */}
                  <div className={`${step.bgPattern} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 backdrop-blur-sm group overflow-hidden relative ${
                    activeStep === index ? 'ring-2 ring-blue-400/50 ring-offset-2' : ''
                  }`}>
                    {/* Card Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 group-hover:from-white/90 group-hover:to-white/60 transition-all duration-500"></div>
                    
                    <div className="text-center relative z-10">
                      <div className={`text-5xl mb-6 transition-all duration-500 ${
                        activeStep === index ? 'scale-110 animate-bounce' : 'group-hover:scale-105'
                      }`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#146AAC] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                  
                  {/* Enhanced Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 -right-6 transform -translate-y-1/2 z-20">
                      <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                        activeStep >= index + 1 ? 'bg-gradient-to-r from-[#146AAC] to-blue-500 text-white scale-110' : 'hover:scale-105'
                      }`}>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Mobile View */}
        <div className="lg:hidden space-y-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="flex items-start space-x-6">
                {/* Enhanced Mobile Step Number */}
                <div className="flex flex-col items-center">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl transition-all duration-500 ${
                      activeStep === index ? 'scale-110 shadow-blue-500/50' : ''
                    }`}
                    style={{
                      background: activeStep === index 
                        ? `linear-gradient(135deg, #146AAC, #2563eb)` 
                        : `linear-gradient(135deg, #64748b, #475569)`
                    }}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="w-1 h-20 mt-6 rounded-full transition-all duration-500"
                      style={{
                        background: activeStep > index 
                          ? `linear-gradient(to bottom, #146AAC, #2563eb)` 
                          : '#e5e7eb'
                      }}
                    ></div>
                  )}
                </div>
                
                {/* Enhanced Mobile Content */}
                <div className={`flex-1 ${step.bgPattern} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 backdrop-blur-sm group overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 group-hover:from-white/90 group-hover:to-white/60 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#146AAC] transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl inline-block border border-white/50 group hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
            {/* CTA Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-gray-800 mb-4 group-hover:text-[#146AAC] transition-colors duration-300">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md mx-auto">
                Join hundreds of professionals who have advanced their careers with Hope BTC.
              </p>
              <button 
                className="bg-gradient-to-r from-[#146AAC] to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Book Your Course Today
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
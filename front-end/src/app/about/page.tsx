import React from "react";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - About Us */}
      <section className="relative bg-gradient-to-br from-[#156BAA] via-[#1e7bc4] to-[#2a87d4] text-white py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Hope BTC
            </h1>
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
                London&apos;s premier <strong className="font-bold text-blue-200">F-Gas certification training center</strong>, 
                dedicated to excellence in <strong className="font-bold text-blue-200">HVAC education</strong>
              </p>
              <p className="text-xl leading-relaxed opacity-95">
                For over 15 years, we&apos;ve been shaping the careers of <strong className="font-semibold">refrigeration and air conditioning professionals</strong> 
                across the capital, providing comprehensive, practical <strong className="font-semibold">F-Gas training</strong> that empowers professionals to work 
                safely, legally, and confidently with <strong className="font-semibold">fluorinated greenhouse gases</strong>.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black text-blue-200">1000+</div>
                <div className="text-lg font-medium">Students Trained</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black text-blue-200">98%</div>
                <div className="text-lg font-medium">Pass Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black text-blue-200">15+</div>
                <div className="text-lg font-medium">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-90">
              <span className="bg-blue-400/20 text-blue-100 px-4 py-2 rounded-full font-medium">F-Gas Category I</span>
              <span className="bg-blue-400/20 text-blue-100 px-4 py-2 rounded-full font-medium">F-Gas Category II</span>
              <span className="bg-blue-400/20 text-blue-100 px-4 py-2 rounded-full font-medium">LCL Accredited</span>
              <span className="bg-blue-400/20 text-blue-100 px-4 py-2 rounded-full font-medium">London Training Center</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <div className="inline-block bg-gradient-to-r from-[#156BAA] to-[#2a87d4] text-transparent bg-clip-text mb-6">
              <h2 className="text-5xl md:text-6xl font-black">Our Vision</h2>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 border-t-4 border-[#156BAA] hover:shadow-3xl transition-shadow duration-500">
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
                To be the UK&apos;s leading <strong className="font-bold text-[#156BAA]">F-Gas training provider</strong>, 
                recognized for transforming <strong className="font-bold text-[#156BAA]">HVAC education</strong> 
                through innovative, practical training that sets the gold standard for industry excellence.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#156BAA] to-[#2a87d4] mx-auto my-8 rounded-full"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                We envision a future where every <strong className="font-semibold text-gray-900">HVAC professional</strong> has access to world-class education that 
                not only meets <strong className="font-semibold text-gray-900">regulatory requirements</strong> but exceeds industry expectations, delivered by 
                experienced instructors with decades of practical expertise in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#156BAA]/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -mr-48 -mb-48"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Our Mission
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20">
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-12 font-light">
                To provide comprehensive, practical, and accredited <strong className="font-bold text-blue-300">F-Gas training</strong> that empowers 
                <strong className="font-bold text-blue-300"> HVAC professionals</strong> to work safely, legally, and confidently with 
                <strong className="font-bold text-blue-300"> fluorinated greenhouse gases</strong> while contributing to environmental sustainability and industry excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Excellence in Education</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Delivering the highest quality <strong className="font-semibold text-white">F-Gas certification training</strong> with practical, 
                    hands-on learning experiences using industry-standard equipment
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Industry Leadership</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Setting the standard for <strong className="font-semibold text-white">professional HVAC training</strong> 
                    and <strong className="font-semibold text-white">F-Gas certification excellence</strong> in London&apos;s refrigeration and air conditioning sector
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Career Advancement</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Empowering students with <strong className="font-semibold text-white">professional certifications</strong> and advanced skills 
                    that accelerate their careers in the <strong className="font-semibold text-white">HVAC industry</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Why Choose Hope BTC for Your <span className="text-[#156BAA]">F-Gas Training</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#156BAA]">
              <h3 className="text-xl font-bold text-[#156BAA] mb-4">LCL Accredited</h3>
              <p className="text-gray-700">Fully accredited <strong>F-Gas certification</strong> recognized across the UK</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-green-600 mb-4">Expert Instructors</h3>
              <p className="text-gray-700">Industry professionals with 20+ years <strong>HVAC experience</strong></p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">London Location</h3>
              <p className="text-gray-700">Convenient <strong>Park Royal training center</strong> with excellent transport links</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-600 mb-4">98% Pass Rate</h3>
              <p className="text-gray-700">Proven track record in <strong>F-Gas certification</strong> success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#156BAA] via-[#1e7bc4] to-[#2a87d4] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready to Start Your <span className="text-blue-300">F-Gas Journey</span>?
          </h2>
          <p className="text-2xl mb-12 leading-relaxed font-light">
            Join the Hope BTC family and become part of London&apos;s most successful <strong className="font-bold text-blue-300">F-Gas training community</strong>. 
            Our expert instructors and comprehensive <strong className="font-bold text-blue-300">HVAC courses</strong> will set you up for career success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/courses" 
              className="bg-white text-[#156BAA] px-10 py-5 rounded-2xl text-xl font-black hover:bg-blue-100 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-block"
            >
              View F-Gas Courses
            </Link>
            <Link 
              href="/contact" 
              className="border-3 border-white text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white hover:text-[#156BAA] transition-all duration-300 transform hover:scale-105 shadow-2xl inline-block"
            >
              Book Training Today
            </Link>
          </div>

          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-12 border border-white/30">
            <p className="text-xl mb-6 font-medium">Questions about our <strong>F-Gas certification training</strong>?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-black mb-2 text-blue-300">020 8961 4545</p>
                <p className="text-lg opacity-90">Call us directly</p>
              </div>
              <div>
                <p className="text-xl font-bold mb-2">Monday - Friday</p>
                <p className="text-lg opacity-90">9:00 AM - 5:30 PM</p>
              </div>
              <div>
                <p className="text-xl font-bold mb-2">Email Us</p>
                <p className="text-lg opacity-90">info@hopebtc.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
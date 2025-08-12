"use client"
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
        preferredContact: 'email'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1000);
  };

  const courses = [
    "F-Gas Category I - Full Certification (5 Days)",
    "F-Gas Category II - Intermediate Certification (3 Days)",
    "F-Gas Category III - Leak Check Only (1 Day)",
    "F-Gas Category IV - Recovery Only (1 Day)",
    "General Enquiry"
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: [
        "Hope BTC Training Center",
        "suite 50",
        "Unimix House, Abbey Road",
        "London NW10 7TR",
        "United Kingdom"
      ]
    },
    {
      icon: "📞",
      title: "Phone",
      details: [
        
        "Mobile: 07359 609398",
       
      ]
    },
    {
      icon: "✉️",
      title: "Email",
      details: [
        "info@hopebtc.co.uk",
        
      ]
    },
    
  ];

  const transportOptions = [
    {
      type: "🚇 Tube",
      details: [
        "Park Royal Station (Piccadilly Line)",
        "3 minutes walk from station",
        "Direct connections to Central London"
      ]
    },
    {
      type: "🚌 Bus",
      details: [
        "Routes 226, 440, 487",
        "Stop: Park Royal Station",
        "Regular services throughout the day"
      ]
    },
    {
      type: "🚗 Car",
      details: [
        "Easy access from A40 Western Avenue",
        "Junction with North Circular (A406)",
        "Free on-site parking available"
      ]
    },
    {
      type: "🚲 Cycle",
      details: [
        "Cycle Superhighway nearby",
        "Secure bike storage available",
        "Shower facilities on-site"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#156BAA] to-[#1e7bc4] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to start your F-Gas certification journey? Get in touch with our expert team 
            for course information, bookings, or any questions about Refrigeration and HVAC training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:07359 609398" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
              📞 Call Now: 07359 609398
            </a>
            <a href="mailto:info@hopebtc.co.uk" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#156BAA] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#156BAA] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#156BAA] focus:border-transparent"
                      placeholder="020 1234 5678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#156BAA] focus:border-transparent"
                    >
                      <option value="">Select a course...</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-[#156BAA]"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-[#156BAA]"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#156BAA] focus:border-transparent resize-none"
                    placeholder="Tell us about your training needs, preferred dates, or any questions you have..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#156BAA] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#125a90] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#156BAA] text-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:07359 609398" 
                    className="block w-full bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">📞</span>
                      <div>
                        <div className="font-semibold">Call Us Now</div>
                        <div className="text-sm opacity-90">07359 609398</div>
                      </div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:bookings@hopebtc.co.uk" 
                    className="block w-full bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">📧</span>
                      <div>
                        <div className="font-semibold">Book a Course</div>
                        <div className="text-sm opacity-90">info@hopebtc.co.uk</div>
                      </div>
                    </div>
                  </a>
                              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Our Training Center</h2>
            <p className="text-xl text-gray-600">
              Located at Unimix House, Abbey Road, London with excellent transport connections
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4985774999997!2d-0.2773185!3d51.5332415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611f3733d875d%3A0x996e6045362721fe!2sUnimix%20House%2C%20Abbey%20Rd%2C%20London%20NW10%207TR!5e0!3m2!1sen!2suk!4v1691234567890!5m2!1sen!2suk"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hope BTC Training Center Location"
                />
              </div>
            </div>

            {/* Transport Information */}
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
     

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#156BAA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Don't wait to advance your career. Contact Hope BTC today and join hundreds of 
            successfully certified F-Gas professionals across London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel07359 609398"
              className="bg-white text-[#156BAA] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Now: 07359 609398
            </a>
            <a 
              href="mailto:bookings@hopebtc.co.uk"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#156BAA] transition-colors"
            >
              Email Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
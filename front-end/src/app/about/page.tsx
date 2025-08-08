import React from "react";
import Link from "next/link";

const AboutUsPage = () => {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Hope BTC was established with a vision to provide top-quality HVAC training in London."
    },
    {
      year: "2012",
      title: "F-Gas Specialization",
      description: "Became one of London's first dedicated F-Gas certification training centers."
    },
    {
      year: "2015",
      title: "LCL Accreditation",
      description: "Achieved full LCL Awards accreditation for all F-Gas certification courses."
    },
    {
      year: "2018",
      title: "New Training Facility",
      description: "Opened state-of-the-art training center in Park Royal with modern equipment."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Introduced hybrid learning approaches and digital assessment tools."
    },
    {
      year: "2024",
      title: "1000+ Graduates",
      description: "Celebrated training over 1000 F-Gas certified professionals across London."
    }
  ];

  const teamMembers = [
    {
      name: "David Richardson",
      position: "Managing Director & Lead Instructor",
      experience: "25+ years",
      qualifications: "C&G, F-Gas Cat I, Heat Pump Specialist",
      image: "👨‍💼",
      bio: "David founded Hope BTC with a passion for excellence in HVAC training. With over two decades in the industry, he brings real-world experience to every course."
    },
    {
      name: "Sarah Mitchell",
      position: "Senior F-Gas Instructor",
      experience: "18+ years",
      qualifications: "F-Gas Cat I, Refrigeration Engineer, LCL Assessor",
      image: "👩‍🏫",
      bio: "Sarah specializes in Category I and II certifications, known for her practical approach and ability to simplify complex technical concepts."
    },
    {
      name: "James Thompson",
      position: "Technical Training Manager",
      experience: "22+ years",
      qualifications: "HNC Mechanical Engineering, F-Gas Expert",
      image: "👨‍🔧",
      bio: "James oversees our hands-on training programs and ensures all equipment meets the latest industry standards and regulations."
    },
    {
      name: "Lisa Brown",
      position: "Course Coordinator & Student Support",
      experience: "12+ years",
      qualifications: "Business Management, Training Administration",
      image: "👩‍💻",
      bio: "Lisa ensures smooth course operations and provides ongoing support to our students throughout their certification journey."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We maintain the highest standards in training delivery, ensuring every student receives world-class education."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We operate with complete transparency, honesty, and ethical practices in all our interactions."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We continuously evolve our training methods and incorporate the latest industry technologies and practices."
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We're committed to environmental responsibility and training the next generation of green technology experts."
    },
    {
      icon: "👥",
      title: "Community",
      description: "We build lasting relationships with our students and contribute to the growth of London's HVAC community."
    },
    {
      icon: "🏆",
      title: "Achievement",
      description: "We celebrate every student's success and take pride in their professional achievements and career growth."
    }
  ];

  const accreditations = [
    { name: "LCL Awards", description: "Fully accredited F-Gas training provider" },
    { name: "City & Guilds", description: "Approved training center for technical qualifications" },
    { name: "CITB", description: "Construction Industry Training Board approved" },
    { name: "ECS", description: "Electrotechnical Certification Scheme member" },
    { name: "HVCA", description: "Heating & Ventilating Contractors Association" },
    { name: "Institute of Refrigeration", description: "Professional body membership" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#156BAA] to-[#1e7bc4] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About Hope BTC</h1>
              <p className="text-xl leading-relaxed mb-8">
                London&apos;s premier F-Gas certification training center, dedicated to excellence in HVAC education. 
                For over 15 years, we&apos;ve been shaping the careers of refrigeration and air conditioning professionals 
                across the capital.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Students Trained</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm">Pass Rate</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To provide comprehensive, practical, and accredited F-Gas training that empowers HVAC professionals 
                to work safely, legally, and confidently with fluorinated greenhouse gases while contributing to 
                environmental sustainability and industry excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming London&apos;s leading F-Gas training provider, 
              our journey has been driven by a passion for excellence and student success.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#156BAA] mb-6">How We Started</h3>
                <p className="text-gray-700 leading-7 mb-6">
                  Hope BTC was founded in 2008 by David Richardson, a veteran HVAC engineer who recognized 
                  the growing need for specialized F-Gas training in London. With the introduction of 
                  stricter environmental regulations and the phase-down of fluorinated gases, David saw 
                  an opportunity to create a training center that would truly prepare professionals for 
                  the evolving industry landscape.
                </p>
                <p className="text-gray-700 leading-7 mb-6">
                  Starting with just a small training room in West London, Hope BTC quickly gained a 
                  reputation for practical, hands-on training that went beyond just passing exams. 
                  Our focus on real-world skills and comprehensive understanding set us apart from 
                  other training providers.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#156BAA] mb-6">Where We Are Today</h3>
                <p className="text-gray-700 leading-7 mb-6">
                  Today, Hope BTC operates from a purpose-built training facility in Park Royal, 
                  equipped with the latest HVAC equipment and technology. We&apos;ve trained over 1000 
                  professionals and maintain relationships with major HVAC contractors, facilities 
                  management companies, and individual engineers across London and the South East.
                </p>
                <p className="text-gray-700 leading-7">
                  Our commitment to quality has earned us full accreditation from LCL Awards and 
                  recognition as one of London&apos;s premier F-Gas training centers. We continue to 
                  innovate our training methods while maintaining the practical, student-focused 
                  approach that has made us successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in Hope BTC&apos;s growth and development</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#156BAA]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-3xl font-bold text-[#156BAA] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#156BAA] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success in F-Gas certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{member.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-[#156BAA] font-semibold mb-2">{member.position}</p>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p><strong>Experience:</strong> {member.experience}</p>
                        <p><strong>Qualifications:</strong> {member.qualifications}</p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Accreditations & Memberships</h2>
            <p className="text-xl text-gray-300">
              Recognized and approved by leading industry bodies and certification organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{accreditation.name}</h3>
                <p className="text-gray-300 text-sm">{accreditation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Location */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Facility</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art training center in the heart of London&apos;s industrial district
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#156BAA] mb-6">Modern Training Environment</h3>
              <p className="text-gray-700 leading-7 mb-6">
                Our purpose-built training facility in Park Royal features modern classrooms, 
                fully-equipped practical workshops, and the latest HVAC equipment for hands-on learning.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Climate-controlled classrooms with modern AV equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Dedicated practical workshop with real HVAC systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Latest refrigerant recovery and leak detection equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>On-site parking and excellent transport links</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Student break areas and refreshment facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#156BAA] mb-6">Location & Access</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📍 Address</h4>
                  <p className="text-gray-700">Hope BTC Training Center<br />Park Royal Industrial Estate<br />London NW10 7LQ</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🚇 Transport Links</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Park Royal tube station - 5 minutes walk</li>
                    <li>• Excellent bus connections</li>
                    <li>• Easy access from A40 and North Circular</li>
                    <li>• Free on-site parking available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#156BAA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your F-Gas Journey?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join the Hope BTC family and become part of London&apos;s most successful F-Gas training community. 
            Our expert instructors and comprehensive courses will set you up for career success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/courses" 
              className="bg-white text-[#156BAA] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View Our Courses
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#156BAA] transition-colors"
            >
              Contact Us Today
            </Link>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4">Questions about our training or certification process?</p>
            <p className="text-xl font-semibold">Call us: 020 8961 4545</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
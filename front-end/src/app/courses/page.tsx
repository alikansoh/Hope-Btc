import React from "react";
import Link from "next/link";

const CoursesSection = () => {
  const courses = [
    {
      title: "F-Gas Certification",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      title: "Refrigeration and Air Conditioning Installation",

      color: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      title: "Refrigeration and Air Conditioning Commissioning Fault Finding",

      color: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      title: "Refrigeration and Air Conditioning Electric Controls",

      color: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "LCL Awards Accredited",
      description:
        "All our courses are fully accredited and meet legal F-Gas regulation standards.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with decades of HVAC and refrigeration experience.",
    },
    {
      icon: "🔧",
      title: "Hands-On Training",
      description:
        "Practical experience with real equipment in our state-of-the-art training facility.",
    },
    {
      icon: "📍",
      title: "London Location",
      description:
        "Conveniently located in Park Royal, London with excellent transport links.",
    },
    {
      icon: "📜",
      title: "Legal Compliance",
      description:
        "Meet all requirements for F-Gas Regulation (EU 517/2014) and UK legislation.",
    },
    {
      icon: "💼",
      title: "Career Support",
      description:
        "Ongoing support and guidance to help advance your Refrigeration and HVAC career prospects.",
    },
  ];

  const faqs = [
    {
      question: "What is F-Gas certification and why do I need it?",
      answer:
        "F-Gas certification is legally required to work with fluorinated greenhouse gases in refrigeration, air conditioning, and heat pump systems. Without proper certification, you cannot legally handle these substances.",
    },
    {
      question: "Which category should I choose?",
      answer:
        "Category I is for full certification on all systems. Category II is for smaller systems under 3kg. Categories III and IV are for specific roles (leak checking or recovery only).",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "F-Gas certifications are typically valid for 5 years, after which refresher training may be required to maintain compliance.",
    },
    {
      question: "Do you provide equipment for training?",
      answer:
        "Yes, we provide all necessary equipment and tools for hands-on training. You don't need to bring anything except a willingness to learn.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#156BAA] to-[#1e7bc4] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            F-Gas Certification Courses in London
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Get certified with Hope BTC&apos;s comprehensive F-Gas training
            courses. LCL Awards approved, hands-on learning, and full compliance
            with UK/EU regulations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ LCL Awards Accredited
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ Hands-On Training
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ London{" "}
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ Expert Instructors
            </span>
          </div>
        </div>
      </section>

   {/* Course Cards */}
<section className="py-20 px-4 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Choose Your Certification Level
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Select the F-Gas certification that matches your role and career goals. Each course is designed to meet specific industry requirements and compliance standards.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {courses.map((course, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.03]"
      >
        <div className={`${course.color} text-white p-8 flex items-center space-x-6`}>
          {/* Example icon placeholder */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
            {/* Use emoji or SVG icon based on course */}
            {index === 0 && "❄️"}
            {index === 1 && "🛠️"}
            {index === 2 && "🔍"}
            {index === 3 && "⚡"}
          </div>
          <h3 className="text-3xl font-extrabold drop-shadow-md">{course.title}</h3>
        </div>

        <div className="p-8 space-y-6">
          {/* Short description placeholder - customize as needed */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {`Comprehensive training covering key aspects of the "${course.title}" to boost your skills and compliance.`}
          </p>

          <Link
            href="/contact"
            className="inline-block w-full md:w-auto bg-[#156BAA] text-white py-3 px-8 rounded-xl font-semibold hover:bg-[#125a90] transition-colors text-center"
          >
            Book This Course
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Why Choose Hope BTC */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hope BTC?
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re London&apos;s leading F-Gas training provider with a
              proven track record of success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Training Process</h2>
            <p className="text-xl text-gray-300">
              A structured approach to F-Gas certification that ensures complete
              understanding and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Theory Learning",
                description:
                  "Comprehensive classroom instruction covering regulations, safety, and best practices.",
              },
              {
                step: "2",
                title: "Practical Training",
                description:
                  "Hands-on experience with real Refrigeration and HVAC equipment and industry-standard tools.",
              },
              {
                step: "3",
                title: "Assessment",
                description:
                  "Written and practical assessments to validate your knowledge and skills.",
              },
              {
                step: "4",
                title: "Certification",
                description:
                  "Receive your LCL Awards accredited F-Gas certification upon successful completion.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#156BAA] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about F-Gas certification and our
              courses.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#156BAA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get F-Gas Certified?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join hundreds of Refrigeration and HVAC professionals who have advanced their careers
            with Hope BTC&apos;s comprehensive F-Gas certification courses. Book
            your course today and take the next step in your professional
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#156BAA] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Book Your Course Now
            </Link>
           
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">900+</div>
              <div className="text-white/80">Students Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold">90%</div>
              <div className="text-white/80">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesSection;

import React from "react";

const FAQs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#156BAA] mb-8 text-center">
          Frequently Asked Questions
          <br />
          <span className="text-gray-700 text-lg font-medium">
            About Our F-Gas Certification Courses
          </span>
        </h2>

        <div className="space-y-6">
          {/* Question 1 */}
          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              <span>Is the F-Gas training course officially accredited?</span>
              <svg
                className="w-5 h-5 text-[#156BAA] group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600">
              Yes. Our F-Gas courses are fully accredited by LCL Awards and
              comply with UK legal requirements for working with fluorinated
              gases in the HVAC and refrigeration industry.
            </p>
          </details>

          {/* Question 2 */}
          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              <span>How long does the F-Gas course take?</span>
              <svg
                className="w-5 h-5 text-[#156BAA] group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600">
              It depends on the category. Category 1 takes 5 days, Category 2 is
              3 days, while Category 3 and 4 each take 1 day. All training
              includes hands-on practical sessions and assessments.
            </p>
          </details>

          {/* Question 3 */}
          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              <span>What is the learning environment like at Hope BTC?</span>
              <svg
                className="w-5 h-5 text-[#156BAA] group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600">
              Hope BTC provides a professional and supportive learning
              environment featuring real industry-grade HVAC equipment, small
              class sizes for personalised attention, expert instructors, and a
              calm, focused setting to ensure effective hands-on training.
            </p>
          </details>

          {/* Question 4 */}
          <details className="group border border-gray-200 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              <span>
                Do I need prior experience in HVAC to attend this course?
              </span>
              <svg
                className="w-5 h-5 text-[#156BAA] group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600">
              No previous experience is required for F-Gas Category 1. Our
              instructors guide you through both theory and practical aspects,
              making it suitable for beginners and professionals alike.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

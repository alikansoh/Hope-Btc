// components/CoursesPreview.tsx
import Link from 'next/link'

const courses = [
    {
      title: 'F-Gas Category 1',
      description: 'Comprehensive certification for installation, servicing, maintenance, leak checking, and refrigerant recovery on all equipment types.',
      level: 'Full Certification',
      duration: '5 Days',
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'F-Gas Category 2',
      description: 'Covers systems containing less than 3kg (or 6kg if hermetically sealed) – includes installation, servicing, and recovery.',
      level: 'Intermediate Certification',
      duration: '3 Days',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'F-Gas Category 3',
      description: 'For personnel performing leak checking only – without refrigerant recovery or maintenance tasks.',
      level: 'Leak Check Only',
      duration: '1 Day',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'F-Gas Category 4',
      description: 'Certification limited to refrigerant recovery only – no servicing, maintenance or installation work allowed.',
      level: 'Recovery Only',
      duration: '1 Day',
      color: 'from-blue-300 to-blue-500'
    },
  ]
  
  

export default function CoursesPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
            Master F-Gas Certifications
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto leading-relaxed">
            Industry-leading certifications that open doors to lucrative career opportunities in HVAC and refrigeration
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50"
            >
              {/* Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Level Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${course.color} text-white shadow-sm`}>
                  {course.level}
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-blue-600 text-sm leading-relaxed mb-4 group-hover:text-blue-700 transition-colors">
                  {course.description}
                </p>
                
                {/* Duration */}
                <div className="flex items-center gap-2 text-blue-500 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/courses"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore All Courses
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-blue-300 text-blue-700 font-semibold rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm"
            >
              Book your Course
            </Link>
          </div>
          
        
        </div>
      </div>
    </section>
  )
}
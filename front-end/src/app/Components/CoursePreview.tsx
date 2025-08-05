// components/CoursesPreview.tsx
import Link from 'next/link'

const courses = [
    {
      title: 'F-Gas Category 1',
      description: 'Comprehensive certification for installation, servicing, maintenance, leak checking, and refrigerant recovery on all equipment types.',
      level: 'Full Certification',
      duration: '5 Days',
      opacity: '1'
    },
    {
      title: 'F-Gas Category 2',
      description: 'Covers systems containing less than 3kg (or 6kg if hermetically sealed) – includes installation, servicing, and recovery.',
      level: 'Intermediate Certification',
      duration: '3 Days',
      opacity: '0.85'
    },
    {
      title: 'F-Gas Category 3',
      description: 'For personnel performing leak checking only – without refrigerant recovery or maintenance tasks.',
      level: 'Leak Check Only',
      duration: '1 Day',
      opacity: '0.7'
    },
    {
      title: 'F-Gas Category 4',
      description: 'Certification limited to refrigerant recovery only – no servicing, maintenance or installation work allowed.',
      level: 'Recovery Only',
      duration: '1 Day',
      opacity: '0.55'
    },
  ]
  
  

export default function CoursesPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{backgroundColor: '#146AAC'}}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" style={{backgroundColor: '#146AAC'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" style={{backgroundColor: '#146AAC'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-5xl font-bold mb-6" style={{color: '#146AAC'}}>
            Master F-Gas Certifications
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{color: '#146AAC'}}>
            Industry-leading certifications that open doors to lucrative career opportunities in HVAC and refrigeration
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{borderColor: '#146AAC40'}}
            >
              {/* Gradient Accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"
                style={{backgroundColor: '#146AAC'}}
              ></div>
              
              <div className="relative z-10">
                {/* Level Badge */}
                <div 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white shadow-sm"
                  style={{backgroundColor: '#146AAC', opacity: course.opacity}}
                >
                  {course.level}
                </div>
                
                <h3 className="text-xl font-bold mb-3 transition-colors" style={{color: '#146AAC'}}>
                  {course.title}
                </h3>
                
                <p className="text-sm leading-relaxed mb-4 transition-colors" style={{color: '#146AAC', opacity: '0.8'}}>
                  {course.description}
                </p>
                
                {/* Duration */}
                <div className="flex items-center gap-2 text-xs" style={{color: '#146AAC', opacity: '0.7'}}>
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
              className="group relative px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-90"
              style={{backgroundColor: '#146AAC'}}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore All Courses
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border-2 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm"
              style={{borderColor: '#146AAC', color: '#146AAC'}}
            >
              Book your Course
            </Link>
          </div>
          
        
        </div>
      </div>
    </section>
  )
}
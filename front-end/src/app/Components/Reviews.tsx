'use client';
import { useState, useEffect, JSX, useRef, useCallback } from 'react';

interface Testimonial {
  name: string;
  text: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmed R.',
    text: 'The training was hands-on and incredibly helpful. I passed my F-Gas exam with confidence!',
    role: 'Refrigeration and HVAC Technician',
    rating: 5,
  },
  {
    name: 'Fatima K.',
    text: 'The instructors were patient and knowledgeable. I highly recommend Hope BTC!',
    role: 'Refrigeration Engineer',
    rating: 5,
  },
  {
    name: 'John M.',
    text: 'Great facilities and excellent support. The practical sessions made all the difference.',
    role: 'Maintenance Specialist',
    rating: 5,
  },
];

export default function TestimonialsSlider(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const nextSlide = useCallback((): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const prevSlide = useCallback((): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const goToSlide = (index: number): void => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-base sm:text-lg md:text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="relative bg-gradient-to-br from-[#156BAA] via-[#1a7bc4] to-[#0f5489] text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wider">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
            What Our Students Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-2">
            Real stories from professionals who transformed their careers with Hope BTC
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div 
            ref={cardRef}
            className={`bg-white/95 backdrop-blur-lg text-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 mx-auto max-w-4xl transform transition-all duration-300 ${
              isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
            } touch-pan-y`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#156BAA] rounded-full p-2.5 sm:p-3 md:p-4 shadow-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-4 sm:mb-6">
              {renderStars(testimonials[current].rating)}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed italic text-gray-700 mb-6 sm:mb-8 font-medium px-2 sm:px-4">
              &quot;{testimonials[current].text}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#156BAA] to-[#1a7bc4] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0">
                {testimonials[current].name.charAt(0)}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-gray-800">
                  {testimonials[current].name}
                </p>
                <p className="text-[#156BAA] font-semibold text-sm sm:text-base">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Navigation Arrows - Hidden on small screens */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#156BAA] hover:bg-[#125c94] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 hidden sm:block"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#156BAA] hover:bg-[#125c94] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 hidden sm:block"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center space-x-8 mb-6 sm:hidden">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 ${
                current === index 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {current === index && (
                <span className="absolute inset-0 rounded-full bg-white animate-ping"></span>
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-xs mx-auto mb-4 sm:mb-6">
          <div className="bg-white/20 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs sm:text-sm text-blue-100 mt-2">
            {current + 1} of {testimonials.length}
          </p>
        </div>

        {/* Swipe Hint - Only show on mobile */}
        <div className="sm:hidden mb-4">
          <p className="text-xs text-blue-200 opacity-75">
            ← Swipe to navigate →
          </p>
        </div>
      </div>
    </section>
  );
}
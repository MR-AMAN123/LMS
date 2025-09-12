
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";


const slides = [
  {
    id: 1,
    title: "Find the Best Tech Courses for You",
    image: "/image1.jpg",
  },
  {
    id: 2,
    title: "Learn from Industry Experts",
    image: "/image2.png",
  },
  {
    id: 3,
    title: "Affordable and practical courses for everyone",
    image: "/image3.jpg",
  },
];

const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  // Auto change slides every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

 

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-36 px-4 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover opacity-"
        />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Text */}
        <h1 className="text-black mr-80 text-4xl font-bold mb-4 transition-all duration-500">
          {slides[currentIndex].title}
        </h1>
        <p className="text-gray-200 dark:text-gray-300 mb-8 transition-all duration-500">
          {slides[currentIndex].subtitle}
        </p>

      
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Herosection;

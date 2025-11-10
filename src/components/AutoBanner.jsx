import React from 'react'
   import { useState, useEffect } from 'react';
const AutoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png"
  ];
  
  const totalSlides = slides.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };  
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide} 
              className="w-full flex-shrink-0" 
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center mt-5 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              currentSlide === index ? 'bg-black' : 'bg-black/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoBanner

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define your banner slides
const slides = [
  { 
    id: 1, 
    image: 'https://images.pexels.com/photos/8217728/pexels-photo-8217728.jpeg', 
    headline: 'The Essential Collection is Here',
    subtext: 'Discover timeless staples built for comfort and style.',
    cta: 'Shop Now',
    ctaLink: '/shop/new',
    style: 'text-white' // Text color based on background image
  },
  { 
    id: 2, 
    image: 'https://via.placeholder.com/1600x600/f3f4f6/374151?text=Limited+Time+Offer+-+20%25+Off', 
    headline: 'Season End Sale: Up to 50% Off',
    subtext: 'Don\'t miss out on these exclusive, limited-time savings.',
    cta: 'View Sale',
    ctaLink: '/sale',
    style: 'text-gray-900' // Text color based on background image
  },
  { 
    id: 3, 
    image: 'https://via.placeholder.com/1600x600/78716c/ffffff?text=Sustainable+Wear', 
    headline: 'Consciously Crafted Apparel',
    subtext: 'Explore our line of sustainable, ethically sourced fabrics.',
    cta: 'Learn More',
    ctaLink: '/about/sustainability',
    style: 'text-white' // Text color based on background image
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // Auto-slide every 5 seconds

  // --- Auto-Slide Logic using useEffect ---
  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to the next slide, or loop back to 0
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideInterval);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slideInterval]); // Re-run effect if slideInterval changes (though it won't here)

  // Handlers for manual navigation
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[400px] md:h-[600px]">
        
        {/* Carousel Container - Uses 'translate-x' to move slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="w-full flex-shrink-0 relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6 md:p-12">
                <div className={`text-center max-w-2xl ${slide.style}`}>
                  <p className="text-sm md:text-lg font-medium tracking-widest uppercase mb-2">
                    {slide.subtext}
                  </p>
                  <h1 className="text-3xl md:text-6xl font-extrabold mb-6">
                    {slide.headline}
                  </h1>
                  <a 
                    href={slide.ctaLink} 
                    className="inline-block px-8 py-3 bg-gray-900 text-white text-base font-semibold uppercase tracking-wider rounded-sm hover:bg-gray-700 transition duration-300"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Navigation Buttons --- */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-40 p-3 rounded-full hover:bg-opacity-80 transition duration-300 z-10 hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-900" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-40 p-3 rounded-full hover:bg-opacity-80 transition duration-300 z-10 hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </button>

        {/* --- Indicator Dots --- */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;



'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const StructureSlider = () => {
  const slides = [
    {
      id: 1,
      title: 'Mediterranean Landscape',
      image:
        'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Suite "U Principi Chiaramonte"',
      image:
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: '"At the Stables"',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: '"The Three Women"',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: '"At the Hall of Baruna"',
      image:
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      title: '"Guiscard"',
      image:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 7,
      title: '"The Manner"',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 8,
      title: '"The Throne Room"',
      image:
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 9,
      title: 'Common Areas',
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 10,
      title: 'Accessories and Equipment',
      image:
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 11,
      title: 'Manfredonico Castle View',
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1192&q=80',
    },
    {
      id: 12,
      title: 'Sicilian Countryside',
      image:
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1083&q=80',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(autoSlideRef.current);
  };

  const handleMouseLeave = () => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };


  return (
    <div className="px-4 md:px-8"> {/* Added horizontal padding container */}
      <div className="relative h-[65vh] min-h-[400px]"> {/* Reduced height to fit within 70vh */}
        <div
          className="rounded-2xl shadow-2xl overflow-hidden h-full" /* Added h-full */
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out h-full" /* Added h-full */
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 h-full"> {/* Added h-full */}
                <div className="w-full h-full relative"> {/* Removed aspect ratio */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{slide.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows with adjusted positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4e5c3a] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiArrowLeft className="text-lg md:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4e5c3a] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiArrowRight className="text-lg md:text-xl" />
          </button>
        </div>
      </div>

      {/* Thumbnail nav with adjusted spacing */}
      <div className="mt-4 px-2 flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 transition-all duration-300 ${currentSlide === index
              ? 'ring-4 ring-[#c1b49b] scale-105'
              : 'opacity-70 hover:opacity-100'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-20 h-14 md:w-24 md:h-16 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StructureSlider;



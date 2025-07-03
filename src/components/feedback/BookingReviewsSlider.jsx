'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BookingReviewsSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bookingReviews = [
    {
      name: 'Patrick',
      date: '2025-05-21',
      rating: 10,
      comment: 'The collection is truly sympathetic and sincere. The accommodation is impeccable and soigné. Petit déjeuner copieux et varié. A good time.',
      avatar: 'P'
    },
    {
      name: 'Tyler',
      date: '2025-05-14',
      rating: 10,
      comment: 'Exceptional experience from start to finish. The attention to detail and personalized service made our stay unforgettable.',
      avatar: 'T'
    },
    {
      name: 'Helga',
      date: '2025-05-11',
      rating: 10,
      comment: 'Der Ausblick von unserem Bett auf die Burg. Das reichhaltige und qualitativ hochwertige Frühstück. Wir werden auf jeden Fall wieder kommen!',
      avatar: 'H'
    },
    {
      name: 'Simone',
      date: '2025-05-10',
      rating: 10,
      comment: 'Exceptional hospitality and breathtaking views. The room was spacious and beautifully designed with all modern amenities.',
      avatar: 'S'
    },
    {
      name: 'Peter',
      date: '2025-05-10',
      rating: 8.0,
      comment: 'Die besondere Gastfreundlichkeit, die sauberen Räume und das taste Frühstück, sowie der Parkplatz sind optimal für einen Aufenthalt. Abgelegen von den großen Touristen Massen, sehr schöne Lage.',
      avatar: 'P'
    },
    {
      name: 'Maria',
      date: '2025-06-15',
      rating: 9.0,
      comment: 'The perfect romantic getaway! The sunset views from our balcony were spectacular. Staff went above and beyond to make our anniversary special.',
      avatar: 'M'
    },
  ];

  const CustomArrow = ({ direction, onClick }) => (
    <motion.div
      className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${
        direction === 'prev' ? 'left-0' : 'right-0'
      } cursor-pointer bg-white/90 hover:bg-white rounded-full shadow-lg p-2`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
    >
      {direction === 'prev' ? (
        <FaChevronLeft className="text-[#A5886E] text-xl" />
      ) : (
        <FaChevronRight className="text-[#A5886E] text-xl" />
      )}
    </motion.div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    appendDots: dots => (
      <div className="mt-10">
        <ul className="flex justify-center items-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#A5886E] transition-all duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16  relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="absolute top-20 right-10 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-14">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-[#A5886E]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Booking Reviews
          </motion.h2>
          <motion.div 
            className="flex justify-center items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-1 w-20 bg-[#A5886E] rounded-full"></div>
          </motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover what our guests say about their experience
          </motion.p>
        </div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Slider {...settings}>
            {bookingReviews.map((review, index) => (
              <div key={index} className="px-4 py-6">
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col border border-gray-100 overflow-hidden relative"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-6 right-6 text-blue-200 text-5xl opacity-30">
                    <FaQuoteLeft />
                  </div>
                  
                  <div className="flex items-start mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#A5886E] flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {Array.from({ length: Math.round(review.rating / 2) }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1 text-lg" />
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-bold text-[#A5886E]">
                      {review.rating}/10
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 flex-grow relative z-10">
                    {review.comment}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-md bg-[#A5886E] flex items-center justify-center">
                        <FaStar className="text-white" />
                      </div>
                      <span className="ml-3 font-semibold text-gray-700">Booking.com</span>
                    </div>
                    <div className="text-[#A5886E] font-semibold">
                      Verified Stay
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
       
        </motion.div>
      </div>
    </section>
  );
};

export default BookingReviewsSlider;
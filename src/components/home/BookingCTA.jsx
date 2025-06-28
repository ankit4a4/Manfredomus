import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BookingCTA = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-[#A5886E]" id="booking">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-up">
          Book Your Unforgettable Sicilian Experience Today
        </h2>
        <p className="mb-8 text-white/90 text-[15px] md:text-base max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Escape the ordinary and enjoy a sustainable stay in the heart of Sicily. Click below to begin your journey.
        </p>
        <Link
          to="/book"
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block bg-white text-[#597429] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#F1EFEF] transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default BookingCTA;

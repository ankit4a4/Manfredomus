import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import imageMain from '../../assets/home/img1.jpg';
import imageFamily from '../../assets/home/img2.jpg';
import imageNature from '../../assets/home/img3.jpg';

const HistorySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Text Content */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-[#597429] mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A residence full of history, today totally eco-friendly. Immersed in the vibrant heart of the Sicilian hinterland and a short distance from the historic walls of the majestic{' '}
            <span className="text-[#A5886E] font-medium">Castello Manfredonico</span>, our accommodation facility was born from a family dream.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Generations of farmers have cultivated these lands, and right here in the 60s, our parents built the house that would welcome our family. Today, that place of our childhood has become a welcoming oasis for travelers and tourists seeking an authentic connection with nature and Sicilian history.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With respect for the past and an eye to the future, we have renovated our home in an ecological and sustainable way, creating a technologically advanced environment with zero environmental impact.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We invite you to take refuge in the tranquility of our countryside, where we will welcome you with every comfort and the embrace of nature will envelop you with its genuine warmth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every corner of our structure has been cared for in the smallest details, with the aim of offering you a unique stay experience, far from the usual tourist itineraries.
            <br />
            <span className="block mt-2 font-medium text-[#A5886E]">
              Discover with us the hidden treasures of an authentic Sicily, still unexplored and full of charm. We look forward to seeing you.
            </span>
          </p>
        </div>

        {/* RIGHT - Image Stack */}
        <div className="grid gap-6" data-aos="fade-up">
          <img
            src={imageMain}
            alt="Main Residence"
            className="rounded-xl shadow-md w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={imageFamily}
              alt="Family History"
              className="rounded-xl shadow-md object-cover h-48 w-full"
            />
            <img
              src={imageNature}
              alt="Eco Garden"
              className="rounded-xl shadow-md object-cover h-48 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

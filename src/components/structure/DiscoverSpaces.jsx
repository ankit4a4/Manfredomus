'use client';

import React from 'react';

const DiscoverSpaces = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F9F7F4] to-[#f0ede6] py-28 px-6 md:px-20 text-[#253745]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#597429] to-[#A5886E]">
            Discover our spaces
          </h2>
          <p className="text-xl md:text-2xl text-[#597429] font-medium max-w-2xl mx-auto">
            And get ready for an unforgettable stay
          </p>
        </div>

        <div className="space-y-24">
          {/* Block 1 */}
          <div className="group grid md:grid-cols-2 gap-14 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
              <img
                src="https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Mediterranean Landscape"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <span className="inline-block mb-3 text-lg font-semibold text-[#A5886E] border-b-2 border-[#A5886E] pb-1">
                Manfredomus
              </span>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#253745]/90">
                is our green tourism destination — a refuge of modern design and unparalleled comfort, surrounded by a typically Mediterranean landscape, with olive trees and prickly pears that stand out against the sky. Palm trees add a touch of elegance, while aromatic herbs such as rosemary and lavender enrich the air with their fragrances.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="group grid md:grid-cols-2 gap-14 items-center">
            <div className="md:order-2 relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
              <img
                src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Eco Rooms"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="md:order-1">
              <span className="inline-block mb-3 text-lg font-semibold text-[#597429] border-b-2 border-[#597429] pb-1">
                Eco Rooms
              </span>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#253745]/90">
                Our 7 spacious and welcoming rooms are the result of meticulous attention to detail and a love for eco-friendly materials. Here, wood and iron, expertly crafted by local artisans, blend together to create a unique and sophisticated style. Each room is modular in terms of the type and number of beds and can therefore be adapted to any type of living requirement.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="group grid md:grid-cols-2 gap-14 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
              <img
                src="https://images.pexels.com/photos/161577/mill-old-rural-historically-161577.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Rural Civilization"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <span className="inline-block mb-3 text-lg font-semibold text-[#253745] border-b-2 border-[#253745] pb-1">
                Heritage Space
              </span>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#253745]/90">
                We have also created an exhibition space dedicated to the testimonies of the ancient local rural civilization. In this place, traditions, tools and everyday objects of the past are enhanced, offering a fascinating look at the peasant life that has characterized our territory for centuries. A journey through time to rediscover the cultural and historical roots of our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSpaces;
'use client';

import React from 'react';

const RoomExperienceSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#F9F7F4] to-[#e8e1d5] py-24 px-6 md:px-12 lg:px-24 text-[#253745] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A5886E] via-[#597429] to-[#A5886E] opacity-20"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Your <span className="text-[#A5886E]">Comfort</span>,
                        <br className="md:hidden" /> Our <span className="text-[#597429]">Priority</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#A5886E] to-[#597429] mx-auto mb-8"></div>
                </div>

                {/* Main content with elegant card */}
                <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg mb-20 border border-[#e0d8c8]">
                    <p className="text-lg md:text-xl leading-relaxed md:leading-8 text-[#253745]/90">
                        Whether you are travelling alone, as a couple or in a group, our rooms are the ideal place to relax: distributed between the ground floor and the first floor, some of them, such as our Suite, offer an immersive experience with enchanting views of the Manfredonico Castle, adding to your stay a dive into the history of this region full of culture and charm.
                        <br /><br />
                        So immerse yourself in the beauty of the landscape and let yourself be surprised by a breathtaking panorama.
                        <br /><br />
                        We look forward to welcoming you and making you feel at home.
                    </p>
                </div>

                {/* Features grid - enhanced */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Feature 1 */}
                    <div className="group flex flex-col items-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e0d8c8]">
                        <h3 className="text-xl font-semibold text-[#597429] mb-4">We Are Classified</h3>
                        <div className="mb-5 w-24 h-24 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500">
                            <img
                                src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Sicily Region"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <p className="text-lg">
                            Officially recognized by the <span className="text-[#A5886E] font-semibold">Sicily Region</span>
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group flex flex-col items-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e0d8c8]">
                        <h3 className="text-xl font-semibold text-[#597429] mb-4">We Are Also On</h3>
                        <div className="flex justify-center gap-6 items-center mb-5 px-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png"
                                alt="Booking.com"
                                className="w-28 h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
                                alt="Airbnb"
                                className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                        <p className="text-lg">
                            Book through <span className="text-[#A5886E] font-semibold">Booking.com</span> & <span className="text-[#A5886E] font-semibold">Airbnb</span>
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group flex flex-col items-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e0d8c8]">
                        <h3 className="text-xl font-semibold text-[#597429] mb-4">Our Mattresses Are</h3>
                        <div className="mb-5 w-24 h-24 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500">
                            <img
                                src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Eco Mattress"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <p className="text-lg">
                            Eco-friendly & designed for <span className="text-[#A5886E] font-semibold">restful sleep</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A5886E] via-[#597429] to-[#A5886E] opacity-20"></div>
        </section>
    );
};

export default RoomExperienceSection;
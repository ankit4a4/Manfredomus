import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck, FaLeaf, FaArrowRight } from "react-icons/fa";
import img from "../../assets/about/DS209768-HDR.jpg"
import img2 from "../../assets/about/suite11.jpg"

const SectionTwo = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-[#A5886E]">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4b8f56?auto=format&fit=crop&w=1600&q=80"
                    className="w-full h-full object-cover opacity-60"
                    alt="Eco transformation"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-700 hover:-translate-y-2"
                        data-aos="fade-up"
                    >
                        <img
                            src={img}
                            alt="Eco Home"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-[#0a1c0f] p-4">
                            <p className="text-white/80 text-sm">Sustainable Architecture</p>
                        </div>
                    </div>

                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-700 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <img
                            src={img2}
                            alt="Solar Roof"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-[#0a1c0f] p-4">
                            <p className="text-white/80 text-sm">Renewable Energy Systems</p>
                        </div>
                    </div>
                </div>

                <div
                    className="lg:col-span-3 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl"
                    data-aos="fade-up"
                >
                    <div className="text-[#597429] uppercase tracking-wider font-medium mb-2">
                        A Green Transformation
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#253745] mb-6">
                        From Heritage to Innovation
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Today that place of our childhood has become a welcoming oasis for
                        travelers and tourists seeking an authentic connection with nature
                        and Sicilian history. With respect for the past and an eye to the
                        future, we have renovated our home in an ecological and sustainable
                        way, creating a technologically advanced environment with zero
                        environmental impact.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#597429] rounded-full p-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700">Eco-friendly renovation</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#597429] rounded-full p-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700">Zero environmental impact</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#597429] rounded-full p-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700">Technologically advanced</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#597429] rounded-full p-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700">Preserving Sicilian history</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;

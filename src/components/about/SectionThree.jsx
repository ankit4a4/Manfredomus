import React from 'react'
import img from "../../assets/about/esterno5 (1).jpg"

const SectionThree = () => {
    return (
        <>
            <section className="w-full bg-[#f8f7f5] py-8 md:py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#253745] mb-4">
                            Your Tranquil Escape
                        </h2>
                        <div className="w-20 h-1 bg-[#A5886E] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative" data-aos="fade-up">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
                                <img
                                    src={img}
                                    className="w-full h-full object-cover"
                                    alt="Tranquil countryside"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg w-2/3" data-aos="fade-up" data-aos-delay="300">
                                <h3 className="text-xl font-bold text-[#253745] mb-2">Authentic Sicilian Experience</h3>
                                <p className="text-gray-700">Discover the hidden treasures of Sicily</p>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <h3 className="text-2xl font-semibold text-[#253745] mb-4">
                                Embrace the Sicilian Countryside
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We invite you to take refuge in the tranquility of our countryside,
                                where we will welcome you with every comfort and the embrace of nature
                                will envelop you with its genuine warmth.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Every corner of our structure has been cared for in the smallest details,
                                with the aim of offering you a unique stay experience, far from the usual
                                tourist itineraries.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="bg-[#A5886E] rounded-full p-2 flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Luxurious accommodations</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-[#A5886E] rounded-full p-2 flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Gourmet local cuisine</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-[#A5886E] rounded-full p-2 flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Private nature tours</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-[#A5886E] rounded-full p-2 flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Cultural experiences</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionThree

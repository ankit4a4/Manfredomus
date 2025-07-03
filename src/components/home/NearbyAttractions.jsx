import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../assets/home/tor1.jpeg";
import img2 from "../../assets/home/tor2.jpg";
import img3 from "../../assets/home/tor3.jpg";
import img4 from "../../assets/home/tor4.jpeg";
import img5 from "../../assets/home/tor5.jpg";
import img6 from "../../assets/home/tor6.jpg";

const attractions = [
    { title: "Scala dei Turchi", distance: "59 km", image: img1 },
    { title: "Andromeda Theater", distance: "46 km", image: img2 },
    { title: "Manfredonic Castle", distance: "70 m", image: img3 },
    { title: "Valley of the Temples", distance: "49 km", image: img4 },
    { title: "Sutera", distance: "14 km", image: img5 },
    { title: "Big Bench Mussomeli Fanzarotta", distance: "18 km", image: img6 },
];

const NearbyAttractions = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="md:py-16 py-4 bg-white" id="attractions">


            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2
                    className="text-3xl md:text-5xl font-bold text-[#A5886E] mx-auto mb-4 text-center"
                    data-aos="fade-up"
                >
                    <i>Places worth visiting</i>

                </h2>
                <p
                    className="text-gray-700 text-center max-w-2xl mx-auto mb-12 relative z-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Not only the Castle: the surroundings also offer opportunities to discover and admire unexpected places full of history, culture and nature.
                    <br />
                    <span className="block mt-2 italic text-sm">Click on the images for a taste of what awaits you.</span>
                </p>

                {/* Dynamic Asymmetric Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    {/* Big left card */}
                    <div
                        className="md:col-span-5 h-80 md:h-116 rounded-2xl overflow-hidden relative group shadow-lg"
                        data-aos="fade-up"
                    >
                        <img
                            src={attractions[0].image}
                            alt={attractions[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-1">{attractions[0].title}</h3>
                                <p className="text-gray-200">{attractions[0].distance}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column - top */}
                    <div className="md:col-span-7 grid grid-cols-2 gap-5">
                        <div
                            className="md:h-56 h-30 rounded-2xl overflow-hidden relative group shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img
                                src={attractions[1].image}
                                alt={attractions[1].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                <div>
                                    <h3 className="text-white font-bold mb-1">{attractions[1].title}</h3>
                                    <p className="text-gray-200 text-sm">{attractions[1].distance}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="md:h-56 h-30 rounded-2xl overflow-hidden relative group shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <img
                                src={attractions[2].image}
                                alt={attractions[2].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                <div>
                                    <h3 className="text-white font-bold mb-1">{attractions[2].title}</h3>
                                    <p className="text-gray-200 text-sm">{attractions[2].distance}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right column - bottom */}
                        <div
                            className="md:h-56 h-30 rounded-2xl overflow-hidden relative group shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src={attractions[3].image}
                                alt={attractions[3].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                <div>
                                    <h3 className="text-white font-bold mb-1">{attractions[3].title}</h3>
                                    <p className="text-gray-200 text-sm">{attractions[3].distance}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="md:h-56 h-30 rounded-2xl overflow-hidden relative group shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            <img
                                src={attractions[4].image}
                                alt={attractions[4].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                <div>
                                    <h3 className="text-white font-bold mb-1">{attractions[4].title}</h3>
                                    <p className="text-gray-200 text-sm">{attractions[4].distance}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full width bottom card */}
                    <div
                        className="md:col-span-12 h-50 md:h-80 rounded-2xl overflow-hidden relative group shadow-lg mt-5"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <img
                            src={attractions[5].image}
                            alt={attractions[5].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-1">{attractions[5].title}</h3>
                                <p className="text-gray-200">{attractions[5].distance}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NearbyAttractions;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../assets/home/scaladeiturchi.jpg";
import img2 from "../../assets/home/ValleyoftheTemples.jpg";
import img3 from "../../assets/home/Sicilian Beaches.jpeg";

const attractions = [
    {
        title: "Scala dei Turchi",
        description: "A stunning white limestone cliff on the coast, perfect for sunsets and photography.",
        image: img1,
    },
    {
        title: "Valley of the Temples",
        description: "An extraordinary archaeological site with ancient Greek temples and history.",
        image: img2,
    },
    {
        title: "Sicilian Beaches",
        description: "Relax on warm, golden beaches surrounded by the Mediterranean’s blue waters.",
        image: img3,
    },
];

const NearbyAttractions = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-20 bg-[#A5886E]" id="attractions">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4" data-aos="fade-up">
                    Nearby Attractions
                </h2>
                <p className="text-white/90 text-center max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    Explore nearby destinations like Scala dei Turchi, Valley of the Temples, and beautiful Sicilian beaches — all within short driving distance.
                </p>

                <div className="grid gap-10 md:grid-cols-3">
                    {attractions.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-[#597429] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearbyAttractions;

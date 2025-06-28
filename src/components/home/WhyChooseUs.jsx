import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Leaf, Wifi, AirVent } from 'lucide-react';

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section className="py-20 bg-[#A5886E]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
                    Why Choose Us
                </h2>
                <p
                    className="text-white text-opacity-90 mb-12 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    At Manfredomus, we blend sustainability, comfort, and authentic Sicilian charm—crafted to make every stay feel luxurious, eco-minded, and deeply personal.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 animate-float text-[#597429]">
                            <Leaf size={32} />
                            <h3 className="text-xl font-semibold">Eco‑Friendly Design</h3>
                        </div>
                        <ul className="text-left space-y-2 pl-4 list-disc">
                            <li>Solar panels & green energy</li>
                            <li>Rainwater recovery & eco systems</li>
                            <li>Thermal insulation & natural stone walls</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 animate-float text-[#597429]">
                            <AirVent size={32} />
                            <h3 className="text-xl font-semibold">Superior Comfort</h3>
                        </div>
                        <ul className="text-left space-y-2 pl-4 list-disc">
                            <li>Air conditioning & smart climate control</li>
                            <li>Egyptian cotton & pillow menu</li>
                            <li>Soundproof rooms & blackout curtains</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 animate-float text-[#597429]">
                            <Wifi size={32} />
                            <h3 className="text-xl font-semibold">Convenient Services</h3>
                        </div>
                        <ul className="text-left space-y-2 pl-4 list-disc">
                            <li>High-speed Wi‑Fi & smart TVs</li>
                            <li>Daily housekeeping & pet-friendly</li>
                            <li>Buffet breakfast, EV charging, bikes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

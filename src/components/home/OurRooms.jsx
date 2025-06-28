import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../assets/home/room3.jpg";
import img2 from "../../assets/home/room2.jpg";
import img3 from "../../assets/home/room1.jpg";
import {
    BedDouble,
    ShowerHead,
    Wifi,
    Monitor,
    Mountain,
    Utensils,
} from 'lucide-react';

const roomData = [
    {
        title: 'Elegant & Calm',
        description: 'A cozy space with warm wooden finishes and soft lighting, ideal for peaceful rest. Designed with eco-materials and local artwork.',
        features: ['Double bed', 'Private bathroom', 'Natural stone walls'],
        image: img1,
    },
    {
        title: 'Rustic Charm',
        description: 'This room offers a rural Sicilian vibe with exposed beams and handcrafted décor. It opens up to a lovely countryside view.',
        features: ['Queen bed', 'Countryside view', 'Wi-Fi'],
        image: img2,
    },
    {
        title: 'Family Friendly',
        description: 'Perfect for families or longer stays, with spacious interiors and functional yet elegant design. Eco-comfort guaranteed.',
        features: ['1 Beds', 'Smart TV', 'Kitchen corner'],
        image: img3,
    },
];

const OurRooms = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-20 bg-[#F9F6F4]" id="rooms">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2
                    className="text-3xl md:text-5xl font-bold text-[#597429] text-center mb-4"
                    data-aos="fade-up"
                >
                    Our Rooms
                </h2>
                <p
                    className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Discover a blend of traditional charm and modern comfort in each of our seven uniquely designed rooms.
                </p>

                <div className="space-y-14">
                    {roomData.map((room, i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row items-center gap-8 bg-white p-4 md:p-6 rounded-3xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            {/* Image */}
                            <div className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-md">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-[240px] md:h-[300px] object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 w-full">
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#A5886E] mb-3">
                                    {room.title}
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed text-[16px]">
                                    {room.description}
                                </p>

                                <ul className="space-y-2">
                                    {room.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-gray-700 gap-3 text-sm md:text-base"
                                        >
                                            {feature.toLowerCase().includes('bed') && <BedDouble size={18} className="text-[#A5886E]" />}
                                            {feature.toLowerCase().includes('bath') && <ShowerHead size={18} className="text-[#A5886E]" />}
                                            {feature.toLowerCase().includes('wi-fi') && <Wifi size={18} className="text-[#A5886E]" />}
                                            {feature.toLowerCase().includes('tv') && <Monitor size={18} className="text-[#A5886E]" />}
                                            {feature.toLowerCase().includes('kitchen') && <Utensils size={18} className="text-[#A5886E]" />}
                                            {feature.toLowerCase().includes('view') && <Mountain size={18} className="text-[#A5886E]" />}
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurRooms;

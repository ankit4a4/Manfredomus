import React from 'react'

const EcoFriendly = () => {
    
    const greenFeatures = [
        {
            title: "Green Hospitality",
            description: "Our eco-sustainable structure is equipped with innovative technologies that make it self-sufficient and zero impact.",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
        },
        {
            title: "Photovoltaic and Solar Thermal System",
            description: "Sicilian solar energy powers the facility, producing clean, renewable electricity.",
            image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80"
        },
        {
            title: "Rainwater Recovery System",
            description: "We collect every drop of rainwater from the roof, transforming it into a sustainable resource for non-potable uses.",
            image: "https://images.unsplash.com/photo-1623947156793-7b9a0d0f9c4e?auto=format&fit=crop&q=80"
        },
        {
            title: "Air Conditioning",
            description: "Smart-climate rooms, designed for optimal thermal comfort and remote temperature management.",
            image: "https://images.unsplash.com/photo-1579783483450-7a5dc0a0b9a1?auto=format&fit=crop&q=80"
        },
        {
            title: "Air Purification System (VMC)",
            description: "We guarantee a continuous exchange of purified air, monitoring humidity and air quality.",
            image: "https://images.unsplash.com/photo-1581578021434-8d56e2cbf45a?auto=format&fit=crop&q=80"
        },
        {
            title: "22kW Charging Station",
            description: "Recharge with green energy with our electric charging station.",
            image: "https://images.unsplash.com/photo-1583123810408-23e7d5a446c0?auto=format&fit=crop&q=80"
        },
        {
            title: "Bike Rental",
            description: "Explore the surroundings in a sustainable and healthy way.",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80"
        }
    ];
    return (
        <>
            <section className="py-16 px-4 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        Our Eco-Friendly Initiatives
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {greenFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                                    <p className="text-black/70">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EcoFriendly

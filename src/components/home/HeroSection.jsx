import React from 'react';
import bgImage from '../../assets/home/herosectionImage.jpg';

const HeroSection = () => {
    return (
        <section
            className="h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-[#0000005e]" />
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#fff]">
                        Welcome to Manfredomus
                    </h1>
                    <p className="text-lg md:text-xl text-[#f3f3f3]">
                        An eco-conscious and comfortable residence in the heart of Sicily.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

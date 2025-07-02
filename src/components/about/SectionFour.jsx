import React from 'react'

const SectionFour = () => {
    return (
        <>
            <section className="relative w-full py-28 px-6 flex items-center justify-center bg-[#253745]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=80"
                        className="w-full h-full object-cover opacity-20"
                        alt="Sicilian landscape"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Discover Authentic Sicily With Us
                    </h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Explore the hidden treasures of an authentic Sicily, still unexplored and full of charm.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-[#ADBE35] text-white font-medium rounded-lg cursor-pointer transition-colors duration-300">
                            Book Your Stay
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg cursor-pointer hover:bg-white/10 transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>

                    <p className="mt-12 text-amber-200 text-lg italic">
                        We look forward to welcoming you to our family home.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SectionFour

import React from 'react'

const StructureHero = () => {
    return (
        <>
            <section
                className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80')" }}
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-[#00000093] "></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Structure
                    </h1>
                </div>
            </section>
        </>
    )
}

export default StructureHero

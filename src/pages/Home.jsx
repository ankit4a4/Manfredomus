import React from 'react'
import HeroSection from '../components/home/HeroSection'
import HistorySection from '../components/home/HistorySection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import NearbyAttractions from '../components/home/NearbyAttractions'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import EveryComfort from '../components/home/EveryComfort'
import UnmissableEvents from '../components/home/UnmissableEvents'

const Home = () => {
    return (
        <>
            <HeroSection />
            <HistorySection />
            <WhyChooseUs />
            <EveryComfort />
            {/* <OurRooms /> */}
            <NearbyAttractions />
            <UnmissableEvents />
            <TestimonialsPreview />
        </>
    )
}

export default Home

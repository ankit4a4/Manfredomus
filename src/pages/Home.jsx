import React from 'react'
import HeroSection from '../components/home/HeroSection'
import HistorySection from '../components/home/HistorySection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import OurRooms from '../components/home/OurRooms'
import NearbyAttractions from '../components/home/NearbyAttractions'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import EveryComfort from '../components/home/EveryComfort'
import Unmissableevents from '../components/home/Unmissableevents'

const Home = () => {
    return (
        <>
            <HeroSection />
            <HistorySection />
            <WhyChooseUs />
            <EveryComfort />
            <OurRooms />
            <NearbyAttractions />
            <Unmissableevents />
            <TestimonialsPreview />
        </>
    )
}

export default Home

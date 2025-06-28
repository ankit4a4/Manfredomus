import React from 'react'
import HeroSection from '../components/home/HeroSection'
import HistorySection from '../components/home/HistorySection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import OurRooms from '../components/home/OurRooms'
import NearbyAttractions from '../components/home/NearbyAttractions'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import BookingCTA from '../components/home/BookingCTA'

const Home = () => {
    return (
        <>
            <HeroSection />
            <HistorySection />
            <WhyChooseUs />
            <OurRooms />
            <NearbyAttractions />
            <TestimonialsPreview />
            <BookingCTA />
        </>
    )
}

export default Home

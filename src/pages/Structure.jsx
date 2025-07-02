'use client';

import React from 'react';
import {
    FiMapPin,
    FiStar,
    FiWifi,
} from 'react-icons/fi';
import { FaSwimmingPool, FaParking } from 'react-icons/fa';
import StructureHero from '../components/structure/StructureHero';
import StructureSlider from '../components/structure/StructureSlider';
import DiscoverSpaces from '../components/structure/DiscoverSpaces';
import RoomExperienceSection from '../components/structure/RoomExperienceSection';

const Structure = () => {
    return (
        <>
            <StructureHero />
            <DiscoverSpaces />
            <StructureSlider />
            <RoomExperienceSection />
        </>
    );
};

export default Structure;

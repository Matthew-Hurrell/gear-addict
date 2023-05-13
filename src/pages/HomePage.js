import React, { useState } from 'react';
import RigsList from './rigs/RigsList';
import HomeHero from '../components/HomeHero';
import IntroHome from '../components/IntroHome';
import HowToUse from '../components/HowToUse';
import Seperator from '../components/Seperator';
import IconSeperator from '../components/IconSeperator';

const HomePage = () => {

  return (
    <div>

        {/* Hero */}
        <HomeHero />

        {/* Seperator */}
        <Seperator />

        {/* Introduction */}
        <IntroHome />

        {/* Icon Seperator */}
        <IconSeperator />

        {/* How To Use Section */}
        <HowToUse />

        {/* Icon Seperator */}
        <IconSeperator />

        {/* Hottest Rigs */}
        <RigsList
            message="No results found! Adjust your search"
            filter={`&ordering=likes__created_at&?limit=4`}
            title="Hottest Rigs"
            slice_num={4}
        />

    </div>
  )
}

export default HomePage
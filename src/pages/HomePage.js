import React, { useState } from 'react';
import RigsPage from './rigs/RigsPage';
import HomeHero from '../components/HomeHero';
import SearchBar from '../components/SearchBar';
import IntroHome from '../components/IntroHome';
import HowToUse from '../components/HowToUse';
import Seperator from '../components/Seperator';
import IconSeperator from '../components/IconSeperator';

const HomePage = () => {

  const [query, setQuery] = useState("");

  return (
    <div>

        {/* Hero */}
        <HomeHero />

        {/* Seperator */}
        <Seperator />

        {/* Search Bar */}
        <SearchBar query={query} setQuery={setQuery} />

        {/* Introduction */}
        <IntroHome />

        {/* Icon Seperator */}
        <IconSeperator />

        {/* How To Use Section */}
        <HowToUse />

        {/* Icon Seperator */}
        <IconSeperator />

        {/* Hottest Rigs */}
        <RigsPage 
            message="No results found! Adjust your search"
            filter={`&ordering=likes__created_at&`}
            title="Hottest Rigs"
            query={query}
        />

    </div>
  )
}

export default HomePage
import React from 'react'
import RigsPage from './rigs/RigsPage'
import HomeHero from '../components/HomeHero'
import SearchBar from '../components/SearchBar'
import IntroHome from '../components/IntroHome'
import HowToUse from '../components/HowToUse'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <SearchBar />
        <IntroHome />
        <HowToUse />
        <RigsPage 
            message="No results found! Adjust your search"
            filter={`&ordering=likes__created_at&`}
            title="Hottest Rigs"
        />
    </div>
  )
}

export default HomePage
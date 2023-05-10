import React from 'react'
import RigsPage from './rigs/RigsPage'
import HomeHero from '../components/HomeHero'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <RigsPage 
            message="No results found! Adjust your search"
            filter={`&ordering=likes__created_at&`}
            title="Hottest Rigs"
        />
    </div>
  )
}

export default HomePage
import React from 'react';
import RigsPage from './RigsPage';
import Hero from '../../components/Hero';

const LatestRigs = () => {
  return (
    <div>
        <Hero title="Latest Rigs" />
        <RigsPage 
            message="No results found! Adjust your search"
        />
    </div>
  )
}

export default LatestRigs
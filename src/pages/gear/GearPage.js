import React, { useState } from 'react';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar';
import Seperator from '../../components/Seperator';
import GearList from './GearList';

const GearPage = ({filter}) => {

    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="My Gear" />

            {/* Seperator */}
            <Seperator />

            {/* SearchBar */}
            <SearchBar query={query} setQuery={setQuery} gear />

            {/* GearList */}
            <GearList  query={query} filter={filter} message="No results. Adjust search or add a rig to view it here" />
            
        </div>
    )
}

export default GearPage
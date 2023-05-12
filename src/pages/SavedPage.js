import React, { useState } from 'react';
import RigsPage from '../pages/rigs/RigsPage';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Seperator from '../components/Seperator';

const SavedPage = ({profile_id}) => {
    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="Saved Rigs" />

            {/* Seperator */}
            <Seperator />

            {/* SearchBar */}
            <SearchBar query={query} setQuery={setQuery} /> 

            {/* RigsPage */}
            <RigsPage 
                message="No results found! Adjust your search or save a rig to store them here" 
                filter={`stars__owner__profile=${profile_id}&`}
                query={query}
            />
        </div>
    )
}

export default SavedPage
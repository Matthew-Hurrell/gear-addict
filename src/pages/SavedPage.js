import React, { useState } from 'react';
import RigsList from '../pages/rigs/RigsList';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Seperator from '../components/Seperator';
import { useRedirect } from '../hooks/useRedirect';

const SavedPage = ({profile_id}) => {
    useRedirect('loggedOut');
    
    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="Saved Rigs" />

            {/* Seperator */}
            <Seperator />

            {/* SearchBar */}
            <SearchBar query={query} setQuery={setQuery} /> 

            {/* RigsList */}
            <RigsList 
                message="No results found! Adjust your search or save a rig to store them here" 
                filter={`stars__owner__profile=${profile_id}&`}
                query={query}
                saved
            />
        </div>
    )
}

export default SavedPage
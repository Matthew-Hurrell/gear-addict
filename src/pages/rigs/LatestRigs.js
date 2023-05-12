import React, { useState } from 'react';
import RigsPage from './RigsPage';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar';
import Seperator from '../../components/Seperator';

const LatestRigs = () => {
    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="Latest Rigs" />

            {/* Seperator */}
            <Seperator />

            {/* SearchBar */}
            <SearchBar query={query} setQuery={setQuery} />

            {/* RigsPage */}
            <RigsPage 
                message="No results found! Adjust your search"
                query={query}
            />
        </div>
    )
}

export default LatestRigs
import React, { useState } from 'react';
import RigsPage from '../pages/rigs/RigsPage';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Seperator from '../components/Seperator';

const FeedPage = ({profile_id}) => {
    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="Feed" />

            {/* Seperator */}
            <Seperator />

            {/* SearchBar */}
            <SearchBar query={query} setQuery={setQuery} />

            {/* RigsPage */}
            <RigsPage 
                message="No results found! Adjust your search or become a fan of another user to see their rigs here" 
                filter={`owner__idolguy__fan__profile=${profile_id}&`}
                query={query}
            />
        </div>
    )
}

export default FeedPage
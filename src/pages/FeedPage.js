import React, { useState } from 'react';
import RigsList from '../pages/rigs/RigsList';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Seperator from '../components/Seperator';
import { useRedirect } from '../hooks/useRedirect';

const FeedPage = ({ profile_id }) => {
    useRedirect('loggedOut');

    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="Feed" />

            {/* Seperator */}
            <Seperator />

            {/* SearchBar */}
            <SearchBar query={query} setQuery={setQuery} />

            {/* RigsList */}
            <RigsList
                message="No results found! Adjust your search or become a fan of another user to see their rigs here"
                filter={`owner__idolguy__fan__profile=${profile_id}&`}
                query={query}
            />
        </div>
    )
}

export default FeedPage
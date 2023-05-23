import React, { useState } from 'react';
import Hero from '../components/Hero';
import Seperator from '../components/Seperator';
import SearchBar from '../components/SearchBar';
import RigsList from './rigs/RigsList';
import { useRedirect } from '../hooks/useRedirect';

const RigsPage = ({ filter }) => {
    useRedirect('loggedOut');

    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="My Rigs" />

            {/* Seperator */}
            <Seperator />

            {/* Search Bar */}
            <SearchBar query={query} setQuery={setQuery} />

            {/* Rigs List */}
            <RigsList query={query} filter={filter} message="No results. Adjust search or add a rig to view it here" />

        </div>
    )
}

export default RigsPage
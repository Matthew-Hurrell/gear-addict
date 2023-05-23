import React, { useState } from 'react';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar';
import Seperator from '../../components/Seperator';
import GearList from './GearList';
import { useRedirect } from '../../hooks/useRedirect';

const GearPage = ({ filter }) => {
    useRedirect('loggedOut');

    const [query, setQuery] = useState("");

    return (
        <div>

            {/* Hero */}
            <Hero title="My Gear" />

            {/* Seperator */}
            <Seperator />

            {/* Search Bar */}
            <SearchBar query={query} setQuery={setQuery} gear />

            {/* Gear List */}
            <GearList query={query} filter={filter} message="No results. Adjust search or add gear to view it here" />

        </div>
    )
}

export default GearPage
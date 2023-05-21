import React, { useEffect, useState } from 'react';

import Asset from "../../components/Asset";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from '../../api/axiosDefaults';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Seperator from '../../components/Seperator';
import SearchBar from '../../components/SearchBar';
import RigsList from '../rigs/RigsList';

const ProfilePage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const [query, setQuery] = useState("");
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setHasLoaded(true);
                console.log(pageProfile);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    const mainProfileHeader = (
        <>
            {/* Header Image */}
            <section className='relative h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 2xl:h-96 flex items-end px-5'>
                <div className='z-0 absolute h-full w-full top-0 left-0'>
                    <img src={profile?.header_image} className='object-center object-cover w-full h-full grayscale brightness-50' alt={`${profile?.owner} profile header`} />
                </div>
                <div className='container mx-auto relative z-10'>
                    <div className='absolute bottom-[-48px] md:bottom-[-64px] lg:bottom-[-80px] xl:bottom-[-96px] w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 xl:w-48 xl:h-48 p-1 rounded-full bg-amber-400'>
                        <img src={profile?.image} className='h-full w-full object-center object-cover rounded-full' alt={`${profile?.owner} profile image`} />
                    </div>
                </div>
            </section>

            {/* Seperator */}
            <Seperator />

            {/* Profile Details */}
            <section className='bg-white px-5 py-12 lg:py-24 relative'>
                <div className='text-left py-3 lg:px-5 container mx-auto flex flex-col lg:flex-row gap-12 xl:gap-28'>
                    <div className='w-full lg:w-9/12'>
                        <div className='flex flex-col lg:flex-row mb-3 lg:mb-0 justify-between gap-3 md:gap-5 items-center'>
                            <div className='flex items-center gap-7'>
                                <h1 className='text-4xl lg:text-5xl lg:mb-5'>{profile?.owner}</h1>
                                {currentUser && !is_owner && (
                                    profile?.fan_id ? (
                                        <button 
                                            className='hover:scale-105 mb-5 shadow-md text-zinc-800 h-10 w-10 flex justify-center items-center border border-zinc-800 rounded-full'
                                            onClick={() => {}}
                                        >
                                            <i className="fa-solid fa-hand-horns text-2xl"></i>
                                        </button>
                                    ) : (
                                        <button
                                            className='hover:scale-105 mb-5 shadow-md text-zinc-800 h-10 w-10 flex justify-center items-center border border-zinc-800 rounded-full'
                                            onClick={() => {}}
                                        >
                                            <i className="fa-light fa-hand-horns text-2xl"></i>
                                        </button>
                                    )
                                )}
                            </div>
                            <div className='flex gap-5 mb-5'>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Fans:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.fans_count}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Idols:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.idols_count}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Rigs:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.rigs_count}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Gear:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.gear_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg lg:text-xl mb-5'>{profile?.bio}</p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 text-lg lg:text-xl'>
                                {profile?.location && <p className='mb-1.5'><i className="fa-sharp fa-solid fa-location-dot text-2xl text-black mr-1"></i>{profile?.location}</p>}
                                {(profile?.instrument_1 || profile?.instrument_2 || profile?.instrument_3) && (
                                    <p className='mb-1.5'><i className="fa-solid fa-saxophone-fire text-2xl text-black mr-1"></i>{profile?.instrument_1 ? profile?.instrument_1 + ', ' : ''}{profile?.instrument_2 ? profile?.instrument_2 + ', ' : ''}{profile?.instrument_3 ? profile?.instrument_3 : ''}</p>
                                )}
                                {(profile?.genre_1 || profile?.genre_2 || profile?.genre_3) && (
                                    <p className='mb-1.5'><i className="fa-solid fa-music text-2xl text-black mr-1"></i>{profile?.genre_1 ? profile?.genre_1 + ', ' : ''}{profile?.genre_2 ? profile?.genre_2 + ', ' : ''}{profile?.genre_3 ? profile?.genre_3 : ''}</p>
                                )}
                                {profile?.expertise && <p className='mb-1.5'><i className="fa-solid fa-briefcase text-2xl text-black mr-1"></i>{profile?.expertise}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='w-3/12 hidden lg:block'>
                        <PopularProfiles />
                    </div>
                </div>

            </section>
        </>
    );

    const mainProfileRigs = (
        <>
            <SearchBar 
                query={query} 
                setQuery={setQuery} 
            />
            <RigsList 
                message="No results found! Adjust your search or this profile has no rigs"
                query={query}
                filter={`owner__profile=${id}&`}
                title={is_owner ? ('Rigs') : `${profile?.owner}'s Rigs`}
            />
        </>
    );

    return (
        <div>
            {hasLoaded ? (
                <>
                    {mainProfileHeader}
                    {mainProfileRigs}
                </>
            ) : (
                <section className='container mx-auto flex items-center justify-center px-5 py-12 lg:py-24'>
                    <Asset spinner />
                </section>
            )}
        </div>
    )
}

export default ProfilePage
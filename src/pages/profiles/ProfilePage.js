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
import { ProfileEditDropdown } from '../../components/DropdownMenu';

const ProfilePage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData, handleFan, handleUnfan } = useSetProfileData();
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
            } catch (err) {
                // console.log(err);
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
                        <img src={profile?.image} className='h-full w-full object-center object-cover rounded-full' alt={`${profile?.owner} profile`} />
                    </div>
                </div>
            </section>

            {/* Seperator */}
            <Seperator />

            {/* Profile Details */}
            <section className='bg-white px-5 py-12 lg:py-24 relative'>

                {/* Profile Edit Menu */}
                {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}

                {/* Profile Details Content */}
                <div className='text-left py-3 lg:px-5 container mx-auto flex flex-col lg:flex-row gap-12 xl:gap-28'>
                    <div className='w-full lg:w-9/12'>
                        <div className='flex flex-col lg:flex-row mb-3 lg:mb-0 justify-between gap-3 md:gap-5 items-center'>
                            <div className='flex items-center gap-7'>
                                <div className='flex items-end gap-5'>

                                    {/* Owner */}
                                    <h1 className='text-4xl lg:text-5xl lg:mb-5'>{profile?.owner}</h1>

                                    {/* Alternative Name */}
                                    {profile?.name && <p className='mb-[3px] lg:mb-6 text-lg text-gray-700'>{`(${profile?.name})`}</p>}
                                </div>
                                {currentUser && !is_owner && (
                                    profile?.fan_id ? (

                                        // Unfan Button
                                        <button
                                            aria-label='Unfan'
                                            className='hover:scale-105 mb-5 shadow-md text-zinc-800 h-10 w-10 flex justify-center items-center border border-zinc-800 rounded-full'
                                            onClick={() => handleUnfan(profile)}
                                        >
                                            <i className="fa-solid fa-hand-horns text-2xl"></i>
                                        </button>
                                    ) : (

                                        // Fan Button
                                        <button
                                            aria-label='Fan'
                                            className='hover:scale-105 mb-5 shadow-md text-zinc-800 h-10 w-10 flex justify-center items-center border border-zinc-800 rounded-full'
                                            onClick={() => handleFan(profile)}
                                        >
                                            <i className="fa-light fa-hand-horns text-2xl"></i>
                                        </button>
                                    )
                                )}
                            </div>
                            <div className='flex gap-5 mb-5'>

                                {/* Fans Count */}
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Fans:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.fans_count}</p>
                                    </div>
                                </div>

                                {/* Idols Count */}
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Idols:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.idols_count}</p>
                                    </div>
                                </div>

                                {/* Rigs Count */}
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Rigs:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.rigs_count}</p>
                                    </div>
                                </div>

                                {/* Gear Count */}
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl'>Gear:</p>
                                    <div className='flex items-center justify-center rounded-full bg-amber-300 h-10 w-10'>
                                        <p className='text-black text-lg'>{profile?.gear_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            {/* Bio */}
                            <p className='text-lg lg:text-xl mb-5'>{profile?.bio}</p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-2 text-lg lg:text-xl'>

                                {/* Location */}
                                {profile?.location && <p className='mb-1.5'><i className="fa-sharp fa-solid fa-location-dot text-2xl text-zinc-800 mr-5"></i>{profile?.location}</p>}
                                
                                {/* Instruments */}
                                {(profile?.instrument_1 || profile?.instrument_2 || profile?.instrument_3) && (
                                    <p className='mb-1.5'><i className="fa-solid fa-saxophone-fire text-2xl text-zinc-800 mr-2"></i>{profile?.instrument_1 ? profile?.instrument_1 : ''}{profile?.instrument_2 ? ', ' + profile?.instrument_2 : ''}{profile?.instrument_3 ? ', ' + profile?.instrument_3 : ''}</p>
                                )}

                                {/* Genres */}
                                {(profile?.genre_1 || profile?.genre_2 || profile?.genre_3) && (
                                    <p className='mb-1.5'><i className="fa-solid fa-music text-2xl text-zinc-800 mr-[17px]"></i>{profile?.genre_1 ? profile?.genre_1 : ''}{profile?.genre_2 ? ', ' + profile?.genre_2 : ''}{profile?.genre_3 ? ', ' + profile?.genre_3 : ''}</p>
                                )}

                                {/* Expertise */}
                                {profile?.expertise && <p className='mb-1.5'><i className="fa-solid fa-briefcase text-2xl text-zinc-800 mr-[18px]"></i>{profile?.expertise}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Popular Profiles */}
                    <div className='w-3/12 hidden lg:block'>
                        <PopularProfiles />
                    </div>
                </div>
            </section>
        </>
    );

    // Main Profile Rigs
    const mainProfileRigs = (
        <>

            {/* Search Bar */}
            <SearchBar
                query={query}
                setQuery={setQuery}
            />

            {/* RigsList */}
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
import React, { useEffect, useState } from 'react';

import Asset from "../../components/Asset";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from '../../api/axiosDefaults';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Seperator from '../../components/Seperator';

const ProfilePage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;

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
            <Seperator />
            <section className='bg-slate-100 px-5 py-12 lg:py-24 relative'>
                <div className='text-left py-3 px-5 container mx-auto'>
                    <h1 className='text-5xl mb-5'>{profile?.owner}</h1>
                    <div className='max-w-4xl'>
                        <p className='text-xl mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className='grid grid-cols-2 text-xl'>
                            {profile?.location && <p><i className="fa-sharp fa-solid fa-location-dot text-2xl"></i>{profile?.location}</p>}
                            {/* {profile?.} */}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );

    const mainProfileRigs = (
        <section>
            <div>
                RIGS
            </div>
        </section>
    );

    return (
        <div>
            {/* <PopularProfiles /> */}
            {hasLoaded ? (
                <>
                    {mainProfileHeader}
                    {mainProfileRigs}
                </>
            ) : (
                <Asset spinner />
            )}
        </div>
    )
}

export default ProfilePage
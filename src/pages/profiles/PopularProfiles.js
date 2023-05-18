import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });
    const { popularProfiles } = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(
                    '/profiles/?ordering=-fans_count'
                );
                setProfileData(prevState => ({
                    ...prevState,
                    popularProfiles: data,
                }));
            } catch(err) {
                console.log(err);
            }
        };

        handleMount();
    }, [currentUser]);

    return (
        <section className='container'>
            {popularProfiles.results.length ? (
              <>
                <p>Most popular profiles</p>
                {popularProfiles.results.slice(0, 4).map((profile) => (
                    <p key={profile.id}>{profile.owner}</p>
                ))}
              </>  
            ) : (
                <Asset spinner />
            )}
        </section>
    );
};

export default PopularProfiles
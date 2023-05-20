import React from 'react';
import Asset from '../../components/Asset';
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = () => {
    const { popularProfiles } = useProfileData();

    return (
        <section className='container'>
            {popularProfiles.results.length ? (
              <>
                <p>Most popular profiles</p>
                {popularProfiles.results.slice(0, 4).map((profile) => (
                    <Profile key={profile.id} profile={profile} />
                ))}
              </>  
            ) : (
                <Asset spinner />
            )}
        </section>
    );
};

export default PopularProfiles
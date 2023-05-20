import React from 'react';
import Asset from '../../components/Asset';
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = () => {
    const { popularProfiles } = useProfileData();

    return (
        <div>
            {popularProfiles.results.length ? (
              <>
                <h3 className='text-2xl mb-5'>Most popular profiles</h3>
                <div className='flex flex-col gap-3'>
                    {popularProfiles.results.slice(0, 4).map((profile) => (
                        <Profile key={profile.id} profile={profile} />
                    ))}
                </div>
              </>  
            ) : (
                <Asset spinner />
            )}
        </div>
    );
};

export default PopularProfiles
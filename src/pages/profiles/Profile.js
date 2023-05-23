import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useSetProfileData } from '../../contexts/ProfileDataContext';

const Profile = ({ profile }) => {
    const { id, fan_id, image, owner } = profile;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const { handleFan, handleUnfan } = useSetProfileData();

    return (
        <div className='flex items-center justify-between'>
            <Link className='flex flex-col lg:flex-row items-center gap-1.5' to={`/profiles/${id}`}>

                {/* Avatar */}
                <Avatar src={image} />

                {/* Owner */}
                <p>{owner}</p>
            </Link>
            {currentUser && !is_owner && (
                fan_id ? (

                    // Unfan Button
                    <button
                        onClick={() => handleUnfan(profile)}
                        className='hover:scale-105 shadow-md text-zinc-800 h-10 w-10 flex justify-center items-center border border-zinc-800 rounded-full'
                    >
                        <i className="fa-solid fa-hand-horns text-2xl"></i>
                    </button>
                ) : (

                    // Fan Button
                    <button
                        onClick={() => handleFan(profile)}
                        className='hover:scale-105 shadow-md text-zinc-800 h-10 w-10 flex justify-center items-center border border-zinc-800 rounded-full'
                    >
                        <i className="fa-light fa-hand-horns text-2xl"></i>
                    </button>
                )
            )}
        </div>
    )
}

export default Profile
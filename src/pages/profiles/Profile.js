import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';

const Profile = ({profile}) => {
    const {id, fan_id, image, owner} = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div>
            <Link className='flex flex-col lg:flex-row' to={`/profiles/${id}`}>
                <Avatar src={image} />
                <p>{owner}</p>
                {currentUser && !is_owner && (
                    fan_id ? (
                        <button
                            onClick={() => {}}
                        >
                            Unfan
                        </button>
                    ) : (
                        <button
                            onClick={() => {}}
                        >
                            Fan
                        </button>
                    )
                )}
            </Link>
        </div>
    )
}

export default Profile
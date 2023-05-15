import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import DropdownMenu from '../../components/DropdownMenu';

const Comment = (props) => {
    const {
        owner,
        content,
        profile_image,
        updated_at,
        profile_id,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div className='py-5'>
            <article className='flex gap-10 items-center'>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <div className='w-full relative'>
                    <div className='flex flex-col lg:flex-row items-start lg:gap-5 lg:items-center justify-center lg:justify-start w-full mb-2'>
                        <h4 className='text-lg lg:text-xl'>{owner}</h4>
                        <p className='text-sm lg:text-base text-gray-600'>{updated_at}</p>
                        {is_owner && (
                            <DropdownMenu handleEdit={() => {}} handleDelete={() => {}} />
                        )}
                    </div>
                    <p className='text-left text-base lg:text-lg'>
                        {content}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Comment
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';

const Comment = (props) => {
    const {
        owner,
        content,
        profile_image,
        updated_at,
        profile_id,
    } = props;

    return (
        <div className='py-5'>
            <article className='flex gap-10 items-center'>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <div className='w-full'>
                    <div className='flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between w-full mb-2'>
                        <h4 className='text-lg lg:text-xl mr-10'>{owner}</h4>
                        <p className='text-sm lg:text-base text-gray-600'>{updated_at}</p>
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
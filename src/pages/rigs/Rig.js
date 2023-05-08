import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Rig = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        likes_count,
        like_id,
        stars_count,
        star_id,
        name,
        updated_at,
        attribute_1,
        attribute_2,
        budget,
        category, 
        comments_count,
        description,
        featured_image,
        image_2,
        image_3,
        image_4,
        gear_list,
        genre_1,
        genre_2,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div>
            <section className='bg-slate-100 px-5 py-12 lg:py-24'>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2.5'>
                    <div className='col-span-2 h-[600px]'>
                        <img src={featured_image} className='h-full w-full object-center object-cover' />
                    </div>
                    <div className='h-[550px] flex flex-col gap-2.5'>
                        <div className='w-full h-[295px]'>
                            <img src={image_2} className='h-full w-full object-center object-cover'></img>
                        </div>
                        <div className='w-full h-[295px]'>
                            <img src={image_3} className='h-full w-full object-center object-cover'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white px-5 py-12 lg:py-24'>

            </section>

        </div>
    )
}

export default Rig
import React, { useState } from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import FsLightbox from "fslightbox-react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Seperator from '../../components/Seperator';

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
    const [toggler, setToggler] = useState(false);

    return (
        <div>

            {/* Rig Gallery */}
            <section className='bg-slate-100 px-5 py-12 lg:py-24'>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2.5'>

                    {/* Attributes */}
                    <div className='flex gap-3 flex-wrap md:hidden'>
                        {attribute_1 && <p className='bg-amber-500 text-white px-2 py-1 text-lg'>{attribute_1}</p>}
                        {attribute_2 && <p className='bg-amber-500 text-white px-2 py-1 text-lg'>{attribute_2}</p>}
                        {genre_1 && <p className='bg-green-700 text-white px-2 py-1 text-lg'>{genre_1}</p>}
                        {genre_2 && <p className='bg-green-700 text-white px-2 py-1 text-lg'>{genre_2}</p>}
                        {budget && <p className='bg-red-700 text-white px-2 py-1 text-lg'>{budget}</p>}
                    </div>

                    {/* Image */}
                    <div className='lg:col-span-2 h-80 sm:h-96 md:h-[600px] w-full relative'>
                        <img src={featured_image} className='h-full w-full object-center object-cover' />
                        <div className='absolute h-10 w-10 sm:h-14 sm:w-14 bottom-1 sm:bottom-2.5 left-12 sm:left-14'>
                            <Link className="flex items-center justify-center" to={`/profiles/${profile_id}`}>
                                <img src={profile_image} className='h-full w-full object-center object-cover rounded-full relative z-10' />
                                <p className='bg-zinc-800 text-white ml-[-10px] pl-4 py-1 pr-2 text-base sm:text-lg relative z-0'>@{owner}</p>
                            </Link>
                        </div>
                        <div className='absolute top-2.5 left-3 gap-5 hidden md:flex'>
                            {attribute_1 && <p className='bg-amber-500 text-white px-2 py-1 text-xl'>{attribute_1}</p>}
                            {attribute_2 && <p className='bg-amber-500 text-white px-2 py-1 text-xl'>{attribute_2}</p>}
                            {genre_1 && <p className='bg-green-700 text-white px-2 py-1 text-xl'>{genre_1}</p>}
                            {genre_2 && <p className='bg-green-700 text-white px-2 py-1 text-xl'>{genre_2}</p>}
                            {budget && <p className='bg-red-700 text-white px-2 py-1 text-xl'>{budget}</p>}
                        </div>
                    </div>

                    {/* Gallery Button */}
                    <div className='transition flex items-center justify-center bg-zinc-800 hover:bg-zinc-700'>
                        <button className='text-lg sm:text-xl text-center text-white h-full w-full py-3 lg:py-0' onClick={() => setToggler(!toggler)}>
                            View image gallery <i className="fa-solid fa-magnifying-glass ml-1"></i>
                        </button>
                        <FsLightbox
                            toggler={toggler}
                            sources={[
                              featured_image && `${featured_image}`,
                              image_2 && `${image_2}`,
                              image_3 && `${image_3}`,
                              image_4 && `${image_4}`,
                            ].filter(Boolean)}
                        />
                    </div>
                </div>
            </section>

            <Seperator />

            {/* Rig Details */}
            <section className='bg-white px-10 py-12 lg:py-24'>
                <div className='container mx-auto flex flex-col md:flex-row gap-x-10 gap-y-10 lg:gap-y-12 md:flex-wrap xl:flex-nowrap'>

                    {/* Attributes */}
                    <div className='w-full text-left md:w-5/12 xl:w-3/12'>
                        <h3 className='text-2xl lg:text-3xl mb-5'>Rig Details</h3>
                        <ul className='text-lg lg:text-xl'>
                            <li className='mb-1.5'>Category: {category}</li>
                            <li className='mb-1.5'>Attributes: {attribute_1}, {attribute_2}</li>
                            <li className='mb-1.5'>Genres: {genre_1}, {genre_2}</li>
                            <li className='mb-1.5'>Budget: {budget}</li>
                            <li className='mb-1.5'>Likes: {likes_count}</li>
                            <li className='mb-1.5'>Stars: {stars_count}</li>
                            <li>Last updated: {updated_at}</li>
                        </ul>
                    </div>

                    {/* Gear List */}
                    <div className='w-full md:w-6/12 block xl:hidden text-left'>
                        <h3 className='text-2xl mb-5'>Gear List</h3>
                        <p className='text-lg'>{gear_list}</p>
                    </div>

                    {/* Description */}
                    <div className='w-full xl:w-6/12 text-left'>
                        <h3 className='text-2xl lg:text-3xl mb-5'>Description</h3>
                        <p className='text-lg lg:text-xl'>{description}</p>
                    </div>

                    {/* Gear List */}
                    <div className='hidden xl:block w-3/12 text-left'>
                        <h3 className='text-3xl mb-5'>Gear List</h3>
                        <p className='text-xl'>{gear_list}</p>
                    </div>

                </div>

            </section>

            <Seperator />

            {/* Comments */}
            <section className='bg-slate-100 px-5 py-12 lg:py-24'>
                <div className='container mx-auto flex flex-col lg:flex-row gap-10'>

                </div>
            </section>

        </div>
    )
}

export default Rig
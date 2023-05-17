import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';


const RigCard = (props) => {
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
        setRigs,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleLike = async () => {
        try {
            const {data} = await axiosRes.post('/likes/', { rig:id });
            setRigs((prevRigs) => ({
                ...prevRigs,
                results: prevRigs.results.map((rig) => {
                    return rig.id === id
                    ? {...rig, likes_count: rig.likes_count + 1, like_id: data.id}
                    : rig;
                }),
            }));
        } catch(err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setRigs((prevRigs) => ({
                ...prevRigs,
                results: prevRigs.results.map((rig) => {
                    return rig.id === id
                    ? {...rig, likes_count: rig.likes_count - 1, like_id: null}
                    : rig;
                }),
            }));
        } catch(err) {
            console.log(err);
        }
    };

    const handleStar = async () => {
        try {
            const {data} = await axiosRes.post('/stars/', { rig:id });
            setRigs((prevRigs) => ({
                ...prevRigs,
                results: prevRigs.results.map((rig) => {
                    return rig.id === id
                    ? {...rig, stars_count: rig.stars_count + 1, star_id: data.id}
                    : rig;
                }),
            }));
        } catch(err) {
            console.log(err);
        }
    };

    const handleUnstar = async () => {
        try {
            await axiosRes.delete(`/stars/${star_id}/`);
            setRigs((prevRigs) => ({
                ...prevRigs,
                results: prevRigs.results.map((rig) => {
                    return rig.id === id
                    ? {...rig, stars_count: rig.stars_count - 1, star_id: null}
                    : rig;
                }),
            }));
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <article className='w-full flex flex-col shadow-xl border-b-2 border-amber-400'>
            <div className='w-full h-64 sm:h-80 md:h-96 lg:h-80 2xl:h-96 relative'>
                {/* Image */}
                <img src={featured_image} alt={name} className='h-full w-full object-center object-cover' />

                {/* Profile */}
                <div className='absolute h-10 w-10 sm:h-14 sm:w-14 bottom-1 sm:bottom-2.5 left-12 sm:left-14'>
                    <Link className="flex items-center justify-center" to={`/profiles/${profile_id}`}>
                        <img src={profile_image} alt={owner} className='h-full w-full object-center object-cover rounded-full relative z-10' />
                        <p className='bg-zinc-800 text-white ml-[-10px] pl-4 py-1 pr-2 text-base sm:text-lg relative z-0'>@{owner}</p>
                    </Link>
                </div>

                {/* Attributes */}
                <div className='absolute top-2 left-2 lg:top-2.5 lg:left-3 gap-3 lg:gap-5 flex'>
                    {attribute_1 && <p className='bg-amber-500 text-white px-2 py-1 text-white px-2 py-1 text-lg lg:text-xl'>{attribute_1}</p>}
                    {attribute_2 && <p className='bg-amber-500 text-white px-2 py-1 text-lg lg:text-xl'>{attribute_2}</p>}
                </div>

                {/* Like */}
                {is_owner ? (
                    <div className='absolute bottom-1 right-14 md:bottom-2.5 md:right-16 flex'>
                    </div>
                ) : like_id ? (
                    <div className='absolute bottom-1 right-14 md:bottom-2.5 md:right-16 flex'>
                        <button 
                            onClick={handleUnlike}
                            className='shadow-lg bg-white rounded-full hover:scale-105 border-zinc-800 border h-10 w-10 md:h-12 md:w-12 flex items-center justify-center'
                        >
                            <i className="fa-solid fa-hand-horns text-zinc-800 text-xl md:text-3xl"></i>
                        </button>
                    </div>
                ) : currentUser ? (
                    <div className='absolute bottom-1 right-14 md:bottom-2.5 md:right-16 flex'>
                        <button 
                            onClick={handleLike}
                            className='shadow-lg bg-white border-zinc-800 hover:scale-105 border group hover:scale-105 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center'
                        >
                            <i className="fa-light fa-hand-horns text-zinc-800 text-xl md:text-3xl"></i>
                        </button>
                    </div>
                ) : (
                    <div className='absolute bottom-1 right-14 md:bottom-2.5 md:right-16 flex'>
                    </div>
                )}

                {/* Save */}
                {is_owner ? (
                    <div className='absolute bottom-1 right-2 md:bottom-2.5 md:right-2.5 flex'>
                    </div>
                ) : star_id ? (
                    <div className='absolute bottom-1 right-2 md:bottom-2.5 md:right-2.5 flex'>
                        <button 
                            onClick={handleUnstar}
                            className='shadow-lg bg-white rounded-full hover:scale-105 border-zinc-800 border h-10 w-10 md:h-12 md:w-12 flex items-center justify-center'
                        >
                            <i className="fa-solid fa-star text-black text-xl md:text-3xl"></i>
                        </button>
                    </div>
                ) : currentUser ? (
                    <div className='absolute bottom-1 right-2 md:bottom-2.5 md:right-2.5 flex'>
                        <button 
                            onClick={handleStar}
                            className='shadow-lg bg-white group hover:scale-105 border-zinc-800 border rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center'
                        >
                            <i className="fa-light fa-star text-zinc-800 text-xl md:text-3xl"></i>
                        </button>
                    </div>
                ) : (
                    <div className='absolute bottom-1 right-2 md:bottom-2.5 md:right-2.5 flex'>
                    </div>
                )}
            </div>
            <div className="bg-white text-black py-5 px-10 flex flex-col justify-between grow">
                <h3 className="mb-3 text-2xl lg:text-3xl">{name}</h3>
                <p className='line-clamp-4 text-lg lg:text-xl'>{description}</p>
                <div className='flex items-center justify-end mt-3'>
                    <Link className="group hover:scale-105" to={`/rigs/${id}`}>
                        <span className='text-base lg:text-lg'>View rig</span> <i className="ml-2 align-top fa-solid fa-arrow-right text-black text-xl group-hover:animate-pulse"></i>
                    </ Link>
                </div>

            </div>
        </article>
    )
}

export default RigCard
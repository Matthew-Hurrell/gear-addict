import React, { useState } from 'react';
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
        <article className='w-full'>
            <div className='w-full h-80'>
                {/* Image */}
                <img src={featured_image} alt={name} className='h-full w-full object-center object-cover' />
            </div>
            <div>

            </div>
        </article>
    )
}

export default RigCard
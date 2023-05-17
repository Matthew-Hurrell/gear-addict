import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';
import CategoryBadge from '../../components/CategoryBadge';


const GearCard = (props) => {
    const {
        id,
        owner,
        profile_id,
        name, 
        category, 
        brand,
        model,
        serial,
        year,
        condition,
        value,
        location,
        description,
        image,
        repair,
        sale,
        insured,
        setGear,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <article className='w-full flex flex-col'>
            <div className='w-full relative h-64 sm:h-72 md:h-64 lg:h-72 xl:h-80 2xl:h-[350px]'>
                {/* Image */}
                <img src={image} alt={name} className='h-full w-full object-center object-cover' />

                {/* Condition */}
                <div className='absolute bottom-2 left-2'>
                    {condition && <p className='bg-amber-500 text-white px-2 py-1 text-white px-2 py-1 text-lg lg:text-xl'>{condition}</p>}
                </div>

                {/* Category */}
                {category === 'Guitar' ? (
                    <CategoryBadge guitar />
                ) : category === 'Bass' ? (
                    <CategoryBadge bass />
                ) : category === 'Keyboard' ? (
                    <CategoryBadge keyboard />
                ) : category === 'Amplifier' ? (
                    <CategoryBadge amplifier />
                ) : category === 'Drums' ? (
                    <CategoryBadge drums />
                ) : category === 'DJ' ? (
                    <CategoryBadge dj />
                ) : category === 'Studio' ? (
                    <CategoryBadge studio />
                ) : category === 'Live Sound' ? (
                    <CategoryBadge live />
                ) : category === 'Orchestra' ? (
                    <CategoryBadge orchestra />
                ) : category === 'Band' ? (
                    <CategoryBadge band />
                ) : category === 'Lights' ? (
                    <CategoryBadge lights />
                ) : (
                    <CategoryBadge accessories />
                )}
            </div>
            <div className="bg-zinc-800 text-white py-5 px-10 flex flex-col justify-between grow">
                <h3 className="mb-3 text-2xl lg:text-3xl">{name}</h3>
                <p>{location}</p>
                <p>{value}</p>
                <p>{brand}</p>
                <p>{model}</p>
                <p>{year}</p>
                <p>{serial}</p>
                <p className='line-clamp-4 text-lg lg:text-xl'>{description}</p>
            </div>
        </article>
    )
}

export default GearCard
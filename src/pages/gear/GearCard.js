import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';
import CategoryBadge from '../../components/CategoryBadge';
import GearStatusBadge from '../../components/GearStatusBadge';
import DropdownMenu from '../../components/DropdownMenu';


const GearCard = (props) => {
    const {
        id,
        owner,
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
        fetchGear,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/gear/${id}/edit`);
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/gear/${id}/`);
            fetchGear();
        } catch (err) {
            // console.log(err);
        }
    }

    return (
        <article className='w-full flex flex-col shadow-xl border-b-2 border-amber-400'>
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

                <div className='absolute left-2 top-2 flex items-center gap-2'>

                    {/* Repair */}
                    {(repair === 1) && <GearStatusBadge repair />}

                    {/* Sale */}
                    {(sale === 1) && <GearStatusBadge sale />}

                    {/* Insured */}
                    {(insured === 1) && <GearStatusBadge insured />}
                </div>

                {/* Edit / Delete Menu */}
                {is_owner && <DropdownMenu handleEdit={handleEdit} handleDelete={handleDelete} />}

            </div>
            <div className="bg-white text-black py-5 px-10 flex flex-col grow">

                {/* Name */}
                <h3 className="mb-3 text-xl lg:text-2xl">{name}</h3>
                <div className='grid grid-cols-1 gap-y-2'>

                    {/* Location */}
                    {location && <p className='text-lg text-left'><i className="fa-solid fa-location-dot mr-2"></i>{location}</p>}
                    
                    {/* Value */}
                    {value && <p className='text-lg text-left'><i className="fa-sharp fa-solid fa-circle-sterling mr-2"></i>{value}</p>}
                    
                    {/* Brand / Model */}
                    {brand && model ? (
                        <p className='text-lg text-left'><i className="fa-solid fa-circle-info mr-2"></i>{brand && `${brand}, `}{model}</p>
                    ) : model ? (
                        <p className='text-lg text-left'><i className="fa-solid fa-circle-info mr-2"></i>{model}</p>
                    ) : brand ? (
                        <p className='text-lg text-left'><i className="fa-solid fa-circle-info mr-2"></i>{brand}</p>
                    ) : (
                        null
                    )}

                    {/* Serial */}
                    {serial && <p className='text-lg text-left'><i className="fa-solid fa-hashtag mr-2"></i>{serial}</p>}
                    
                    {/* Year */}
                    {year && <p className='text-lg text-left'><i className="fa-regular fa-calendar mr-2"></i>{year}</p>}
                </div>

                {/* Description */}
                {description && <p className='line-clamp-4 text-lg text-left mt-3'>{description}</p>}
            </div>
        </article>
    )
}

export default GearCard
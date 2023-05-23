import React, { useEffect, useRef, useState } from 'react'
import Hero from '../../components/Hero'
import Seperator from '../../components/Seperator'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/useRedirect';

const GearEditForm = () => {
    useRedirect('loggedOut');

    const [gearData, setGearData] = useState({
        name: '',
        category: '',
        brand: '',
        model: '',
        serial: '',
        year: '',
        condition: '',
        value: '',
        location: '',
        description: '',
        image: '',
        repair: '',
        sale: '',
        insured: '',
    });

    const {
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
    } = gearData;

    const [errors, setErrors] = useState({});
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/gear/${id}`);
                const {
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
                    is_owner
                } = data;

                is_owner ? setGearData({
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
                }) : history.push('/');
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setGearData({
            ...gearData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event, inputName) => {
        if (event.target.files.length) {
            URL.revokeObjectURL([inputName]);
            setGearData({
                ...gearData,
                [inputName]: URL.createObjectURL(event.target.files[0]),
            });
        };
    };

    const imageInput = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('category', category);
        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('serial', serial);
        formData.append('year', year);
        formData.append('condition', condition);
        formData.append('value', value);
        formData.append('location', location);
        formData.append('description', description);
        if (imageInput?.current?.files?.[0]) {
            formData.append('image', imageInput.current?.files?.[0] ?? "");
        }
        formData.append('repair', repair);
        formData.append('sale', sale);
        formData.append('insured', insured);

        try {
            await axiosReq.put(`/gear/${id}/`, formData);
            history.push(`/gear`);
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <div>

            {/* Hero */}
            <Hero title='Edit gear' />

            {/* Seperator */}
            <Seperator />

            {/* Gear Form */}
            <section className='px-5 py-12 lg:py-24 bg-slate-100'>
                <div className='container mx-auto'>
                    <div className='w-full lg:w-8/12 xl:w-7/12 mx-auto'>
                        <form
                            className='bg-zinc-800 h-full pt-10 pb-8 px-8 md:pt-16 md:pb-14 md:px-16 lg:px-12 xl:px-16 2xl:px-24 border-2 border-amber-400 shadow-xl text-left flex flex-col justify-center gap-5'
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >

                            {/* Name */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Gear Name:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.name?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Category */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Category:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="category"
                                        id="category"
                                        value={category}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Guitar">Guitar</option>
                                        <option value="Bass">Bass</option>
                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Amplifier">Amplifier</option>
                                        <option value="Drums">Drums</option>
                                        <option value="DJ">DJ</option>
                                        <option value="Studio">Studio</option>
                                        <option value="Live Sound">Live Sound</option>
                                        <option value="Orchestra">Orchestra</option>
                                        <option value="Band">Band</option>
                                        <option value="Lights">Lights</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </label>
                            </div>
                            {errors.category?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Brand */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Brand:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="text"
                                        name="brand"
                                        value={brand}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.brand?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Model */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Model:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="text"
                                        name="model"
                                        value={model}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.model?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Serial */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Serial:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="text"
                                        name="serial"
                                        value={serial}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.serial?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Year */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Year:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="text"
                                        name="year"
                                        value={year}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.year?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Condition */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Condition:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="condition"
                                        id="condition"
                                        value={condition}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Non-Functioning">Non-Functioning</option>
                                        <option value="Poor">Poor</option>
                                        <option value="Fair">Fair</option>
                                        <option value="Good">Good</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Mint">Mint</option>
                                    </select>
                                </label>
                            </div>
                            {errors.condition?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Value */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Value:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="number"
                                        name="value"
                                        min="1"
                                        value={value}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.value?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Location */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Location:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        type="text"
                                        name="location"
                                        value={location}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            {errors.location?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Description */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Description:

                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="4"
                                        cols="50"
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        value={description}
                                        onChange={handleChange}
                                    >
                                    </textarea>
                                </label>
                            </div>
                            {errors.description?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Image */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Image:
                                    <input
                                        className='mx-auto sm:mx-0 sm:w-7/12'
                                        type="file"
                                        id="image"
                                        ref={imageInput}
                                        onChange={(e) => handleChangeImage(e, 'image')}
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                            {errors.image?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Repair */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Repair:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="repair"
                                        id="repair"
                                        value={repair}
                                        onChange={handleChange}
                                    >
                                        <option value={0}>No</option>
                                        <option value={1}>Yes</option>
                                    </select>
                                </label>
                            </div>
                            {errors.repair?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Sale */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Sale:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="sale"
                                        id="sale"
                                        value={sale}
                                        onChange={handleChange}
                                    >
                                        <option value={0}>No</option>
                                        <option value={1}>Yes</option>
                                    </select>
                                </label>
                            </div>
                            {errors.sale?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Insured */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Insured:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="insured"
                                        id="insured"
                                        value={insured}
                                        onChange={handleChange}
                                    >
                                        <option value={0}>No</option>
                                        <option value={1}>Yes</option>
                                    </select>
                                </label>
                            </div>
                            {errors.insured?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}


                            {/* Save / Cancel Buttons */}
                            <div className='mt-5 lg:mt-7 flex items-center justify-center gap-10'>

                                {/* Cancel */}
                                <button
                                    onClick={() => history.goBack()}
                                    className='text-white mt-2 sm:mt-0 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent bg-red-600 border-2 border-red-600'
                                >
                                    Cancel
                                </button>

                                {/* Save */}
                                <button
                                    type="submit"
                                    className='text-white mt-2 sm:mt-0 bg-green-700 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent border-2 border-green-700'
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GearEditForm
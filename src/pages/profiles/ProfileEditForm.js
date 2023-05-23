import React, { useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero';
import Seperator from '../../components/Seperator';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/useRedirect';

const ProfileEditForm = () => {
    useRedirect('loggedOut');

    const currentUser = useCurrentUser();
    const history = useHistory();
    const { id } = useParams();
    const imageInput = useRef(null);
    const headerImageInput = useRef(null);

    const [profileData, setProfileData] = useState({
        name: '',
        bio: '',
        image: '',
        header_image: '',
        location: '',
        instrument_1: '',
        instrument_2: '',
        instrument_3: '',
        genre_1: '',
        genre_2: '',
        genre_3: '',
        expertise: '',
    });

    const {
        name,
        bio,
        image,
        header_image,
        location,
        instrument_1,
        instrument_2,
        instrument_3,
        genre_1,
        genre_2,
        genre_3,
        expertise,
    } = profileData;

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const {
                        name,
                        bio,
                        image,
                        header_image,
                        location,
                        instrument_1,
                        instrument_2,
                        instrument_3,
                        genre_1,
                        genre_2,
                        genre_3,
                        expertise,
                    } = data;
                    setProfileData({
                        name,
                        bio,
                        image,
                        header_image,
                        location,
                        instrument_1,
                        instrument_2,
                        instrument_3,
                        genre_1,
                        genre_2,
                        genre_3,
                        expertise,
                    });
                } catch (err) {
                    // console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };

        handleMount();
    }, [currentUser, history, id]);

    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event, inputName) => {
        if (event.target.files.length) {
            URL.revokeObjectURL([inputName]);
            setProfileData({
                ...profileData,
                [inputName]: URL.createObjectURL(event.target.files[0]),
            });
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('bio', bio);
        if (imageInput?.current?.files?.[0]) {
            formData.append('image', imageInput.current?.files?.[0] ?? "");
        }
        if (headerImageInput?.current?.files?.[0]) {
            formData.append('header_image', headerImageInput.current?.files?.[0] ?? "");
        }
        formData.append('location', location);
        formData.append('instrument_1', instrument_1);
        formData.append('instrument_2', instrument_2);
        formData.append('instrument_3', instrument_3);
        formData.append('genre_1', genre_1);
        formData.append('genre_2', genre_2);
        formData.append('genre_3', genre_3);
        formData.append('expertise', expertise);
        try {
            await axiosReq.put(`/profiles/${id}/`, formData);
            history.push(`/profiles/${id}`);
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
            <Hero title='Edit profile' />

            {/* Seperator */}
            <Seperator />

            {/* Edit Profile Form */}
            <section className='px-5 py-12 lg:py-24 bg-slate-100'>
                <div className='container mx-auto'>
                    <div className='w-full lg:w-8/12 xl:w-7/12 mx-auto'>
                        <form
                            className='bg-zinc-800 h-full pt-10 pb-8 px-8 md:pt-16 md:pb-14 md:px-16 lg:px-12 xl:px-16 2xl:px-24 border-2 border-amber-400 shadow-xl text-left flex flex-col justify-center gap-5'
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >

                            {/* Alternative Name */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Alternative Name:
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

                            {/* Bio */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Bio:
                                    <textarea
                                        rows="4"
                                        cols="50"
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="bio"
                                        value={bio}
                                        onChange={handleChange}
                                    >
                                    </textarea>
                                </label>
                            </div>
                            {errors.bio?.map((message, idx) => (
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

                            {/* Instrument 1 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Instrument 1:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="instrument_1"
                                        id="instrument_1"
                                        value={instrument_1}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Electic Guitar">Electic Guitar</option>
                                        <option value="Acoustic Guitar">Acoustic Guitar</option>
                                        <option value="Bass Guitar">Bass Guitar</option>
                                        <option value="Drums">Drums</option>
                                        <option value="Percussion">Percussion</option>
                                        <option value="Piano">Piano</option>
                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Vocals">Vocals</option>
                                        <option value="Saxophone">Saxophone</option>
                                        <option value="Violin">Violin</option>
                                        <option value="Cello">Cello</option>
                                        <option value="Clarinet">Clarinet</option>
                                        <option value="Accordion">Accordion</option>
                                        <option value="Xylophone">Xylophone</option>
                                        <option value="Trombone">Trombone</option>
                                        <option value="Flute">Flute</option>
                                        <option value="Oboe">Oboe</option>
                                        <option value="Harp">Harp</option>
                                        <option value="Harmonica">Harmonica</option>
                                        <option value="Mandolin">Mandolin</option>
                                        <option value="Bassoon">Bassoon</option>
                                        <option value="Tuba">Tuba</option>
                                        <option value="Viola">Viola</option>
                                        <option value="Double Bass">Double Bass</option>
                                        <option value="Synthesiser">Synthesiser</option>
                                        <option value="Banjo">Banjo</option>
                                        <option value="Bagpipes">Bagpipes</option>
                                        <option value="Classical Guitar">Classical Guitar</option>
                                        <option value="Cajon">Cajon</option>
                                        <option value="Organ">Organ</option>
                                        <option value="Didgeridoo">Didgeridoo</option>
                                        <option value="Sitar">Sitar</option>
                                    </select>
                                </label>
                            </div>
                            {errors.instrument_1?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Instrument 2 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Instrument 2:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="instrument_2"
                                        id="instrument_2"
                                        value={instrument_2}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Electic Guitar">Electic Guitar</option>
                                        <option value="Acoustic Guitar">Acoustic Guitar</option>
                                        <option value="Bass Guitar">Bass Guitar</option>
                                        <option value="Drums">Drums</option>
                                        <option value="Percussion">Percussion</option>
                                        <option value="Piano">Piano</option>
                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Vocals">Vocals</option>
                                        <option value="Saxophone">Saxophone</option>
                                        <option value="Violin">Violin</option>
                                        <option value="Cello">Cello</option>
                                        <option value="Clarinet">Clarinet</option>
                                        <option value="Accordion">Accordion</option>
                                        <option value="Xylophone">Xylophone</option>
                                        <option value="Trombone">Trombone</option>
                                        <option value="Flute">Flute</option>
                                        <option value="Oboe">Oboe</option>
                                        <option value="Harp">Harp</option>
                                        <option value="Harmonica">Harmonica</option>
                                        <option value="Mandolin">Mandolin</option>
                                        <option value="Bassoon">Bassoon</option>
                                        <option value="Tuba">Tuba</option>
                                        <option value="Viola">Viola</option>
                                        <option value="Double Bass">Double Bass</option>
                                        <option value="Synthesiser">Synthesiser</option>
                                        <option value="Banjo">Banjo</option>
                                        <option value="Bagpipes">Bagpipes</option>
                                        <option value="Classical Guitar">Classical Guitar</option>
                                        <option value="Cajon">Cajon</option>
                                        <option value="Organ">Organ</option>
                                        <option value="Didgeridoo">Didgeridoo</option>
                                        <option value="Sitar">Sitar</option>
                                    </select>
                                </label>
                            </div>
                            {errors.instrument_2?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Instrument 3 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Instrument 3:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="instrument_3"
                                        id="instrument_3"
                                        value={instrument_3}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Electic Guitar">Electic Guitar</option>
                                        <option value="Acoustic Guitar">Acoustic Guitar</option>
                                        <option value="Bass Guitar">Bass Guitar</option>
                                        <option value="Drums">Drums</option>
                                        <option value="Percussion">Percussion</option>
                                        <option value="Piano">Piano</option>
                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Vocals">Vocals</option>
                                        <option value="Saxophone">Saxophone</option>
                                        <option value="Violin">Violin</option>
                                        <option value="Cello">Cello</option>
                                        <option value="Clarinet">Clarinet</option>
                                        <option value="Accordion">Accordion</option>
                                        <option value="Xylophone">Xylophone</option>
                                        <option value="Trombone">Trombone</option>
                                        <option value="Flute">Flute</option>
                                        <option value="Oboe">Oboe</option>
                                        <option value="Harp">Harp</option>
                                        <option value="Harmonica">Harmonica</option>
                                        <option value="Mandolin">Mandolin</option>
                                        <option value="Bassoon">Bassoon</option>
                                        <option value="Tuba">Tuba</option>
                                        <option value="Viola">Viola</option>
                                        <option value="Double Bass">Double Bass</option>
                                        <option value="Synthesiser">Synthesiser</option>
                                        <option value="Banjo">Banjo</option>
                                        <option value="Bagpipes">Bagpipes</option>
                                        <option value="Classical Guitar">Classical Guitar</option>
                                        <option value="Cajon">Cajon</option>
                                        <option value="Organ">Organ</option>
                                        <option value="Didgeridoo">Didgeridoo</option>
                                        <option value="Sitar">Sitar</option>
                                    </select>
                                </label>
                            </div>
                            {errors.instrument_3?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Genre 1 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Genre 1:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="genre_1"
                                        id="genre_1"
                                        value={genre_1}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Rock">Rock</option>
                                        <option value="Pop">Pop</option>
                                        <option value="Hip Hop">Hip Hop</option>
                                        <option value="Jazz">Jazz</option>
                                        <option value="Rhythm and Blues">Rhythm and Blues</option>
                                        <option value="Electro">Electro</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Blues">Blues</option>
                                        <option value="Country">Country</option>
                                        <option value="Heavy Metal">Heavy Metal</option>
                                        <option value="Dance">Dance</option>
                                        <option value="World">World</option>
                                        <option value="Soul">Soul</option>
                                        <option value="Punk">Punk</option>
                                        <option value="Motown">Motown</option>
                                        <option value="Funk">Funk</option>
                                        <option value="Alt">Alt</option>
                                        <option value="Folk">Folk</option>
                                        <option value="Musical Theatre">Musical Theatre</option>
                                        <option value="Reggae">Reggae</option>
                                        <option value="Ska">Ska</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Indie">Indie</option>
                                        <option value="House">House</option>
                                        <option value="Disco">Disco</option>
                                        <option value="Easy Listening">Easy Listening</option>
                                        <option value="Dubstep">Dubstep</option>
                                        <option value="Experimental">Experimental</option>
                                        <option value="Rock and Roll">Rock and Roll</option>
                                        <option value="Swing">Swing</option>
                                        <option value="Instrumental">Instrumental</option>
                                        <option value="Ambient">Ambient</option>
                                        <option value="Trance">Trance</option>
                                        <option value="Bluegrass">Bluegrass</option>
                                        <option value="Hardcore">Hardcore</option>
                                        <option value="Grunge">Grunge</option>
                                        <option value="Prog">Prog</option>
                                    </select>
                                </label>
                            </div>
                            {errors.genre_1?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Genre 2 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Genre 2:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="genre_2"
                                        id="genre_2"
                                        value={genre_2}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Rock">Rock</option>
                                        <option value="Pop">Pop</option>
                                        <option value="Hip Hop">Hip Hop</option>
                                        <option value="Jazz">Jazz</option>
                                        <option value="Rhythm and Blues">Rhythm and Blues</option>
                                        <option value="Electro">Electro</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Blues">Blues</option>
                                        <option value="Country">Country</option>
                                        <option value="Heavy Metal">Heavy Metal</option>
                                        <option value="Dance">Dance</option>
                                        <option value="World">World</option>
                                        <option value="Soul">Soul</option>
                                        <option value="Punk">Punk</option>
                                        <option value="Motown">Motown</option>
                                        <option value="Funk">Funk</option>
                                        <option value="Alt">Alt</option>
                                        <option value="Folk">Folk</option>
                                        <option value="Musical Theatre">Musical Theatre</option>
                                        <option value="Reggae">Reggae</option>
                                        <option value="Ska">Ska</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Indie">Indie</option>
                                        <option value="House">House</option>
                                        <option value="Disco">Disco</option>
                                        <option value="Easy Listening">Easy Listening</option>
                                        <option value="Dubstep">Dubstep</option>
                                        <option value="Experimental">Experimental</option>
                                        <option value="Rock and Roll">Rock and Roll</option>
                                        <option value="Swing">Swing</option>
                                        <option value="Instrumental">Instrumental</option>
                                        <option value="Ambient">Ambient</option>
                                        <option value="Trance">Trance</option>
                                        <option value="Bluegrass">Bluegrass</option>
                                        <option value="Hardcore">Hardcore</option>
                                        <option value="Grunge">Grunge</option>
                                        <option value="Prog">Prog</option>
                                    </select>
                                </label>
                            </div>
                            {errors.genre_2?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Genre 3 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Genre 3:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="genre_3"
                                        id="genre_3"
                                        value={genre_3}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Rock">Rock</option>
                                        <option value="Pop">Pop</option>
                                        <option value="Hip Hop">Hip Hop</option>
                                        <option value="Jazz">Jazz</option>
                                        <option value="Rhythm and Blues">Rhythm and Blues</option>
                                        <option value="Electro">Electro</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Blues">Blues</option>
                                        <option value="Country">Country</option>
                                        <option value="Heavy Metal">Heavy Metal</option>
                                        <option value="Dance">Dance</option>
                                        <option value="World">World</option>
                                        <option value="Soul">Soul</option>
                                        <option value="Punk">Punk</option>
                                        <option value="Motown">Motown</option>
                                        <option value="Funk">Funk</option>
                                        <option value="Alt">Alt</option>
                                        <option value="Folk">Folk</option>
                                        <option value="Musical Theatre">Musical Theatre</option>
                                        <option value="Reggae">Reggae</option>
                                        <option value="Ska">Ska</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Indie">Indie</option>
                                        <option value="House">House</option>
                                        <option value="Disco">Disco</option>
                                        <option value="Easy Listening">Easy Listening</option>
                                        <option value="Dubstep">Dubstep</option>
                                        <option value="Experimental">Experimental</option>
                                        <option value="Rock and Roll">Rock and Roll</option>
                                        <option value="Swing">Swing</option>
                                        <option value="Instrumental">Instrumental</option>
                                        <option value="Ambient">Ambient</option>
                                        <option value="Trance">Trance</option>
                                        <option value="Bluegrass">Bluegrass</option>
                                        <option value="Hardcore">Hardcore</option>
                                        <option value="Grunge">Grunge</option>
                                        <option value="Prog">Prog</option>
                                    </select>
                                </label>
                            </div>
                            {errors.genre_3?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Expertise */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Expertise:
                                    <select
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="expertise"
                                        id="expertise"
                                        value={expertise}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Novice">Novice</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                        <option value="Pro">Pro</option>
                                    </select>
                                </label>
                            </div>
                            {errors.expertise?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Image */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image:
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

                            {/* Header Image */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Header Image:
                                    <input
                                        className='mx-auto sm:mx-0 sm:w-7/12'
                                        type="file"
                                        id="header_image"
                                        ref={headerImageInput}
                                        onChange={(e) => handleChangeImage(e, 'header_image')}
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                            {errors.header_image?.map((message, idx) => (
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

export default ProfileEditForm
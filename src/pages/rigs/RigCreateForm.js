import React, { useRef, useState } from 'react'
import Hero from '../../components/Hero'
import Seperator from '../../components/Seperator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/useRedirect';

const RigCreateForm = () => {
    useRedirect('loggedOut');

    const [rigData, setRigData] = useState({
        name: '',
        budget: '',
        category: '',
        attribute_1: '',
        attribute_2: '',
        genre_1: '',
        genre_2: '',
        description: '',
        gear_list: '',
        featured_image: '',
        image_2: '',
        image_3: '',
        image_4: '',
    });

    const { 
        name, 
        budget, 
        category, 
        attribute_1, 
        attribute_2, 
        genre_1, 
        genre_2, 
        description, 
        gear_list, 
        featured_image, 
        image_2, 
        image_3, 
        image_4 
    } = rigData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
  
    const handleChange = (event) => {
        setRigData({
            ...rigData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event, inputName) => {
        if (event.target.files.length){
            URL.revokeObjectURL([inputName]);
            setRigData({
                ...rigData,
                [inputName]: URL.createObjectURL(event.target.files[0]),
            });
        };
    };

    const featuredImageInput = useRef(null);
    const imageTwoInput = useRef(null);
    const imageThreeInput = useRef(null);
    const imageFourInput = useRef(null);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('gear_list', gear_list);
        formData.append('featured_image', featuredImageInput.current?.files?.[0] ?? "");
        formData.append('image_2', imageTwoInput.current?.files?.[0] ?? "");
        formData.append('image_3', imageThreeInput.current?.files?.[0] ?? "");
        formData.append('image_4', imageFourInput.current?.files?.[0] ?? "");
        formData.append('attribute_1', attribute_1);
        formData.append('attribute_2', attribute_2);
        formData.append('budget', budget);
        formData.append('genre_1', genre_1);
        formData.append('genre_2', genre_2);

        try {
            const {data} = await axiosReq.post('/rigs/', formData);
            history.push(`/rigs/${data.id}`);
        } catch(err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <div>

            {/* Hero */}
            <Hero title='Create a rig'/>

            {/* Seperator */}
            <Seperator />

            {/* Rig Form */}
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
                                    Rig Name:
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
                                        <option value="Drums">Drums</option>
                                        <option value="DJ">DJ</option>
                                        <option value="Studio">Studio</option>
                                        <option value="Live Sound">Live Sound</option>
                                        <option value="Orchestra">Orchestra</option>
                                        <option value="Band">Band</option>
                                    </select>
                                </label>
                            </div>
                            {errors.category?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Budget */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Budget:
                                        <select 
                                            className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                            name="budget"
                                            id="budget"
                                            value={budget}
                                            onChange={handleChange}
                                        >
                                            <option value=""></option>
                                            <option value="£">£</option>
                                            <option value="££">££</option>
                                            <option value="£££">£££</option>
                                            <option value="££££">££££</option>
                                            <option value="£££££">£££££</option>
                                        </select>
                                </label>
                            </div>
                            {errors.budget?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Attribute 1 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Attribute 1:
                                    <select 
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="attribute_1"
                                        id="attribute_1"
                                        value={attribute_1}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Budget">Budget</option>
                                        <option value="Versatile">Versatile</option>
                                        <option value="High-End">High-End</option>
                                        <option value="Tribute">Tribute</option>
                                        <option value="Acoustic">Acoustic</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Analogue">Analogue</option>
                                        <option value="Digital">Digital</option>
                                        <option value="Electro-Acoustic">Electro-Acoustic</option>
                                        <option value="Pro">Pro</option>
                                        <option value="Wireless">Wireless</option>
                                        <option value="Portable">Portable</option>
                                    </select>
                                </label>
                            </div>
                            {errors.attribute_1?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Attribute 2 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Attribute 2:
                                    <select 
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        name="attribute_2"
                                        id="attribute_2"
                                        value={attribute_2}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="Budget">Budget</option>
                                        <option value="Versatile">Versatile</option>
                                        <option value="High-End">High-End</option>
                                        <option value="Tribute">Tribute</option>
                                        <option value="Acoustic">Acoustic</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Analogue">Analogue</option>
                                        <option value="Digital">Digital</option>
                                        <option value="Electro-Acoustic">Electro-Acoustic</option>
                                        <option value="Pro">Pro</option>
                                        <option value="Wireless">Wireless</option>
                                        <option value="Portable">Portable</option>
                                    </select>
                                </label>
                            </div>
                            {errors.attribute_2?.map((message, idx) => (
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

                            {/* Gear List */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Gear List:

                                    <textarea 
                                        id="gear_list" 
                                        name="gear_list" 
                                        rows="4" 
                                        cols="50"
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        value={gear_list}
                                        onChange={handleChange}
                                    >
                                    </textarea>
                                </label>
                            </div>
                            {errors.gear_list?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Featured Image */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Featured Image:
                                <input 
                                    className='mx-auto sm:mx-0 sm:w-7/12'
                                    type="file" 
                                    id="featured_image" 
                                    ref={featuredImageInput}
                                    onChange={(e) => handleChangeImage(e, 'featured_image')}
                                    accept="image/*" 
                                />
                                </label>
                            </div>
                            {errors.featured_image?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Image 2 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image 2:
                                <input 
                                    className='mx-auto sm:mx-0 sm:w-7/12'
                                    type="file" 
                                    id="image_2" 
                                    ref={imageTwoInput}
                                    onChange={(e) => handleChangeImage(e, 'image_2')}
                                    accept="image/*" 
                                />
                                </label>
                            </div>
                            {errors.image_2?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Image 3 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image 3:
                                <input 
                                    className='mx-auto sm:mx-0 sm:w-7/12'
                                    type="file" 
                                    id="image_3" 
                                    ref={imageThreeInput}
                                    onChange={(e) => handleChangeImage(e, 'image_3')}
                                    accept="image/*" 
                                />
                                </label>
                            </div>
                            {errors.image_3?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Image 4 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image 4:
                                <input 
                                    className='mx-auto sm:mx-0 sm:w-7/12'
                                    type="file" 
                                    id="image_4" 
                                    ref={imageFourInput}
                                    onChange={(e) => handleChangeImage(e, 'image_4')}
                                    accept="image/*" 
                                />
                                </label>
                            </div>
                            {errors.image_4?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            {/* Submit / Cancel Buttons */}
                            <div className='mt-5 lg:mt-7 flex items-center justify-center gap-10'>

                                {/* Cancel */}
                                <button
                                    onClick={() => history.goBack()}
                                    className='text-white mt-2 sm:mt-0 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent bg-red-600 border-2 border-red-600'
                                >
                                    Cancel
                                </button>

                                {/* Submit */}
                                <button 
                                    type="submit"
                                    className='text-white mt-2 sm:mt-0 bg-green-700 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent border-2 border-green-700'
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RigCreateForm
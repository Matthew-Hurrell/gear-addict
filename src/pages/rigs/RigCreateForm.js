import React, { useRef, useState } from 'react'
import Hero from '../../components/Hero'
import Seperator from '../../components/Seperator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';

const RigCreateForm = () => {
    const setCurrentUser = useSetCurrentUser();

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

    const featuredImageInput = useRef(null);
    const imageTwoInput = useRef(null);
    const imageThreeInput = useRef(null);
    const imageFourInput = useRef(null);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('budget', budget);
        formData.append('category', category);
        formData.append('attribute_1', attribute_1);
        formData.append('attribute_2', attribute_2);
        formData.append('genre_1', genre_1);
        formData.append('genre_2', genre_2);
        formData.append('description', description);
        formData.append('gear_list', gear_list);
        formData.append('featured_image', featuredImageInput.current.files[0])
        formData.append('image_2', imageTwoInput.current.files[0])
        formData.append('image_3', imageThreeInput.current.files[0])
        formData.append('image_4', imageFourInput.current.files[0])

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
                    <div className='bg-zinc-800 h-full pt-10 pb-8 px-8 md:pt-16 md:pb-14 md:px-16 lg:px-12 xl:px-16 border-2 border-amber-400 shadow-xl text-left flex flex-col justify-center gap-9'>
                        <form onSubmit={handleSubmit}>

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

                            {/* Featured Image */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Featured Image
                                <input 
                                    type="file" 
                                    name="featured_image" 
                                    id="featured_image" 
                                    value={featured_image}
                                    ref={featuredImageInput}
                                    onChange={handleChange}
                                    accept="image/*" 
                                />
                                </label>
                            </div>

                            {/* Image 2 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image 2
                                <input 
                                    type="file" 
                                    name="image_2" 
                                    id="image_2" 
                                    value={image_2}
                                    ref={imageTwoInput}
                                    onChange={handleChange}
                                    accept="image/*" 
                                />
                                </label>
                            </div>

                            {/* Image 3 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image 3
                                <input 
                                    type="file" 
                                    name="image_3" 
                                    id="image_3" 
                                    value={image_3}
                                    ref={imageThreeInput}
                                    onChange={handleChange}
                                    accept="image/*" 
                                />
                                </label>
                            </div>

                            {/* Image 4 */}
                            <div>
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>Image 4
                                <input 
                                    type="file" 
                                    name="image_4" 
                                    id="image_4" 
                                    value={image_4}
                                    ref={imageFourInput}
                                    onChange={handleChange}
                                    accept="image/*" 
                                />
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className='text-white mt-2 sm:mt-0 bg-amber-500 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent border-2 border-amber-500'
                            >
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RigCreateForm
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import image from '../../assets/gear-addict-sign-in-page.jpg';
import { axiosRes } from '../../api/axiosDefaults';
import Hero from '../../components/Hero';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Seperator from '../../components/Seperator';
import { useRedirect } from '../../hooks/useRedirect';

const UserPasswordForm = () => {
    useRedirect('loggedOut');

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });

    const { new_password1, new_password2 } = userData;
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Password Form Validation
        if (( new_password1 == "" ) || ( new_password1.trim().length == 0 )) {
            alert('Form error - Password field cannot be empty');
        } else if (( new_password2 == "" ) || ( new_password2.trim().length == 0 )) {
            alert('Form error - Confirm password field cannot be empty');
        } else if ( new_password1 !== new_password2 ) {
            alert('Form error - Password fields must match');
        } else {
            try {
                await axiosRes.post("/dj-rest-auth/password/change/", userData);
                history.goBack();
            } catch (err) {
                // console.log(err);
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <div>

            {/* Hero */}
            <Hero title='Edit Password' />

            {/* Seperator */}
            <Seperator />

            {/* Form Section */}
            <div className='px-5 py-12 lg:py-24  bg-slate-100'>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7'>

                    {/* Edit Password Form */}
                    <div className="2xl:w-10/12 2xl:ml-auto">
                        <form
                            className='bg-zinc-800 h-full pt-10 pb-8 px-8 md:pt-16 md:pb-14 md:px-16 lg:px-12 xl:px-16 border-2 border-amber-400 shadow-xl text-left flex flex-col justify-center gap-9'
                            onSubmit={handleSubmit}
                        >
                            <div>

                                {/* New Password 1 */}
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    New Password:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        placeholder="new password"
                                        type="password"
                                        value={new_password1}
                                        onChange={handleChange}
                                        name="new_password1"
                                    />
                                </label>
                            </div>
                            {errors.new_password1?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            <div>

                                {/* New Password 2 */}
                                <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                                    Confirm New Password:
                                    <input
                                        className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                                        placeholder="Confirm new password"
                                        type="password"
                                        value={new_password2}
                                        onChange={handleChange}
                                        name="new_password2"
                                    />
                                </label>
                            </div>
                            {errors.new_password2?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}

                            <div className='flex flex-col sm:flex-row items-center justify-center gap-10 text-white mt-2'>

                                {/* Cancel */}
                                <button
                                    className='text-white mt-2 sm:mt-0 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent bg-red-600 border-2 border-red-600'
                                    onClick={() => history.goBack()}
                                >
                                    Cancel
                                </button>

                                {/* Save */}
                                <button
                                    className='text-white mt-2 sm:mt-0 bg-green-700 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent border-2 border-green-700'
                                    type="submit"
                                >
                                    Save
                                </button>

                            </div>
                            {errors.non_field_errors?.map((message, idx) => (
                                <p className='text-red-500' key={idx}>{message}</p>
                            ))}
                        </form>
                    </div>

                    {/* Image */}
                    <div className="2xl:w-10/12">
                        <img
                            className='object-center object-cover w-full h-full'
                            src={image}
                            alt="Live band performing in rehearsal room and jumping in the air"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPasswordForm
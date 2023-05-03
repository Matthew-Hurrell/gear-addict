import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import image from '../../assets/gear-addict-band-jump.jpg';
import axios from 'axios';
import Hero from '../../components/Hero';

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push('/signin');
    } catch(err) {
      setErrors(err.response?.data);
      console.log(err.response?.data);
    }
  };

  return (
    <div>

        {/* Hero */}
        <Hero title='Sign up'/>

        {/* Seperator */}
        <div className='h-1 bg-amber-400'></div>

        {/* Form Section */}
        <div className='px-5 py-12 lg:py-24  bg-slate-100'>
          <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7'>

            {/* Sign Up Form */}
            <div className="2xl:w-10/12 2xl:ml-auto">
              <form 
                className='bg-zinc-800 h-full pt-10 pb-8 px-8 md:pt-16 md:pb-14 md:px-16 lg:px-12 xl:px-16 border-2 border-amber-400 shadow-xl text-left flex flex-col justify-center gap-7'
                onSubmit={handleSubmit}
              >
                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Username:
                    <input 
                      className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                      type="text"
                      name="username"
                      placeholder='MrMetalHead'
                      value={username}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                {errors.username?.map((message, idx) => 
                  <p className='text-red-500' key={idx}>{message}</p>
                )}

                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Password:
                    <input
                      className='mt-1 sm:mt-0 border-zinc-400 border w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                      type="password"
                      name="password1"
                      placeholder='Ilovemetal123'
                      value={password1}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                {errors.password1?.map((message, idx) => 
                  <p className='text-red-500' key={idx}>{message}</p>
                )}

                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Confirm Password:
                    <input
                      className='mt-1 sm:mt-0 border-zinc-400 border w-full sm:w-7/12 px-2 py-0.5 font-normal text-black'
                      type="password"
                      name="password2"
                      placeholder='Ilovemetal123'
                      value={password2}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                {errors.password2?.map((message, idx) => 
                  <p className='text-red-500' key={idx}>{message}</p>
                )}

                <div className='flex flex-col sm:flex-row items-center justify-between text-white mt-2'>
                  <p className='mb-1 text-base md:text-lg'>Already have an account? 
                    <Link className="text-base md:text-lg text-center ml-1 sm:ml-1.5 hover:underline underline-offset-4 decoration-2 text-amber-500" to="/signin">Sign In</Link>
                  </p>
                  <button 
                    type="submit"
                    className='mt-2 sm:mt-0 bg-amber-500 px-3 py-2 font-bold hover:scale-105 hover:bg-transparent border-2 border-amber-500'
                  >
                    Sign up
                  </button>
                </div>
                {errors.non_field_errors?.map((message, idx) => 
                  <p className='text-red-500' key={idx}>{message}</p>
                )}
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

export default SignUpForm
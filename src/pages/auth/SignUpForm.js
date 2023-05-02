import React from 'react'
import header from '../../assets/gear-addict-page-header.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import image from '../../assets/gear-addict-band-jump.jpg';

const SignUpForm = () => {
  return (
    <div>

        {/* Hero */}
        <section className='h-52 md:h-72 lg:h-[400px] relative flex justify-center sm:justify-end items-center'>
            <img src={header} className='z-0 absolute top-0 object-top object-cover w-full h-full grayscale brightness-200' />
            <div className='z-10 bg-amber-500/[.9] relative inline-block px-10 py-5 h-full flex justify-center items-center sm:mr-36'>
                <h1 className='text-white text-4xl md:text-5xl opacity-100'>
                  Sign up <i className="fa-solid fa-fire-flame text-4xl"></i>
                </h1>
            </div>
        </section>

        {/* Seperator */}
        <div className='h-1 bg-amber-400'></div>

        {/* Form Section */}
        <div className='px-5 py-12 lg:py-24  bg-slate-100'>
          <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7'>

            {/* Sign Up Form */}
            <div class="2xl:w-10/12 2xl:ml-auto">
              <form className='bg-zinc-800 h-full pt-10 pb-8 px-8 md:pt-16 md:pb-14 md:px-16 lg:px-12 xl:px-16 border-2 border-amber-400 shadow-xl text-left flex flex-col justify-center gap-5'>
                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Username:
                    <input className='mt-1 sm:mt-0 border-zinc-400 border-2 w-full sm:w-7/12 px-2 py-0.5 font-normal' type="text" name="username" placeholder='MrMetalHead' />
                  </label>
                </div>
                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Email Address:
                    <input className='mt-1 sm:mt-0 border-zinc-400 border w-full sm:w-7/12 px-2 py-0.5 font-normal' type="email" name="email" placeholder='mrmetalhead@example.com' />
                  </label>
                </div>
                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Password:
                    <input className='mt-1 sm:mt-0 border-zinc-400 border w-full sm:w-7/12 px-2 py-0.5 font-normal' type="password" name="password" placeholder='Ilovemetal123' />
                  </label>
                </div>
                <div>
                  <label className='flex flex-col sm:flex-row justify-between items-center text-white font-bold'>
                    Confirm Password:
                    <input className='mt-1 sm:mt-0 border-zinc-400 border w-full sm:w-7/12 px-2 py-0.5 font-normal' type="password" name="password2" placeholder='Ilovemetal123' />
                  </label>
                </div>
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
              </form>
            </div>

            {/* Image */}
            <div class="2xl:w-10/12">
              <img className='object-center object-cover w-full h-full' src={image} />
            </div>
          </div>
        </div>

    </div>
  )
}

export default SignUpForm
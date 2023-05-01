import React from 'react'
import header from '../../assets/gear-addict-page-header.jpg';

const SignUpForm = () => {
  return (
    <div>

        {/* Hero */}
        <section className='h-72 lg:h-[400px] relative flex justify-center items-center'>
            <img src={header} className='z-0 absolute top-0 object-top object-cover w-full h-full grayscale brightness-200' />
            <div className='z-10 bg-amber-500/[.9] relative inline-block px-10 py-5'>
                <h1 className='text-white text-5xl opacity-100'>
                  Sign up <i className="fa-solid fa-fire-flame text-4xl"></i>
                </h1>
            </div>
        </section>

        {/* Seperator */}
        <div className='h-1 bg-amber-400'></div>

        {/* Form Section */}
        <div className='px-5 bg-slate-100'>
          <div className='container mx-auto'>
            <div></div>
            <div></div>
          </div>
        </div>

    </div>
  )
}

export default SignUpForm
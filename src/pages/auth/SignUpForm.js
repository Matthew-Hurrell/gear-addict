import React from 'react'
import header from '../../assets/gear-addict-page-header.jpg';

const SignUpForm = () => {
  return (
    <section>
        <div className='h-[400px] relative flex justify-center items-center'>
            <img src={header} className='z-0 absolute top-0 object-top object-cover w-full h-full grayscale brightness-200' />
            <div className='z-10 bg-amber-400 relative inline-block'>
                <h1 className='text-white text-5xl opacity-100'>Sign up</h1>
            </div>
        </div>
        <div>

        </div>
    </section>
  )
}

export default SignUpForm
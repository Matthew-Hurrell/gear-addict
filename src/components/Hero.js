import React from 'react'
import header from '../assets/gear-addict-page-header.jpg';

const Hero = (props) => {

    const {title} = props;

    return (
        <section className='h-52 md:h-72 lg:h-[400px] relative flex justify-center sm:justify-end items-center'>
            <img 
                src={header} 
                className='z-0 absolute top-0 object-top object-cover w-full h-full grayscale brightness-200'
                alt="Black and white fender amplifier with drumkit in the background" 
            />
            <div className='z-10 bg-amber-500/[.9] relative inline-block px-10 py-5 h-full flex justify-center items-center sm:mr-36'>
                <h1 className='text-white text-4xl md:text-5xl opacity-100'>
                    {title} <i className="fa-solid fa-fire-flame text-4xl"></i>
                </h1>
            </div>
        </section>
    )
}

export default Hero
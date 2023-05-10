import React from 'react'
import header from '../assets/gear-addict-home-hero.jpeg';

const HomeHero = () => {

    return (
        <section className='h-52 md:h-72 lg:h-[700px] relative flex justify-center sm:justify-start items-center'>
            <img
                src={header}
                className='z-0 absolute top-0 object-center object-cover w-full h-full'
                alt="Black and white fender amplifier with drumkit in the background" 
            />

            <div className='z-10 bg-amber-500/[.9] relative inline-block px-10 py-5 h-full flex flex-col justify-center items-start sm:ml-36'>
                <h1 className='text-white text-4xl md:text-5xl opacity-100 mb-2'>
                    Gear Addict <i className="fa-solid fa-fire-flame text-4xl"></i>
                </h1>
                <h2 className='text-white text-2xl'>Discover // Organise // Elevate</h2>
            </div>
        </section>
    )
}

export default HomeHero
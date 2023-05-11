import React from 'react'
import header from '../assets/gear-addict-home-hero.jpeg';

const HomeHero = () => {

    return (
        <section className='h-96 md:h-[500px] lg:h-[700px] relative flex justify-start items-start md:items-center'>
            <img
                src={header}
                className='z-0 absolute top-0 object-right lg:object-center object-cover w-full h-full'
                alt="Black and white fender amplifier with drumkit in the background" 
            />

            <div className='flex z-10 bg-amber-500/[.9] relative inline-block px-5 md:px-10 py-5 w-full md:w-auto md:h-full flex-col justify-center items-start md:ml-10 lg:ml-36'>
                <h1 className='text-center w-full md:w-auto  md:text-left text-white text-3xl md:text-5xl opacity-100 mb-1 md:mb-3'>
                    Gear Addict <i className="fa-solid fa-fire-flame text-3xl md:text-4xl"></i>
                </h1>
                <h2 className='text-white w-full md:w-auto text-xl md:text-2xl text-center md:text-left'>Discover // Organise // Elevate</h2>
            </div>
        </section>
    )
}

export default HomeHero
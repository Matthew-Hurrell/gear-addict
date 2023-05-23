import React from 'react'
import header from '../assets/gear-addict-page-header.jpg';
import Righeader from '../assets/gear-addict-hero-2.jpg';

const Hero = (props) => {

    const {title, righeader} = props;

    return (
        <section className='h-52 md:h-72 lg:h-[400px] relative items-center'>
            {righeader ? (
                    <img 
                        src={Righeader}
                        className='z-0 absolute top-0 object-center object-cover w-full h-full grayscale'
                        alt="Black and white fender amplifier" 
                />
                ) : (
                    <img
                        src={header}
                        className='z-0 absolute top-0 object-top object-cover w-full h-full grayscale brightness-200'
                        alt="Black and white fender amplifier with drumkit in the background" 
                    />
                )
            }
            <div className='h-full sm:px-5'>
                <div className='sm:container mx-auto flex justify-center sm:justify-start h-full'>
                    <div className='z-10 bg-amber-500/[.9] relative inline-block w-full sm:w-auto sm:px-10 py-5 flex justify-center items-center h-full'>
                        <h1 className='text-white text-4xl lg:text-5xl opacity-100'>
                            {title} <i className="fa-solid fa-fire-flame text-3xl lg:text-4xl"></i>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
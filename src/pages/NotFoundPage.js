import React from 'react';
import BrokenGuitars from '../assets/gear-addict-broken-instruments.jpeg';

const NotFoundPage = () => {
  return (
    <section className='bg-white px-5 py-12 lg:py-24'>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='bg-zinc-800 flex justify-center items-center py-10 px-10'>
            <h2 className='text-white text-2xl'>Sorry, the page you're looking for doesn't exist!</h2>
          </div>
          <div>
            <img src={BrokenGuitars} alt="Illustration of broken instruments" className="w-full h-full object-center object-cover"></img>
          </div>
        </div>
    </section>
  )
}

export default NotFoundPage
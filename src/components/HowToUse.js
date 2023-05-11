import React from 'react';
import image_1 from '../assets/gear-addict-how-to-use-1.png';

const HowToUse = () => {
  return (
    <section className='bg-slate-100 px-5 py-12 lg:py-24'>
      <div className='container mx-auto'>
        <h2 className='text-3xl lg:text-4xl mb-16'>How to use Gear Addict</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>

          {/* Card One */}
          <div className='relative'>
            <h4 className='w-full text-lg lg:text-xl bg-zinc-800 text-white text-right py-3 px-3'>Sign up for a profile</h4>
            <div className='w-full h-64 sm:h-96 md:h-[500px] lg:h-80 xl:h-96 2xl:h-[450px]'>
              <img className='w-full h-full object-center object-cover' src={image_1} alt="Gear Addict sign up page" />
            </div>
            <div className='h-12 w-12 rounded-full absolute top-[-10px] md:top-[-23px] left-[-10px] md:left-[-10px] md:left-[-23px] flex items-center justify-center text-2xl bg-amber-400'>
              1
            </div>
          </div>

          {/* Card Two */}
          <div className='relative'>
            <h4 className='w-full text-lg lg:text-xl bg-zinc-800 text-white text-right py-3 px-3'>Add and catalogue your gear</h4>
            <div className='w-full h-64 sm:h-96 h-96 md:h-[500px] lg:h-80 xl:h-96 2xl:h-[450px]'>
              <img className='w-full h-full object-center object-cover' src={image_1} alt="Gear Addict sign up page" />
            </div>
            <div className='h-12 w-12 rounded-full absolute top-[-10px] md:top-[-23px] left-[-10px] md:left-[-23px] flex items-center justify-center text-2xl bg-amber-400'>
              2
            </div>
          </div>

          {/* Card Three */}
          <div className='relative'>
            <h4 className='w-full text-lg lg:text-xl bg-zinc-800 text-white text-right py-3 px-3'>Add and share your live rig</h4>
            <div className='w-full h-64 sm:h-96 h-96 md:h-[500px] lg:h-80 xl:h-96 2xl:h-[450px]'>
              <img className='w-full h-full object-center object-cover' src={image_1} alt="Gear Addict sign up page" />
            </div>
            <div className='h-12 w-12 rounded-full absolute top-[-10px] md:top-[-23px] left-[-10px] md:left-[-23px] flex items-center justify-center text-2xl bg-amber-400'>
              3
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowToUse
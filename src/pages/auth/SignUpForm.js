import React from 'react'
import header from '../../assets/gear-addict-page-header.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
        <div className='px-5 bg-slate-100 py-24'>
          <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7'>

            {/* Sign Up Form */}
            <div>
            <form className='bg-white border-zinc-400 border-2'>
              <div>
                <label>
                  Username:
                  <input type="text" name="username" />
                </label>
              </div>
              <div>
                <label>
                  Email Address:
                  <input type="email" name="email" />
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input type="password" name="password" />
                </label>
              </div>
              <div>
                <label>
                  Confirm Password:
                  <input type="password" name="password2" />
                </label>
              </div>
              <p>Already have an account? 
                <Link className="ml-1" to="/signin">Sign In</Link>
              </p>
              <input type="submit" value="Submit" />
            </form>
            </div>

            {/* Image */}
            <div>

            </div>
          </div>
        </div>

    </div>
  )
}

export default SignUpForm
import React from 'react';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import axios from 'axios';

const Footer = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
    } catch (err) {
      // console.log(err);
    }
  }

  const loggedOutIcons = (
    <>

      {/* Sign In */}
      <li>
        <NavLink
          to="/signin"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          activeClassName={styles.Active}
        >
          <i className="fa-solid fa-right-to-bracket text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Sign In</span>
        </NavLink>
      </li>

      {/* Sign Up */}
      <li>
        <NavLink
          to="/signup"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          activeClassName={styles.Active}
        >
          <i className="fa-solid fa-user-plus text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Sign Up</span>
        </NavLink>
      </li>
    </>
  );

  const loggedInIcons = (
    <>

      {/* Feed */}
      <li>
        <NavLink
          to="/feed"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          activeClassName={styles.Active}
        >
          <i className="fa-solid fa-hand-horns text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Feed</span>
        </NavLink>
      </li>

      {/* Gear */}
      <li>
        <NavLink
          to="/gear"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          activeClassName={styles.Active}
        >
          <i className="fa-solid fa-guitars text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Gear</span>
        </NavLink>
      </li>

      {/* Rigs */}
      <li>
        <NavLink
          to="/rigs"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          activeClassName={styles.Active}
        >
          <i className="fa-solid fa-amp-guitar text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Rigs</span>
        </NavLink>
      </li>

      {/* Saved */}
      <li>
        <NavLink
          to="/saved"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          activeClassName={styles.Active}
        >
          <i className="fa-solid fa-star text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Saved</span>
        </NavLink>
      </li>

      {/* Home */}
      <li>
        <NavLink
          to="/"
          exact
          className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
          onClick={handleSignOut}
        >
          <i className="fa-solid fa-right-from-bracket text-xl mr-2 lg:mr-0"></i>
          <span className='group-hover:underline underline-offset-8 decoration-2'>Sign out</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <section className='bg-zinc-800 flex flex-col items-center justify-center relative text-white border-t-4 border-amber-400 mt-auto'>

      {/* Heading and Nav Menu */}
      <div className='py-14'>
        <h3 className='text-3xl'>Gear Addict</h3>
        <nav className='text-white lg:mr-8 p-5'>
          <ul className='flex flex-col lg:flex-row items-center gap-5 tracking-wide'>

            {/* Home */}
            <li>
              <NavLink
                to="/"
                exact
                className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                activeClassName={styles.Active}
              >
                <i className="fa-solid fa-house-chimney text-xl mr-2 lg:mr-0"></i>
                <span className='group-hover:underline underline-offset-8 decoration-2'>Home</span>
              </NavLink>
            </li>

            {/* Latest */}
            <li>
              <NavLink
                to="/latest"
                exact
                className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                activeClassName={styles.Active}
              >
                <i className="fa-solid fa-fire-flame text-xl mr-2 lg:mr-0"></i>
                <span className='group-hover:underline underline-offset-8 decoration-2'>Latest</span>
              </NavLink>
            </li>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </ul>
        </nav>
      </div>

      {/* Flame Logo */}
      <div className='absolute right-0 right-8 bottom-15'>
        <i className="fa-solid fa-fire-flame text-zinc-600 text-9xl"></i>
      </div>

      {/* Copyright and Socials */}
      <div className='bg-zinc-950 flex items-center justify-center lg:justify-end w-full'>
        <div className='flex px-5 py-4 gap-5 flex-col lg:flex-row'>
          <p>Copyright Gear Addict 2023 <i className="fa-regular fa-copyright ml-1"></i>
          </p>
          <p>
            Designed and Developed by Matthew Hobbs-Hurrell
            <div className='lg:inline-block mt-1 lg:mt-0'>

              {/* GitHub */}
              <a href="https://github.com/Matthew-Hurrell" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github mx-3 hover:scale-110 transition"></i>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/matthew-hobbs-hurrell/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin mr-3 hover:scale-110 transition"></i>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/matthewhobbshurrell" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook hover:scale-110 transition"></i>
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
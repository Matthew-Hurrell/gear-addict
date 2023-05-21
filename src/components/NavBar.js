import React from 'react';
import logo from '../assets/gear-addict-logo-white.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/NavBar.module.css';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {isActive, setIsActive, ref, handleClick} = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
          await axios.post('/dj-rest-auth/logout/');
          setCurrentUser(null);
          setIsActive(false);
          removeTokenTimestamp();
        } catch(err){
          console.log(err);
        }
    };

    const profileIcon = (
        <NavLink
            onClick={handleClick}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text='Profile' />
        </NavLink>
    );

    const addGearIcon = (
        <NavLink
            onClick={handleClick}
            to="/gear/create"
            className='text-white flex items-center hover:text-amber-400 hover:scale-105'
        >
            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
            Add gear
        </NavLink>
    );

    const addRigIcon = (
        <NavLink
            onClick={handleClick}
            to="/rig/create"
            className='text-white flex items-center hover:text-amber-400 hover:scale-105'
        >
            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
            Add rig
        </NavLink>
    );

    const loggedOutIcons = (
        <>
            <li>
                <NavLink 
                    onClick={handleClick}
                    to="/signin"
                    exact
                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                    activeClassName={styles.Active}
                >
                    <i className="fa-solid fa-right-to-bracket text-xl mr-2 lg:mr-0"></i>
                    <span className='group-hover:underline underline-offset-8 decoration-2'>Sign In</span>
                </NavLink>
            </li>
            <li>
                <NavLink 
                    onClick={handleClick}
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
             <li>
                <NavLink
                    onClick={handleClick}
                    to="/feed"
                    exact
                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                    activeClassName={styles.Active}
                >
                    <i className="fa-solid fa-hand-horns text-xl mr-2 lg:mr-0"></i>
                    <span className='group-hover:underline underline-offset-8 decoration-2'>Feed</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={handleClick}
                    to="/gear"
                    exact
                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                    activeClassName={styles.Active}
                >
                    <i className="fa-solid fa-guitars text-xl mr-2 lg:mr-0"></i>
                    <span className='group-hover:underline underline-offset-8 decoration-2'>Gear</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={handleClick}
                    to="/rigs"
                    exact
                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                    activeClassName={styles.Active}
                > 
                    <i className="fa-solid fa-amp-guitar text-xl mr-2 lg:mr-0"></i>
                    <span className='group-hover:underline underline-offset-8 decoration-2'>Rigs</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={handleClick}
                    to="/saved"
                    exact
                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                    activeClassName={styles.Active}
                >
                    <i className="fa-solid fa-star text-xl mr-2 lg:mr-0"></i>
                    <span className='group-hover:underline underline-offset-8 decoration-2'>Saved</span>
                </NavLink>
            </li>
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
        <div ref={ref}>
            <div className='bg-zinc-800 flex items-center justify-between px-5 py-2.5 relative'>
                <div className='flex items-center gap-8'>
                    <NavLink 
                        onClick={handleClick}
                        to="/"
                    >
                        <div className='h-16'>
                            <img src={logo} alt="Gear Addict Logo" className='object-center object-contain h-full w-full' />
                        </div>
                    </NavLink>
                    <div className='flex items-center gap-8 tracking-wide text-white'>
                        {currentUser && addGearIcon}
                        {currentUser && addRigIcon}
                    </div>
                </div>
                <div className={`transition-all z-50 duration-500 overflow-hidden flex lg:p-0 absolute bg-zinc-800 top-[90px] right-0 left-0 flex-col lg:static lg:flex-row items-center lg:max-h-none ${isActive ? 'max-h-[999px]' : 'max-h-0'}`}>
                    <nav className='text-white lg:mr-8 p-5'>
                        <ul className='flex flex-col lg:flex-row items-center gap-5 tracking-wide'>
                            <li>
                                <NavLink 
                                    to="/"
                                    exact
                                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                                    activeClassName={styles.Active}
                                    onClick={handleClick}
                                >
                                    <i className="fa-solid fa-house-chimney text-xl mr-2 lg:mr-0"></i>
                                    <span className='group-hover:underline underline-offset-8 decoration-2'>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/latest"
                                    exact
                                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                                    activeClassName={styles.Active}
                                    onClick={handleClick}
                                >
                                    <i className="fa-solid fa-fire-flame text-xl mr-2 lg:mr-0"></i>
                                    <span className='group-hover:underline underline-offset-8 decoration-2'>Latest</span>
                                </NavLink>
                            </li>
                            {currentUser ? loggedInIcons : loggedOutIcons}
                        </ul>
                    </nav>
                    <div className='text-white hidden lg:block'>
                        {currentUser && profileIcon}
                    </div>
                </div>
                <div className='flex lg:hidden items-center'>
                    <div className='text-white mr-8'>
                        {currentUser && profileIcon}
                    </div>
                    <button 
                        onClick={handleClick}
                        className='nav-toggle'
                    >
                        <i className="fa-solid fa-bars text-white text-3xl"></i>
                    </button>
                </div>
            </div>
            <div className='h-1 bg-amber-400'></div>
        </div>
    )
}

export default NavBar
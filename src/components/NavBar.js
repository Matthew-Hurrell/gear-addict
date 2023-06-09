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

    const { isActive, setIsActive, ref, handleClick } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post('/dj-rest-auth/logout/');
            setCurrentUser(null);
            setIsActive(false);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    // Profile Icon
    const profileIcon = (
        <NavLink
            onClick={handleClick}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text='Profile' />
        </NavLink>
    );

    // Add Gear Icon
    const addGearIcon = (
        <NavLink
            onClick={handleClick}
            to="/gear/create"
            className='text-white flex items-center hover:text-amber-400 hover:scale-105'
            activeClassName={styles.Active}
        >
            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
            Add gear
        </NavLink>
    );

    // Add Rig Icon
    const addRigIcon = (
        <NavLink
            onClick={handleClick}
            to="/rig/create"
            className='text-white flex items-center hover:text-amber-400 hover:scale-105'
            activeClassName={styles.Active}
        >
            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
            Add rig
        </NavLink>
    );

    // Logged Out Icons
    const loggedOutIcons = (
        <>

            {/* Sign In */}
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

            {/* Sign Up */}
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

    // Logged In Icons
    const loggedInIcons = (
        <>

            {/* Feed */}
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

            {/* Gear */}
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

            {/* Rigs */}
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

            {/* Saved */}
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

            {/* Sign Out */}
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

            {/* Add Gear Icon */}
            <li className='lg:hidden'>
                {currentUser && addGearIcon}
            </li>

            {/* Add Rig Icon */}
            <li className='lg:hidden'>
                {currentUser && addRigIcon}
            </li>
        </>
    );

    return (
        <div ref={ref}>
            <div className='bg-zinc-800 flex items-center justify-between px-5 py-2.5 relative'>
                <div className='flex items-center gap-8'>

                    {/* Gear Addict Logo */}
                    <NavLink
                        onClick={handleClick}
                        to="/"
                    >
                        <div className='h-16 w-36'>
                            <img src={logo} alt="Gear Addict Logo" className='object-center object-contain h-full w-full' />
                        </div>
                    </NavLink>

                    {/* Add Gear & Rig Icons */}
                    <div className='lg:flex items-center gap-8 tracking-wide text-white hidden'>
                        {currentUser && addGearIcon}
                        {currentUser && addRigIcon}
                    </div>
                </div>
                <div className={`transition-all z-50 duration-500 overflow-hidden border-amber-400 lg:border-0 flex lg:p-0 absolute bg-zinc-800 top-[88px] right-0 left-0 flex-col lg:static lg:flex-row items-center lg:max-h-none ${isActive ? 'max-h-[999px] border-b-4' : 'max-h-0 border-0'}`}>
                    <nav className='text-white lg:mr-8 p-5'>
                        <ul className='flex flex-col lg:flex-row items-center gap-5 tracking-wide'>

                            {/* Home */}
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

                            {/* Latest */}
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

                    {/* Profile */}
                    <div className='text-white hidden lg:block'>
                        {currentUser && profileIcon}
                    </div>
                </div>

                <div className='flex lg:hidden items-center'>

                    {/* Profile on small screens */}
                    <div className='text-white mr-5 md:mr-8'>
                        {currentUser && profileIcon}
                    </div>

                    {/* Mobile Menu Button */}
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
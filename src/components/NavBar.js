import React, { useState } from 'react';
import logo from '../assets/gear-addict-test-logo.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/NavBar.module.css';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();

    const profileIcon = (
        <NavLink
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <div className='h-14 w-14'>
                <img 
                    className='object-center object-cover h-full w-full rounded-full' 
                    src={currentUser?.profile_image} 
                />
            </div>
            <div className='tracking-wide mt-1'>
                Profile
            </div>
        </NavLink>
    );
    const addGearIcon = (
        <NavLink
            to="/gear/create"
            className='text-white flex items-center hover:text-amber-400 hover:scale-105'
        >
            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
            Add gear
        </NavLink>
    );
    const addRigIcon = (
        <NavLink
        to="/rig/create"
            className='text-white flex items-center hover:text-amber-400 hover:scale-105'
        >
            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
            Add rig
        </NavLink>
    )
    const loggedOutIcons = (
        <>
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
            <li>
                <NavLink
                    to="/"
                    exact
                    className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'
                    onClick={() => {}}
                >
                    <i className="fa-solid fa-star text-xl mr-2 lg:mr-0"></i>
                    <span className='group-hover:underline underline-offset-8 decoration-2'>Sign out</span>
                </NavLink>
            </li>
        </>
    );

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      setIsActive(current => !current);
    };

    return (
        <div>
            <div className='bg-zinc-800 flex items-center justify-between px-5 py-2.5 relative'>
                <div className='flex items-center gap-8'>
                    <NavLink to="/">
                        <div className='h-20'>
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
                    <button onClick={handleClick} className='nav-toggle'>
                        <i className="fa-solid fa-bars text-white text-3xl"></i>
                    </button>
                </div>
            </div>
            <div className='h-1 bg-amber-400'></div>
        </div>
    )
}

export default NavBar
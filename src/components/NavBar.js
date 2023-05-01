import React, { useState } from 'react';
import logo from '../assets/gear-addict-test-logo.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {

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
                        <a className='text-white flex items-center hover:text-amber-400 hover:scale-105'>
                            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
                            Add gear
                        </a>
                        <a className='text-white flex items-center hover:text-amber-400 hover:scale-105'>
                            <i className="fa-solid fa-circle-plus text-2xl mr-2"></i>
                            Add rig
                        </a>
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
                                <a className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'>
                                    <i className="fa-solid fa-fire-flame text-xl mr-2 lg:mr-0"></i>
                                    <span className='group-hover:underline underline-offset-8 decoration-2'>Latest</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'>
                                    <i className="fa-solid fa-hand-horns text-xl mr-2 lg:mr-0"></i>
                                    <span className='group-hover:underline underline-offset-8 decoration-2'>Feed</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'>
                                <i className="fa-solid fa-guitars text-xl mr-2 lg:mr-0"></i>
                                <span className='group-hover:underline underline-offset-8 decoration-2'>Gear</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'> 
                                    <i className="fa-solid fa-amp-guitar text-xl mr-2 lg:mr-0"></i>
                                    <span className='group-hover:underline underline-offset-8 decoration-2'>Rigs</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex flex-row lg:flex-col items-center hover:text-amber-400 hover:scale-105 group'>
                                    <i className="fa-solid fa-star text-xl mr-2 lg:mr-0"></i>
                                    <span className='group-hover:underline underline-offset-8 decoration-2'>Saved</span>
                                </a>
                            </li>
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
                        </ul>
                    </nav>
                    <div className='text-white hidden lg:block'>
                        <div>

                        </div>
                        <a className='tracking-wide'>
                            Profile
                        </a>
                    </div>
                </div>
                <div className='flex lg:hidden items-center'>
                    <div className='text-white mr-8'>
                        <div>

                        </div>
                        <a className='tracking-wide'>
                            Profile
                        </a>
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
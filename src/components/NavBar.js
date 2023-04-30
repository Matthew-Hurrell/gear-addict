import React, { useState } from 'react';
import logo from '../assets/gear-addict-test-logo.png';

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      setIsActive(current => !current);
    };

    return (
        <div className='bg-zinc-800 flex items-center justify-between px-5 py-2.5 relative'>
            <div className='flex items-center gap-8'>
                <div className='h-20'>
                    <img src={logo} className='object-center object-contain h-full w-full' />
                </div>
                <div className='hidden lg:flex items-center gap-8'>
                    <a className='text-white flex items-center'>
                        <i className="fa-solid fa-circle-plus text-white text-2xl mr-2"></i>
                        Add gear
                    </a>
                    <a className='text-white flex items-center'>
                        <i className="fa-solid fa-circle-plus text-white text-2xl mr-2"></i>
                        Add rig
                    </a>
                </div>
            </div>
            <div className={`p-5 lg:p-0 absolute bg-zinc-800 bottom-[-280px] right-0 left-0 flex-col-reverse lg:static lg:flex-row items-center ${isActive ? 'flex' : 'hidden lg:flex'}`}>
                <nav className='text-white lg:mr-8'>
                    <ul className='flex flex-col lg:flex-row items-center gap-5'>
                        <li>
                            <a>
                                Home
                            </a>
                        </li>
                        <li>
                            <a>
                                Latest
                            </a>
                        </li>
                        <li>
                            <a>
                                Feed
                            </a>
                        </li>
                        <li>
                            <a>
                                Gear
                            </a>
                        </li>
                        <li>
                            <a>
                                Rigs
                            </a>
                        </li>
                        <li>
                            <a>
                                Saved
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='text-white hidden lg:block'>
                    <div>

                    </div>
                    <a>
                        Profile
                    </a>
                </div>
            </div>
            <div className='flex lg:hidden items-center'>
                <div className='text-white mr-8'>
                    <div>

                    </div>
                    <a>
                        Profile
                    </a>
                </div>
                <button onClick={handleClick} className='nav-toggle'>
                    <i className="fa-solid fa-bars text-white text-3xl"></i>
                </button>
            </div>
        </div>
    )
}

export default NavBar
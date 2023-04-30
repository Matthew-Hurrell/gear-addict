import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-zinc-800 flex items-center justify-between px-5 py-2.5'>
            <div>
                <div></div>
                <div className='flex items-center gap-8'>
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
            <div className='flex items-center'>
                <nav className='text-white mr-8'>
                    <ul className='flex items-center gap-5'>
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
                <div className='text-white'>
                    <div>

                    </div>
                    <a>
                        Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
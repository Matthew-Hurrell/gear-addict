import React from 'react';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const DropdownMenu = ({ handleEdit, handleDelete }) => {
    const { isActive, ref, handleClick } = useClickOutsideToggle();
    
    return (
        <div ref={ref} className='absolute top-2.5 right-3'>

            {/* Dropdown Toggle */}
            <button
                aria-label="Dropdown Menu"
                onClick={handleClick}
                className='text-2xl rounded-full bg-white text-gray-600 h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center'
            >
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>

            {/* Dropdown Menu */}
            <div className={`shadow-2xl z-50 flex absolute p-3 gap-6 bg-white right-0 top-14 ${isActive ? 'block' : 'hidden'}`}>

                {/* Edit */}
                <button
                    aria-label='edit'
                    onClick={handleEdit}
                >
                    <i className="hover:scale-105 fa-solid fa-pen-to-square text-2xl text-zinc-800"></i>
                </button>

                {/* Delete */}
                <button
                    aria-label='delete'
                    onClick={handleDelete}
                >
                    <i className="hover:scale-105 fa-solid fa-trash-can text-2xl text-red-600"></i>
                </button>

            </div>
        </div>
    )
};

export function ProfileEditDropdown({ id }) {
    const { isActive, ref, handleClick } = useClickOutsideToggle();
    const history = useHistory();

    return (
        <div ref={ref} className='absolute top-2.5 right-3'>

            {/* Dropdown Toggle */}
            <button
                aria-label="Dropdown Menu"
                onClick={handleClick}
                className='text-2xl rounded-full bg-white text-gray-600 h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center'
            >
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>

            {/* Dropdown Menu */}
            <div className={`shadow-2xl z-50 flex border-2 border-amber-400 absolute p-3 gap-6 bg-white right-0 top-14 ${isActive ? 'block' : 'hidden'}`}>

                {/* Edit Profile */}
                <button
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit profile"
                >
                    <i className="hover:scale-105 fa-solid fa-pen-to-square text-2xl text-zinc-800"></i>
                </button>

                {/* Edit Username */}
                <button
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit username"
                >
                    <i className="fa-solid fa-user-pen hover:scale-105 text-2xl text-zinc-800"></i>
                </button>

                {/* Edit Password */}
                <button
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit password"
                >
                    <i className="fa-solid fa-lock-keyhole hover:scale-105 text-2xl text-zinc-800"></i>
                </button>
            </div>
        </div>
    );
}

export default DropdownMenu
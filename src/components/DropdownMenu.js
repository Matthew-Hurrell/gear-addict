import React from 'react'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const DropdownMenu = ({handleEdit, handleDelete}) => {
    const {isActive, setIsActive, ref, handleClick} = useClickOutsideToggle();
    return (
        <div ref={ref} className='absolute top-2.5 right-3'>
            <button 
                onClick={handleClick} 
                className='text-2xl rounded-full bg-white text-gray-600 h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center'
            >
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div className={`shadow-2xl z-50 flex absolute p-3 gap-6 bg-white left-3 top-14 ${isActive ? 'block' : 'hidden'}`}>

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
}

export default DropdownMenu
import React from 'react'

const Avatar = ({ src, text }) => {

    return (
        <>
            <div className='h-14 w-14'>
                <img
                    className='object-center object-cover h-full w-full rounded-full'
                    src={src}
                    alt='Profile avatar'
                />
            </div>
            <div className='tracking-wide mt-1 hidden lg:block'>
                {text}
            </div>
        </>
    )
}

export default Avatar
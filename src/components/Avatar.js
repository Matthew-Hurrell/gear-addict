import React from 'react'

const Avatar = ({src, height = 14, width = 14, text}) => {

    return (
        <>
            <div className={`h-${height} w-${width}`}>
                <img 
                    className='object-center object-cover h-full w-full rounded-full' 
                    src={src}
                    alt='Profile avatar'
                />
            </div>
            <div className='tracking-wide mt-1'>
                {text}
            </div>
        </>
    )
}

export default Avatar
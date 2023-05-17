import React from 'react'

const CategoryBadge = (props) => {
    const {
        guitar,
        bass,
        keyboard,
        amplifier,
        drums,
        dj,
        studio,
        live,
        orchestra,
        band,
        lights,
        accessories,
    } = props;

    return (
        <div className="absolute right-2 bottom-2 rounded-full h-10 w-10 bg-white flex items-center justify-center">
            {guitar && <i className="fa-solid fa-guitar text-2xl fill-black"></i>}
            {bass && <i className="fa-solid fa-guitar-electric text-2xl fill-black"></i>}
            {keyboard && <i className="fa-solid fa-piano-keyboard text-2xl fill-black"></i>}
            {amplifier && <i className="fa-solid fa-amp-guitar text-2xl fill-black"></i>}
            {drums && <i className="fa-solid fa-drum text-2xl fill-black"></i>}
            {dj && <i className="fa-solid fa-head-side-headphones text-2xl fill-black"></i>}
            {studio && <i className="fa-solid fa-speakers text-2xl fill-black"></i>}
            {live && <i className="fa-solid fa-microphone-lines text-2xl fill-black"></i>}
            {orchestra && <i className="fa-solid fa-trumpet text-2xl fill-black"></i>}
            {band && <i className="fa-solid fa-guitars text-2xl fill-black"></i>}
            {lights && <i className="fa-solid fa-lights-holiday text-2xl fill-black"></i>}
            {accessories && <i className="fa-solid fa-music text-2xl fill-black"></i>}
        </div>
    )
}

export default CategoryBadge
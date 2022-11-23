import React from 'react'

export default function Title({ title, className, bg }) {
    return (
        <div className={`${className} flex justify-center items-center relative `}>
            <p className='uppercase text-8xl md:text-9xl opacity-10 font-bold select-none'>{bg}</p>
            <div className="absolute top-0">
                <h1 className='uppercase text-4xl font-bold z-50'>{title}</h1>
                <div className="absolute w-32 h-[6px] rounded-full bg-opacity-20 bg-primary mt-2 overflow-hidden -bottom-[12px] left-1/2 -translate-x-1/2">
                    <div className="absolute h-full w-[6px] rounded-full bg-primary top-0 animate-slidePoint"></div>
                </div>
            </div>
        </div>
    )
}

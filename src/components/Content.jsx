import React from 'react'
import Title from './Title'

export default function Content({ children, title = "", titleBg = "" }) {
    return (
        <section className='w-full h-full  relative bg-gray-900 min-h-screen py-32'>
            <div className="w-full h-full relative">
                <Title title={title} className="" bg={titleBg} />
                {children}
            </div>

        </section>
    )
}

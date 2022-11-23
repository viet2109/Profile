import React from 'react'
import Title from './Title'
import background from '../assets/images/herosection-bg.png'
export default function Content({ children, title = "", titleBg = "" }) {
    return (
        <section className='w-full h-full  relative bg-section min-h-screen py-32 ' style={{ backgroundImage: `url(${background})` }}>
            <div className="relative">
                <Title title={title} className="" bg={titleBg} />
                {children}
            </div>

        </section>
    )
}

import React from 'react'
import Title from './Title'
import background from '../assets/images/herosection-bg.png'
export default function Content({ children, title = "", titleBg = "" }) {
    return (
        <section className='py-20 w-full h-full  relative bg-section min-h-screen md:py-32 overflow-hidden ' style={{ backgroundImage: `url(${background})` }}>
            <div className="relative">
                <Title title={title} className="mb-4" bg={titleBg} />
                {children}
            </div>

        </section>
    )
}

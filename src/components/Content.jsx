import Title from './Title'
import background from '../assets/images/herosection-bg.png'
import DarkModeIcon from './DarkModeIcon'
import { useEffect, useState } from 'react'
import { useDarkMode } from '../hooks'
export default function Content({ children, title = "", titleBg = "", ...props }) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    return (
        <section {...props} className='py-20 w-full  relative bg-section md:py-32 overflow-hidden dark:bg-section-dark transition duration-500 dark:text-text-darkMode'>
            <div className="absolute bg-red-600 w-[300px] h-[300px]  top-1/2 left-1/4 skew-x-12 rounded-full bg-opacity-5 blur-2xl"></div>
            <div className="absolute bg-green-500 w-[300px] h-[300px]  right-1/4 skew-x-12 rounded-full bg-opacity-5 blur-2xl"></div>
            <div className="relative">
                <Title title={title} className="mb-4" bg={titleBg} />
                {children}
            </div>
            {/* <DarkModeIcon onChange={() => toggleDarkMode(!isDarkMode)} /> */}

        </section>
    )
}

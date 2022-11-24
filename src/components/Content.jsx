import Title from './Title'
import background from '../assets/images/herosection-bg.png'
import DarkModeIcon from './DarkModeIcon'
import { useEffect, useState } from 'react'
import { useDarkMode } from '../hooks'
export default function Content({ children, title = "", titleBg = "" }) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    return (
        <section className='py-20 w-full h-full  relative bg-section min-h-screen md:py-32 overflow-hidden dark:bg-section-dark transition duration-500 dark:text-text-darkMode' style={{ backgroundImage: !isDarkMode && `url(${background})` }}>
            <div className="relative">
                <Title title={title} className="mb-4" bg={titleBg} />
                {children}
            </div>
            <DarkModeIcon onChange={() => toggleDarkMode(!isDarkMode)} />

        </section>
    )
}

import React from 'react'
import { useEffect } from 'react'
import AboutPage from '../pages/AboutPage'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import ResumePage from '../pages/ResumePage'
import WorksPage from '../pages/WorksPage'

export default function MainLayout({ children }) {
    useEffect(() => {
        window.document.documentElement.classList.add("dark")
    }, [])
    return (
        <div className='relative '>
            <HomePage />
            <AboutPage />
            <ResumePage />
            <WorksPage />
            <Contact />
        </div>
    )
}

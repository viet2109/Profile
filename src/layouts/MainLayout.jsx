import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import AboutPage from '../pages/AboutPage'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import ResumePage from '../pages/ResumePage'
import WorksPage from '../pages/WorksPage'

export default function MainLayout({ children }) {
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

import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import AboutPage from '../pages/AboutPage'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import ResumePage from '../pages/ResumePage'
import WorksPage from '../pages/WorksPage'

export default function MainLayout({ children }) {
    return (
        <div className=' w-full relative'>
            <div className=" md:relative md:w-screen left-0 w-full">
                <HomePage />
                <AboutPage />
                <ResumePage />
                <WorksPage />
                <Contact />
            </div>
        </div>
        //     <div className="left-[80px] absolute w-menu-w h-full">
        //     
        // </div>
    )
}

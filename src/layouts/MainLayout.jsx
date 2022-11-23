import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

export default function MainLayout({ children }) {
    return (
        <div className=' w-full relative'>
            <Sidebar />
            <div className="md:left-sidebar-w md:relative md:w-menu-w left-0 w-full">
                {children}
            </div>
        </div>
        //     <div className="left-[80px] absolute w-menu-w h-full">
        //     
        // </div>
    )
}

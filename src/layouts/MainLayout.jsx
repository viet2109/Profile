import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

export default function MainLayout({ children }) {
    return (
        <div className='relative w-full'>
            <Sidebar />
            <div className="left-sidebar-w absolute w-menu-w">
                {children}
            </div>
        </div>
        //     <div className="left-[80px] absolute w-menu-w h-full">
        //     
        // </div>
    )
}

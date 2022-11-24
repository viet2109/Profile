import React, { useState } from 'react'
import { useRef } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon } from '../icons'
import './Sidebar.css'
export default function Sidebar() {
    const listMenu = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About', href: '/about' },
        { id: 3, label: 'Resume', href: '/resume' },
        { id: 4, label: 'Works', href: '/works' },
        { id: 5, label: 'Contact', href: '/contact' },
    ]
    const menuRef = useRef()
    const navigate = useNavigate()
    const handleClickMenu = () => {
        // setShowMenu(showMenu => !showMenu)
        if (menuRef.current.style.top === '0px') menuRef.current.style.top = "-100vh"
        else menuRef.current.style.top = "0px"
    }
    const handleClickMenuItem = () => {
        menuRef.current.style.top = "-100vh"
    }
    const handleClickAvatar = () => {
        navigate("/")
    }
    return (
        <>
            {/* navbar mobile */}
            <div className="fixed top-1/2 -translate-y-1/2 w-10 h-10 bg-primary flex items-center justify-center bg-opacity-20 md:hidden z-[999] dark:text-text-darkMode">
                <AiOutlineArrowRight size={30} onClick={handleClickMenu} />
            </div>
            <div ref={menuRef} className="w-screen fixed md:w-menu-w h-screen bg-section top-[calc(-100vh)] z-[9999999] md:left-[80px] flex flex-col duration-500 dark:bg-section-dark">
                <div className='absolute right-4 top-4 bg-primary rounded-full p-1 bg-opacity-20 text-primary' onClick={handleClickMenu}>
                    <IoCloseSharp size={30} />
                </div>
                {listMenu.map((item) => (
                    <Link to={item.href} onClick={handleClickMenuItem} key={item.id} className={`menu-item text-lg md:text-6xl uppercase font-bold  h-full w-full flex basis-1/5 items-center justify-center md:border-l border-blur md:hover:basis-2/5   hover:text-primary transition-all duration-500 cursor-pointer hover:stroke-none`}>
                        <span className='menu-title '>{item.label}</span>
                    </Link>
                ))}
            </div>
            <div className="top-0 h-full z-50 md:fixed bg-white dark:bg-gray-900 dark:text-section transition duration-500 ">

                <div className=' w-20 h-full md:flex flex-col justify-around items-center border-r hidden'>
                    <div className="h-[40%]">
                        <div className="w-[60px] h-[60px] rounded-full bg-primary relative " onClick={handleClickAvatar}>
                            <img src="/images/avatar.jpg" alt="" className='w-[54px] h-[54px] rounded-full absolute top-[3px] left-[3px]' />
                        </div>
                    </div>
                    <div className="" onClick={handleClickMenu}>
                        <MenuIcon className=' text-4xl' />
                    </div>
                    <div className="h-[40%] w-full flex justify-center items-end">
                        <p className='rotate-[180deg] textvertical'>
                            <span>2022</span>
                            <span className='hover:text-primary cursor-pointer'>_ndvu</span>
                        </p>
                    </div>
                </div>




            </div>

        </>
    )
}

import React, { useState } from 'react'
import { useRef } from 'react'
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
        <div className="top-0 h-full z-50 fixed ">
            <div className='w-20 h-full bg-side-bar flex flex-col justify-around items-center border-r'>
                <div className="h-[40%]">
                    <div className="w-[60px] h-[60px] rounded-full bg-primary relative " onClick={handleClickAvatar}>
                        <img src="/images/avatar.jpg" alt="" className='w-[54px] h-[54px] rounded-full absolute top-[3px] left-[3px]' />
                    </div>
                </div>
                <div className="" onClick={handleClickMenu}>
                    <MenuIcon className='text-white text-4xl' />
                </div>
                <div className="h-[40%] w-full flex justify-center items-end">
                    <p className='rotate-[180deg] textvertical'>
                        <span>2022</span>
                        <span className='hover:text-primary cursor-pointer'>_ndvu</span>
                    </p>
                </div>
            </div>
            <div ref={menuRef} className="absolute w-menu-w h-full bg-side-bar top-[calc(-100vh)] z-[9999999] left-[80px] flex flex-col duration-500">
                {listMenu.map((item) => (
                    <Link to={item.href} onClick={handleClickMenuItem} key={item.id} className={`menu-item text-lg md:text-6xl uppercase font-bold  h-full w-full flex basis-1/5 items-center justify-center md:border-l border-blur md:hover:basis-2/5   hover:text-primary transition-all duration-500 cursor-pointer`}>
                        <span className='menu-title'>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

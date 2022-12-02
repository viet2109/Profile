/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react'
import { FacbookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '../components/icons'
import TextTyping from '../components/TextTyping'
import bg from '../assets/images/herosection-bg.png'
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai'
import { useDarkMode } from '../hooks'
import DarkModeIcon from '../components/DarkModeIcon'
import { VscThreeBars } from 'react-icons/vsc'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
export default function HomePage() {
    const socialList = [
        {
            id: 1,
            icon: <FacbookIcon />,
            href: 'https://www.facebook.com/duyvu.2610',
        },
        {
            id: 2,
            icon: <InstagramIcon />,
            href: 'https://www.instagram.com/ndvuuujjj/',
        },
        { id: 3, icon: <GithubIcon />, href: 'https://github.com/Duyvu2610' },
        {
            id: 4,
            icon: <LinkedinIcon />,
            href: 'https://www.linkedin.com/in/vụ-nguyễn-duy-737888256/',
        },
    ]
    useEffect(() => {
        const fadeIn = document.querySelectorAll(
            '.fade-in'
        )
        for (let i = 0; i < fadeIn.length; ++i) {
            setTimeout(() => {
                fadeIn[i].style.cssText = 'opacity: 1; transform: translateY(0)'
            }, 300 + i * 600)
        }
    }, [])
    const listMenu = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About', href: '/about' },
        { id: 3, label: 'Resume', href: '/resume' },
        { id: 4, label: 'Works', href: '/works' },
        { id: 5, label: 'Contact', href: '/contact' },
    ]
    const menuRef = useRef()

    const handleShowMenu = () => {
        menuRef.current.style.top === "-100vh" ? menuRef.current.style.top = "0px" : menuRef.current.style.top = "-100vh"

    }
    return (
        <div className='w-screen h-screen  relative bg-section overflow-hidden dark:bg-section-dark dark:text-text-darkMode bg-opacity-80 transition duration-500'>
            {/* back ground image */}
            <div className="w-full h-full absolute top-0 left-0 flex">
                <div className="border-r h-full flex-1 border-gray-800"></div>
                <div className="border-r h-full flex-1 border-gray-800"></div>
                <div className="border-r h-full flex-1 border-gray-800"></div>
                <div className="border-r h-full flex-1 border-gray-800"></div>
                <div className="border-r h-full flex-1 border-gray-800"></div>
            </div>
            {/* header */}
            <div className="w-full flex justify-between relative px-4 items-center dark:text-primary py-2">
                <p className='uppercase text-4xl font-bold'>duyvu</p>
                <ul className=' gap-7 hidden lg:inline-flex header-list text-white'>
                    {
                        listMenu.map(e => (
                            <li className='inline-block align-middle' key={e.id}>
                                <a href="#" className='group relative inline-block py-6 text-sm font-medium uppercase tracking-wider before:text-primary'>
                                    {e.label}
                                    <span className='absolute bottom-4 left-0 w-full h-[2px] rounded bg-primary origin-top-right scale-0 transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                                </a>

                            </li>
                        ))
                    }

                </ul>
                <span className='p-2 dark:bg-primary rounded dark:bg-opacity-20 cursor-pointer lg:hidden' onClick={handleShowMenu}
                >
                    <VscThreeBars size={24} />
                </span>
                <Button className='hidden lg:block'>Hire me</Button>
            </div>
            {/* menu */}
            <div ref={menuRef} className="w-screen fixed md:w-menu-w h-screen bg-section top-[calc(-100vh)] z-[9999999] md:left-[80px] flex flex-col duration-500 dark:bg-section-dark">
                <div className='absolute right-4 top-4 bg-primary rounded-full p-1 bg-opacity-20 text-primary' onClick={handleShowMenu}>
                    <IoCloseSharp size={30} />
                </div>
                {listMenu.map((item) => (
                    <Link to={item.href} onClick={handleShowMenu} key={item.id} className={`menu-item text-lg md:text-6xl uppercase font-bold  h-full w-full flex basis-1/5 items-center justify-center md:border-l border-blur md:hover:basis-2/5   hover:text-primary transition-all duration-500 cursor-pointer hover:stroke-none`}>
                        <span className='menu-title '>{item.label}</span>
                    </Link>
                ))}
            </div>
            {/* content */}
            <div className="md:w-[60%] absolute absolute-center text-center flex flex-col justify-center w-full px-4 text-gray-300">
                <div className="w-[150px] h-[150px] margin-center relative fade-in duration-500">
                    <div className=" w-full  h-full rounded-full bg-red-400 relative bg-gradient-to-t from-primary to-black animate-rotate"></div>
                    <img src="/images/avatar.jpg" alt="" className='w-[140px] h-[140px] rounded-full absolute top-[5px] left-[5px]' />
                </div>
                <TextTyping />
                <span className=' text-lg fade-in duration-500 mb-7'>
                    I am a frontend web developer. I enjoy coding and the challenge of learning something new
                    everyday. My
                    current goal is to pursue a career in front-end development.
                </span>
                <ul className="inline-flex flex-wrap gap-4 margin-center transition-all duration-500 fade-in">
                    {socialList.map((item) => (
                        <li
                            className="group align-middle w-10 h-10 inline-block border cursor-pointer relative overflow-hidden rounded border-gray-500 dark:border-text-darkMode"
                            key={item.id}
                        >
                            <a href={item.href} target="blank">
                                <span
                                    className="text-lg w-full h-full flex items-center justify-center rounded group-hover:-translate-y-full transition-all duration-500"
                                >
                                    {item.icon}
                                </span>
                            </a>
                            <a href={item.href} target="blank">
                                <span
                                    className="text-lg w-full h-full flex items-center justify-center rounded group-hover:-translate-y-full transition-all duration-500 text-dark-200 bg-primary text-black -mt-[1px] group-hover:mt-[1px]"
                                >
                                    {item.icon}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <p className='uppercase absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center text-gray-400' >
                <AiOutlineArrowDown className='animate-bounce' size={20} />
                <span className='pl-2 text-xs font-semibold'>scroll down</span>
            </p>

        </div>
    )
}

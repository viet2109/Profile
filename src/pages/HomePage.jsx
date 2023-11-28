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
import Header from '../components/Header'
export default function HomePage() {
    const socialList = [
        {
            id: 1,
            icon: <FacbookIcon />,
            href: 'https://www.facebook.com/profile.php?id=100025683498231',
        },
        {
            id: 2,
            icon: <InstagramIcon />,
            href: 'https://www.instagram.com/aoaneft/',
        },
        { id: 3, icon: <GithubIcon />, href: 'https://github.com/viet2109' },
        
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
            <Header />
            {/* content */}
            <div className="md:w-[60%] absolute absolute-center text-center flex flex-col justify-center w-full px-4 text-gray-300">
                <div className="w-[150px] h-[150px] margin-center relative fade-in duration-500">
                    <div className=" w-full  h-full rounded-full bg-red-400 relative bg-gradient-to-t from-primary to-black animate-rotate"></div>
                    <img src="/images/avatar.jpg" alt="" className='w-[140px] h-[140px] rounded-full absolute top-[5px] left-[5px] object-cover' />
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
                            className="group align-middle w-10 h-10 inline-block border cursor-pointer relative overflow-hidden rounded border-gray-200 dark:border-gray-200 dark:border-opacity-10"
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

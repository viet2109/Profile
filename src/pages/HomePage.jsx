/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { FacbookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '../components/icons'
import TextTyping from '../components/TextTyping'
import bg from '../assets/images/herosection-bg.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
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
    return (
        <div className='w-screen h-screen  relative bg-section overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
            {/* <img src="/images/avatar.jpg" alt="" className='w-full h-full object-cover opacity-20 absolute ' /> */}
            <div className="md:w-[60%] absolute absolute-center text-center flex flex-col justify-center w-full px-4">
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
                            className="social-item group align-middle w-10 h-10 inline-block border border-blur cursor-pointer relative overflow-hidden rounded border-black"
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
                                    className="text-lg w-full h-full flex items-center justify-center rounded group-hover:-translate-y-full transition-all duration-500 text-dark-200 bg-primary text-black"
                                >
                                    {item.icon}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

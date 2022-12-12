import React from 'react'
import Content from '../components/Content'
import Title from '../components/Title'
import Button from '../components/Button'
import { useElementOnScreen } from '../hooks/index'
import { useRef } from 'react'
import { useEffect } from 'react'
import resume from '../assets/Resume.pdf'

export default function AboutPage() {
    const info = [
        {
            title: "First Name",
            data: "Vu"
        },
        {
            title: "Last Name",
            data: "Nguyen"
        },
        {
            title: "Age",
            data: "19"
        },
        {
            title: "Nationality",
            data: "Viet Nam"
        },
        {
            title: "Address",
            data: "Thu Duc, Ho Chi Minh City"
        },
        {
            title: "Freelance",
            data: "Available"
        },
        {
            title: "Hobby",
            data: "Music,..."
        },

    ]

    const ref = useRef()
    const imgref = useRef()
    const dot1Ref = useRef()
    const isOnScrenn = useElementOnScreen(ref)
    useEffect(() => {
        // window.addEventListener('scroll', log)
        // return () => window.removeEventListener('scroll', log)
        setTimeout(() => {
            dot1Ref.current.style.transform = `translateX(${imgref.current.offsetWidth}px)`

        }, 2000)
    })
    // const log = () => {
    //     // console.log(imgref.current.offsetWidth);
    //     dot1Ref.current.style.transform = `translateX(${imgref.current.offsetWidth}px)`
    // }
    return (
        <div className='w-full min-h-screen relative' id='about' ref={ref}>
            <Content title='about me' titleBg='about'>
                <div className="flex w-full md:px-20 px-4 flex-wrap">
                    <div className=" overflow-hidden md:flex-1 bg-primary h-96 w-96 flex justify-center items-center rounded-lg bg-opacity-20 p-3 relative" ref={imgref}>
                        <img src="/images/giphy.gif" alt="" className='w-full h-full object-cover' />
                        <span className='w-10 h-3 absolute top-0 left-0 bg-gradient-to-r from-transparent  to-primary rounded-full transition duration-500 aboutsection-dot1 ' ref={dot1Ref}></span>
                        {/* <span className='w-3 h-10 absolute top-0 right-0 bg-gradient-to-b from-transparent  to-primary rounded-full transition duration-500 aboutsection-dot2 '></span>
                        <span className='w-10 h-3 absolute bottom-0 right-0 bg-gradient-to-l from-transparent  to-primary rounded-full transition duration-500 aboutsection-dot3 '></span>
                        <span className='w-3 h-10 absolute bottom-0 left-0 bg-gradient-to-t from-transparent  to-primary rounded-full transition duration-500 aboutsection-dot4 '></span> */}

                    </div>
                    <div className="md:flex-1 md:ml-10 pt-4 ">
                        <h2 className='font-bold text-2xl'>Hi, I am<span className='text-primary ml-2'>Vu Nguyen</span></h2>
                        <ul className='pl-5 text-lg font-semibold text-gray-500 my-2'>
                            {
                                info.map((e, i) => (
                                    <li className=' marker:text-primary list-disc mb-2' key={i}>
                                        <span className='min-w-[120px] inline-block'>{e.title}</span>
                                        : &nbsp;
                                        <span className=''>{e.data}</span>
                                    </li>
                                ))
                            }

                        </ul>
                        <Button href={resume} className='inline-block' download="DuyVu-Resume">Download resume</Button>
                    </div>
                </div>
            </Content>
        </div>
    )
}

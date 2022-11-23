import React from 'react'
import Content from '../components/Content'
import Title from '../components/Title'

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
    return (
        <div className='w-full min-h-screen relative'>
            <Content title='about me' titleBg='about'>
                <div className="flex w-full md:px-20 px-4 flex-wrap">
                    <div className=" w-full md:flex-1 bg-primary h-96 flex justify-center items-center rounded-lg bg-opacity-20">
                        <img src="/images/giphy.gif" alt="" className='w-[96%] object-cover h-[364px]' />
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
                        <button className='uppercase px-4 py-3 rounded-md font-semibold text-sm tracking-wide  bg-primary mt-2 bg-opacity-80 hover:bg-opacity-100 duration-300'>Download resume</button>
                    </div>
                </div>
            </Content>
        </div>
    )
}

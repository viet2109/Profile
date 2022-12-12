import React from 'react'
import Button from '../components/Button'
import Content from '../components/Content'
import { DiReact } from 'react-icons/di'
import { SiTailwindcss, SiGithub } from 'react-icons/si'
import { GiEarthAsiaOceania } from 'react-icons/gi'
export default function WorksPage() {
    const projects = [
        {
            id: 1,
            video: "/videos/tiktok.mp4",
            name: "-Tiktok-",
            desc: "First project code by Reactjs",
            demo: "https://duyvu-toptop.vercel.app/",
            repo: "https://github.com/Duyvu2610/toptop",
            skills: [<DiReact size={30} color="#52b0c9" key={1} />, <SiTailwindcss size={30} color="#52b0c9" key={2} />],
            achievements: `<ul class='list-disc'><li>Know how to use a react hooks</li><li>Using API first time</li><li>Using a few library: Tippy.js/react, React Router</li/><li>Know about intersection observer</li></ul>`
        },


    ]
    return (
        <Content title='my works' titleBg='works' id='works'>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:p-10 pb-20">
                {
                    projects.map(e => (
                        <div className="rounded-md flex flex-col bg-white p-5 group dark:bg-gray-800" key={e.id} >
                            <div className="relative overflow-hidden group transition duration-500">
                                <video src={e.video} muted autoPlay loop className='px-4 ' />
                            </div>
                            <p className='py-4 font-bold text-2xl'>{e.name}</p>
                            <p className=' '>{e.desc}</p>
                            <p className='flex gap-2 py-2 items-center text-lg'><span>Skills: </span>{e.skills}</p>
                            <div>
                                <span>Achievements and skills gained: </span>
                                <div className='pl-6' dangerouslySetInnerHTML={{ __html: e.achievements }}></div>
                            </div>
                            <div className="flex w-full justify-center gap-6 py-4">
                                <Button href={e.demo}>
                                    <GiEarthAsiaOceania size={24} />
                                    <p>Demo</p>
                                </Button>
                                <Button href={e.repo}>
                                    <SiGithub size={24} />
                                    <p>Github</p>
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div >
            <Button href='https://github.com/Duyvu2610' className='inline-block left-1/2 -translate-x-1/2'>See all</Button>
        </Content >
    )
}

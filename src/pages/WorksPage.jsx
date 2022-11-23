import React from 'react'
import { useRef } from 'react'
import Content from '../components/Content'
import { ImgIcon, LinkIcon } from '../components/icons'
export default function WorksPage() {
    const projects = [
        {
            id: 1,
            video: "/videos/tiktok.mp4",
            name: "-Tiktok-",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates similique eius perspiciatis quam dolor dolorem, soluta accusamus nam quidem ex magni fuga porro commodi alias esse in est repellendus iusto!",
            demo: "https://duyvu-toptop.vercel.app/",
            repo: "https://github.com/Duyvu2610/toptop"
        },

    ]
    return (
        <Content title='my works' titleBg='works'>
            <div className="grid grid-cols-2 gap-10 p-10 pb-20">
                {
                    projects.map(e => (
                        <div className="rounded-md flex flex-col bg-white p-5 group" key={e.id} >
                            <div className="relative overflow-hidden group">
                                <video src={e.video} muted autoPlay loop className='px-4 ' />
                                <div className="absolute w-full h-full bg-bg bg-opacity-50  flex justify-center items-center z-[99999] -left-full slide top-0 transition delay-500 group-hover:left-0">
                                    <a className="w-10 h-10 rounded-full bg-primary text-bg flex justify-center items-center mr-4" href={e.demo}>
                                        <ImgIcon />
                                    </a>
                                    <a className="w-10 h-10 rounded-full bg-primary text-bg flex justify-center items-center " href={e.repo}>
                                        <LinkIcon />
                                    </a>
                                </div>
                            </div>
                            <p className='py-4 font-bold text-2xl'>{e.name}</p>
                            <p className=' '>{e.desc}</p>
                        </div>
                    ))
                }

            </div >
            <a className='uppercase px-5 text-sm font-medium rounded transition opacity-80 hover:opacity-100 py-3 bg-primary text-bg   absolute bottom-2 left-1/2 -translate-x-1/2' href='https://github.com/Duyvu2610'>see all</a>
        </Content >
    )
}

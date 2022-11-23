import React from 'react'
import ContactCard from '../components/ContactCard'
import Content from '../components/Content'
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import Form from '../components/Form'

function Contact() {
    const cards = [
        {
            id: 1,
            icon: <BsTelephone />,
            title: "Contact on phone",
            desc: "+84 32 902 8367"
        },
        {
            id: 2,
            icon: <AiOutlineMail />,
            title: "Contact on mail",
            desc: "duyvu2612003@gmail.com"
        },
        {
            id: 3,
            icon: <MdOutlineLocationOn />,
            title: "Contact on address",
            desc: "Thu Duc City, Ho Chi Minh City"
        },
    ]
    return (
        <Content title='contact us' titleBg='contact'>
            <div className="p-4 flex gap-10 flex-wrap">
                <div className="w-[40%]  pt-20 flex-1">
                    <h4 className='mb-4 font-extrabold text-xl'>Contact Information</h4>
                    <p className='mb-3 text-base'>Hi, you can easily contact me through the following ways:</p>
                    <span class="w-20 h-1 inline-block bg-primary bg-opacity-20 rounded-full my-4"></span>
                    {
                        cards.map(e => (
                            <ContactCard icon={e.icon} title={e.title} desc={e.desc} key={e.id} />
                        ))
                    }
                </div>
                <div className="md:w-[60%] w-full">
                    <Form />
                </div>
            </div>
        </Content>

    )
}

export default Contact
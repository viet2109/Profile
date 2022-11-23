import React from 'react'

const ContactCard = ({ icon, title = "", desc = "" }) => {
    return (
        <div className='w-full rounded-md p-5 flex items-center transition hover:border-primary border-[2px] border-black mb-4 bg-white bg-opacity-5'>
            <div className="w-16 h-16 rounded-full bg-primary bg-opacity-20 text-primary flex items-center justify-center text-2xl mr-4">
                {icon}
            </div>
            <div className="flex-1 flex flex-col">
                <p className='font-medium text-lg mb-2'>{title}</p>
                <p className='text-gray-500'>{desc}</p>
            </div>
        </div>
    )
}

export default ContactCard
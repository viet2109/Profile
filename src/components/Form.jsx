import React from 'react'

const Form = () => {
    return (
        <div className='w-full rounded-lg px-4 py-6 bg-white bg-opacity-5'>
            <div className="">Name</div>
            <input type="text" className='p-3 my-2 bg-transparent border-[2px] border-black rounded-md mb-4 focus:border-primary text-[rgb(156 163 175)] transition duration-150 outline-none w-full' placeholder='Enter your name...' />
            <div className="">Email</div>
            <input type="email" className='p-3 my-2 bg-transparent border-[2px] border-black rounded-md mb-4 focus:border-primary text-[rgb(156 163 175)] transition duration-150 outline-none w-full' placeholder='Enter your email...' />
            <div className="">Subject</div>
            <input type="text" className='p-3 my-2 bg-transparent border-[2px] border-black rounded-md mb-4 focus:border-primary text-[rgb(156 163 175)] transition duration-150 outline-none w-full' placeholder='Enter subject...' />
            <div className="">Message</div>
            <textarea type="text" className='p-3 my-2 bg-transparent border-[2px] border-black rounded-md mb-4 focus:border-primary text-[rgb(156 163 175)] transition duration-150 outline-none w-full resize-none' placeholder='Enter your message...' cols={1} rows={5} autoComplete='off' />
            <button className='uppercase px-4 py-3 rounded-md font-semibold text-sm tracking-wide  bg-primary mt-2 bg-opacity-80 hover:bg-opacity-100 duration-300 inline-block text-black'>Send email</button>

        </div>
    )
}

export default Form
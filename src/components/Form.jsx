import React from 'react'

const Form = () => {
    const forms = [
        {
            title: 'Name',
            type: "text",
            placeholder: 'Enter your name...'
        },
        {
            title: 'Email',
            type: "email",
            placeholder: 'Enter your email...'
        },
        {
            title: 'Subject',
            type: "text",
            placeholder: 'Enter subject...'
        },
    ]
    return (
        <div className='w-full rounded-lg px-4 py-6 bg-white bg-opacity-5 '>
            {
                forms.map((e, i) => (
                    <>
                        <div className="">{e.title}</div>
                        <input type={e.type} className='p-3 my-2 bg-transparent border-[2px] border-black rounded-md mb-4 focus:border-primary text-[rgb(156 163 175)] transition duration-150 outline-none w-full dark:border-section dark:border' placeholder={e.placeholder} />
                    </>
                ))
            }

            <div className="">Message</div>
            <textarea type="text" className='p-3 my-2 bg-transparent border-[2px] border-black rounded-md mb-4 focus:border-primary text-[rgb(156 163 175)] transition duration-150 outline-none w-full dark:border-section resize-none dark:border' placeholder='Enter your message...' cols={1} rows={5} autoComplete='off' />
            <button className='uppercase px-4 py-3 rounded-md font-semibold text-sm tracking-wide  bg-primary mt-2 bg-opacity-80 hover:bg-opacity-100 duration-300 inline-block text-black dark:text-white'>Send email</button>

        </div>
    )
}

export default Form
import React from 'react'

function Button({ children, className, href = '', onClick, ...props }) {
    let Tem = href !== '' ? 'a' : 'button'
    return (
        <Tem className={`${className} px-5 py-3 bg-primary text-black rounded overflow-hidden uppercase transition duration-500 font-medium text-sm btn relative
        `} onClick={onClick} href={href} {...props}>
            <div className='flex justify-center items-center gap-2'>{children}</div>
        </Tem>
    )
}

export default Button
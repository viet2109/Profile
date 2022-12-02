import React from 'react'

function Button({ children, className, onClick }) {
    return (
        <button className={`px-5 py-3 bg-primary text-black rounded overflow-hidden uppercase transition duration-500 font-medium text-sm btn relative 
        ${className}`} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}

export default Button
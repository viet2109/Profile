import React, { useRef } from 'react'
import { useDarkMode } from '../hooks';

function DarkModeIcon({ onChange }) {
    const darkMode = useRef()
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    const handleSwitchMode = () => {
        toggleDarkMode(!isDarkMode);
    }

    return (
        <label className='absolute top-3 right-3' >
            <input type="checkbox" onClick={handleSwitchMode} ref={darkMode} onChange={onChange} />
            <span className='check dark:bg-section bg-section-dark'></span>
        </label>
    )
}

export default DarkModeIcon
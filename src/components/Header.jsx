import React, { useEffect, useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { VscThreeBars } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
    const listMenu = [
        { id: 1, label: 'Home', href: '' },
        { id: 2, label: 'About', href: 'about' },
        { id: 3, label: 'Resume', href: 'resume' },
        { id: 4, label: 'Works', href: 'works' },
        { id: 5, label: 'Contact', href: 'contact' },
    ]
    const menuRef = useRef()
    const header = useRef()
    const handleShowMenu = () => {
        menuRef.current.style.top === "-100vh" ? menuRef.current.style.top = "0px" : menuRef.current.style.top = "-100vh"

    }
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <>
            {/* header */}
            <div className="header-section w-full flex justify-between px-4 items-center dark:text-primary py-2 " ref={header}>
                <p className='uppercase text-4xl font-bold'>duyvu</p>
                <ul className=' gap-7 hidden lg:inline-flex header-list text-white'>
                    {
                        listMenu.map(e => (
                            <li className='inline-block align-middle' key={e.id}>
                                <a href={`#${e.href}`} className='group relative inline-block py-6 text-sm font-medium uppercase tracking-wider before:text-primary'>
                                    {e.label}
                                    <span className='absolute bottom-4 left-0 w-full h-[2px] rounded bg-primary origin-top-right scale-0 transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
                                </a>

                            </li>
                        ))
                    }

                </ul>
                <span className='p-2 dark:bg-primary rounded dark:bg-opacity-20 cursor-pointer lg:hidden' onClick={handleShowMenu}
                >
                    <VscThreeBars size={24} />
                </span>
                <Button className='hidden lg:block'>Hire me</Button>
            </div>
            {/* menu */}
            <div ref={menuRef} className="w-screen fixed md:w-menu-w h-screen bg-section top-[calc(-100vh)] z-[9999999] md:left-[80px] flex flex-col duration-500 dark:bg-section-dark">
                <div className='absolute right-4 top-4 bg-primary rounded-full p-1 bg-opacity-20 text-primary' onClick={handleShowMenu}>
                    <IoCloseSharp size={30} />
                </div>
                {listMenu.map((item) => (
                    <Link to={item.href} onClick={handleShowMenu} key={item.id} className={`menu-item text-lg md:text-6xl uppercase font-bold  h-full w-full flex basis-1/5 items-center justify-center md:border-l border-blur md:hover:basis-2/5   hover:text-primary transition-all duration-500 cursor-pointer hover:stroke-none`}>
                        <span className='menu-title '>{item.label}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Header
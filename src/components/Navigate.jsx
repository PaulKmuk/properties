import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/data'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Navigate = () => {

    const [ links, setLinks ] = useState(navLinks)
    const [ openMenu, setOpenMenu ] = useState(false)
    const [ scrollY, setScrollY ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY
            setScrollY(currentPosition)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const setTopNavigation = () => {
        return scrollY >= 100 ? 'top-2' : 'top-8'
    }


    const openSubMenu = (id) => {
        let changeElement = links.find(el => id === el.id)
        changeElement = {...changeElement, isOpenSubMenu: !changeElement.isOpenSubMenu}
        const newArray = links.map(el => {
            if(el.id === id) return changeElement
            if(el.id !== id) return el
        })
        setLinks(newArray)
        if(changeElement.subMenu.length === 0) setOpenMenu(false)
    }

    return (
        <div className={`fixed z-10 ${setTopNavigation()} w-full text-gray-300 px-2`}>
            <div className='flex max-w-[1400px] bg-teal-900 mx-auto items-center relative rounded-2xl max-md:py-4 px-6'>

                {/* ---- Logo Icon ---- */}
                <a href='/' className="flex items-end cursor-pointer text-slate-100 scale-in-center">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold fontLogo">properties</h1>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mb-1 ml-1"></div>
                </a>

                {/* ---- Navigation ---- */}
                <div className='ml-auto gap-4 hidden md:flex scale-in-center'>
                    {links.map(el => (
                        <div
                            className='relative group h-full py-5'
                            key={el.id}
                        >
                            <NavLink
                                className='hover:text-gray-100 font-bold text-xl'
                                to={el.path}
                            >
                                {el.label}
                            </NavLink>
                            {el.subMenu.length !== 0 && (
                                <div className='hidden group-hover:flex hover:flex flex-col absolute top-14 w-[200px]'>
                                    {el.subMenu.map(el => (
                                        <NavLink
                                            to={el.path}
                                            className='bg-slate-100 text-black text-lg font-semibold py-4 pl-6 hover:bg-slate-200'
                                            key={el.label}
                                        >
                                            {el.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ---- Burger Icon ---- */}
                <GiHamburgerMenu
                    onClick={() => setOpenMenu(true)}
                    className='text-2xl md:hidden ml-auto scale-in-center'/>


                {/* ---- Menu To Small Device ---- */}
                {openMenu && (
                    <div className='fixed h-screen w-full min-[300px]:w-[300px] top-0 right-0 bg-slate-100 z-50 text-black slide-in-bottom'>

                        {/* ---- Close Menu Icon ---- */}
                        <div 
                            onClick={() => setOpenMenu(false)}
                            className='w-full px-10 pt-10'
                        >
                            <FaX className='text-2xl ml-auto'/>
                        </div>

                        <div className='flex flex-col text-xl py-6 pl-16 pr-8'>
                            {links.map(el => (
                                <div
                                    key={el.id}
                                >
                                    <div 
                                        onClick={() => openSubMenu(el.id)}
                                        className='flex justify-between py-2'>
                                        <NavLink
                                            className='w-full'
                                            to={el.path}
                                        >
                                            {el.label}
                                        </NavLink>
                                        {el.subMenu.length !== 0 && (
                                            <div className='text-3xl'>
                                                {el.isOpenSubMenu 
                                                    ? <MdOutlineKeyboardArrowUp />
                                                    : <MdOutlineKeyboardArrowDown />}
                                            </div>
                                        )}
                                    </div>
                                    {el.isOpenSubMenu && (
                                        <div className='flex flex-col'>
                                            {el.subMenu.map(el => (
                                                <div onClick={() => setOpenMenu(false)} key={el.label} className='py-2 pl-10'>
                                                    <NavLink
                                                        to={el.path}
                                                    >
                                                        {el.label}
                                                    </NavLink>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navigate
import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/data'

const Navigate = () => {
    return (
        <div className='fixed z-50 top-8 w-full text-slate-100 px-10'>
            <div className='flex max-w-[1300px] bg-teal-900 mx-auto items-center relative rounded-2xl py-4 px-6'>

                <a href='/' className="flex items-end cursor-pointer">
                    <h1 className="text-4xl font-bold fontLogo">properties</h1>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mb-1 ml-1"></div>
                </a>

                <div className='ml-auto flex gap-4'>
                    {navLinks.map(el => (
                        <NavLink
                            key={el.id}
                        >
                            {el.label}
                        </NavLink>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Navigate
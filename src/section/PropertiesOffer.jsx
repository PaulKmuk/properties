import React from 'react'
import { serviceOffer } from '../data/data'


const PropertiesOffer = () => {
    return (
        <div className='bg-slate-200 text-slate-800'>
            <div className='max-w-[1400px] mx-auto px-4 py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6'>

                {serviceOffer.slice(0,4).map((el, index) => (
                    <div
                        className='bg-slate-100 py-14 flex flex-col items-center px-10 text-center gap-6'
                        key={index}
                    >
                        <el.icon className='text-4xl md:text-6xl'/>
                        <h3 className='font-bold text-xl md:text-2xl'>{el.title}</h3>
                        <p className='text-slate-500 text-sm sm:text-md'>{el.description}</p>
                        <a className='hoverLink cursor-pointer font-semibold text-sm sm:text-md'>zobacz więcej</a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default PropertiesOffer
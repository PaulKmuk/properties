import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

    const socialMedia = [{icon: FaFacebookF}, {icon: FaTwitter}, {icon: FaLinkedinIn}, {icon: FaInstagram}, {icon: FaYoutube}]

    return (
        <div className='w-full h-[300px] bg-teal-900 flex flex-col justify-center items-center gap-10 sm:gap-20'>
            <div className='flex flex-wrap gap-1 sm:gap-4'>
                {socialMedia.map((el, index) => (
                    <div
                        className='bg-slate-50 w-12 h-12 rounded-full flex justify-center items-center text-xl border-2 border-teal-900 cursor-pointer text-slate-800 mt-2 hover:mt-0 transition-all duration-200'
                        key={index}
                    >
                        <el.icon />
                    </div>
                ))}
            </div>
            <div className='text-center text-slate-100 text-sm'>
                <p className='pb-2'>Copyright ©2023. All Rights Reserved.</p>
                <p>Designed with love by <span className='font-black italic'>p.kmuk</span></p>
            </div>
        </div>
    )
}

export default Footer
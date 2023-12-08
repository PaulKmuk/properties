import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { agents } from '../data/data'

const OurAgents = () => {

    const socialMedia = [{icon: FaFacebookF}, {icon: FaTwitter}, {icon: FaLinkedinIn}, {icon: FaInstagram}]

    return (
        <div className='bg-slate-100 text-slate-800'>
            <div className='max-w-[1400px] mx-auto px-4 py-10 md:py-20'>
                <h1 className='max-w-[650px] text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold fontHero py-8 md:py-10'>Nasi Agenci</h1>
                <p className='max-w-[650px] text-center mx-auto text-sm md:text-lg lg:text-xl py-2 md:py-4'>Poznaj nasz zespół doświadczonych agentów, gotowych pomóc Ci w poszukiwaniu idealnej nieruchomości. Z pasją i zaangażowaniem, nasi agenci oferują szeroką wiedzę branżową, zapewniając kompleksową obsługę oraz znajdując dla Ciebie wyjątkowe miejsca do życia.</p>
                <div className='grid gap-20 md:flex md:gap-6 py-20'>
                    {agents.map((el, index) => (
                        <div
                            className='bg-slate-50 relative pt-[60px] pb-12 flex flex-col justify-center items-center px-10'
                            key={index}
                        >
                            <div className='max-w-[100px] max-h-[100px] rounded-full overflow-hidden bg-slate-200 mx-auto absolute top-[-50px] right-px left-px'>
                                <img src={el.imagePath}/>
                            </div>
                            <h3 className='mx-auto font-bold text-sm sm:text-lg'>{el.name}</h3>
                            <p>{el.amployee}</p>
                            <p className='py-6 text-center text-sm md:text-base'>{el.description}</p>
                            <div className='flex gap-4 pt-2'>
                                {socialMedia.map((element, index) => (
                                    <div
                                        className='bg-teal-900 text-white w-12 h-12 rounded-full flex justify-center items-center text-xl border-2 border-teal-900 cursor-pointer hover:text-slate-800 hover:bg-slate-50 mt-2 hover:mt-0 transition-all duration-200'
                                        key={index}
                                    >
                                        <element.icon />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurAgents
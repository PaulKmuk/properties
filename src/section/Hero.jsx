import React, { useEffect, useState } from 'react'
import { Button } from '../components'
import photo1 from '../assets/hero/photo1.jpg'
import photo2 from '../assets/hero/photo2.jpg'
import photo3 from '../assets/hero/photo3.jpg'


const Hero = () => {

    const [currentBg, setCurrentBg] = useState(photo1)
    const images = [ photo1, photo2, photo3 ]
    let i = 0

    useEffect(() => {
        const interval = setInterval(()=> {
            const nextBg = images[i]
            setCurrentBg(nextBg)
            i++
            if(i >= images.length) (i = 0)
        }, 4000)
        return () => clearInterval(interval);
    },[])

    return (
        <section
            className='w-full h-screen bg-cover bg-center'
            style={{ backgroundImage: `url(${currentBg})` }}
        >
            <div className='w-full h-full bg-black/60 flex justify-center items-center'>
                
                <div className=' max-w-[700px] px-3'>
                    <h1 className='text-xl sm:text-3xl md:text-4xl pb-2 text-slate-100 font-semibold fontHero tracking-wider'>Najprostszy sposób na znalezienie </h1>
                    <h1 className='text-xl sm:text-3xl md:text-4xl pb-6 text-slate-100 font-semibold fontHero tracking-wider'>wymarzonego domu</h1>
                    <div className='flex gap-4'>
                        <input
                            placeholder='Gdzie mamy szukać?'
                            className='w-full text-sm sm:text-lg md:text-xl px-6 py-3 rounded-lg'/>
                        <Button label='Szukaj' click={() => {}}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
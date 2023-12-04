import React, { useEffect, useState } from 'react'
import { Button } from '../components'
import photo1 from '../assets/hero/photo1.jpg'
import photo2 from '../assets/hero/photo2.jpg'
import photo3 from '../assets/hero/photo3.jpg'


const Hero = () => {

    const images = [
      photo1,
      photo2,
      photo3,
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);
  
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCurrentImage(images[i]);
            i = (i + 1) % images.length;
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className='w-full h-screen relative overflow-hidden z-0'
        >

            {images.map((image, index) => (
                <div
                    key={index}
                    
                >
                    <img
                        src={image}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImage === image ? 'z-10 opacity-100' : 'opacity-0 z-0'}`}
                    />
                </div>
            ))}

            <div className='w-full h-full bg-black/60 flex justify-center items-center relative z-20'>
                
                <div className=' max-w-[700px] px-3 z-20'>
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
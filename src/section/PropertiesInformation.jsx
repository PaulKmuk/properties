import React from 'react'
import { sectionText } from '../data/data'
// import { useInView } from 'react-intersection-observer';

const PropertiesInformation = () => {

    // const [count, setCount] = useState(0);
    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.5,
    // });

    
    // useEffect(() => {
    //     let interval;
    //     if (inView && count < sectionText.statistics[0].count) {
    //         interval = setInterval(() => {
    //             setCount(prevCount => prevCount + 1);
    //         }, 2);
    //     }
    
    //     if (count === sectionText.statistics[0].count) {
    //         clearInterval(interval);
    //     }
    
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [inView, count]);

    return (
        <div className='bg-slate-200 text-slate-800'>
            <div className='max-w-[1400px] mx-auto px-4 py-10 md:py-20'>
                <h2 className='max-w-[650px] text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold fontHero py-8 md:py-10'>{sectionText.title}</h2>
                <p className='max-w-[650px] text-center mx-auto text-sm md:text-lg lg:text-xl py-2 md:py-4'>{sectionText.description}</p>
                <div className='py-10 md:py-20 flex flex-col md:flex-row-reverse gap-10 '>
                    <div className='flex-1'>
                        <img src={sectionText.imagePath}/>
                    </div>
                    <div className='md:w-1/3 p-4 flex flex-col gap-10 lg:gap-20'>
                        {sectionText.subpoints.map((el, index) => (
                            <div
                                key={index}
                                className='flex gap-4'
                            >
                                <div className='w-20 h-20 bg-slate-100 rounded-full flex justify-center items-center text-2xl'>
                                    <el.icon />
                                </div>
                                <div className='flex-1'>
                                    <p className='font-bold text-lg sm:text-xl md:text-2xl'>{el.title}</p>
                                    <p className='py-2 text-sm md:text-lg'>{el.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 p-4'>
                    {sectionText.statistics.map((el, index) => (
                        <div
                            key={index}
                            className='slide-in-bottom text-center py-4'
                        >
                            <p className='text-4xl md:text-6xl fontPrice tracking-wide'>{el.count}</p>
                            <p className='text-sm lg:text-lg text-slate-600'>{el.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PropertiesInformation
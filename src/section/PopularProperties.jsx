import React from 'react'
import Slider from "react-slick";
import { Button } from '../components'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { properties } from '../data/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { MdGarage } from "react-icons/md";

const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    return (
        <div
            className='cursor-pointer text-lg md:text-3xl text-teal-900'
            style={{ ...style, display: "flex"}}
            onClick={onClick}
        >
            <FaArrowAltCircleRight />
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { style, onClick } = props;
    return (
        <div
            className='cursor-pointer text-lg md:text-3xl text-teal-900'
            style={{ ...style, display: "flex" }}
            onClick={onClick}
        >
            <FaArrowAltCircleLeft />
        </div>
    )
}

const PopularProperties = () => {

    const popularProperties = properties.slice(0, 6)

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        className: 'flex items-center py-5 md:py-10',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    }

    const classIconLayout = 'flex items-center gap-2 text-sm md:text-md'

    return (
        <section className='bg-slate-100 text-slate-800'>
            <div className='max-w-[1400px] mx-auto px-4 py-10 md:py-20'>
                <div className='flex justify-between items-center'>
                    <h2 className='fontHero font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl'>Popularne Nieruchomości</h2>
                    <Button click={() => {}} label='Zobacz wszystkie'/>
                </div>

                <Slider {...settings}>
                    {popularProperties.map(el => (
                        <div key={el} className='p-6'>
                            <div className='scale-in-center shadow-xl'>
                                <div>
                                    <img src={el.pathImg}/>
                                </div>
                                <div className='text-teal-900 py-8 px-4'>
                                    <h2 className='text-3xl fontPrice underline pb-4'>{el.priceSell.toLocaleString('pl')} PLN</h2>
                                    <p>{el.adress}</p>
                                    <p className='font-bold text-black'>{el.region}, {el.city}</p>
                                    <div className='flex gap-2 md:gap-6 text-sm sm:text-md flex-wrap py-2'>
                                        <p className={classIconLayout}><FaBed className='text-md md:text-xl'/> {el.layout.room}</p>
                                        <p className={classIconLayout}><FaBath className='text-md md:text-xl'/> {el.layout.bathroom}</p>
                                        <p className={classIconLayout}><MdGarage className='text-md md:text-xl'/> {el.layout.garage ? 'tak' : 'nie'}</p>
                                        <p className={classIconLayout}><FaRulerCombined className='text-sm md:text-xl'/> {el.area} m<sup>2</sup></p>
                                    </div>
                                    <div className='flex justify-end pt-6'>
                                        <Button label='Zobacz' className='md:!py-1 md:!px-3 md:!text-sm'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}

export default PopularProperties
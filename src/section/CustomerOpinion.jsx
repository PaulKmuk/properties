import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { customerOpinion } from '../data/data';
import { FaStar } from "react-icons/fa";

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

const CustomerOpinion = () => {
    
    const stars = [1,2,3,4,5]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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

    return (
        <section className='bg-slate-100 text-slate-800'>
            <div className='max-w-[1400px] mx-auto px-4 py-10 md:py-20'>
                <div className='flex justify-between items-center'>
                    <h2 className='fontHero font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl'>Opinie naszych klientów</h2>
                </div>

                <Slider {...settings}>
                    {customerOpinion.map(el => (
                        <div key={el.name} className='p-6 '>

                            <div className='scale-in-center p-4 flex flex-col'>
                                <div className='flex flex-col w-max'>
                                    <div className='max-w-[100px] max-h-[100px] rounded-full overflow-hidden bg-slate-200 mx-auto'>
                                        <img className='' src={el.imagePath}/>
                                    </div>
                                    <p className='flex gap-1 mx-auto pt-4'>
                                        {stars.map((el, index) => (
                                            <FaStar className='text-yellow-500 text-lg' key={index}/>
                                        ))}
                                    </p>
                                    <p className='mx-auto pb-4 font-bold text-sm sm:text-lg'>{el.name}</p>
                                </div>
                                <p className='max-sm:text-sm '>{el.description}</p>
                            </div>

                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}

export default CustomerOpinion
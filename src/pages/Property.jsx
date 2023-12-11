import React, { useEffect, useState } from 'react'
import { FaBath, FaBed, FaRulerCombined, FaUser, FaPhone } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdGarage } from "react-icons/md";
import { useParams } from 'react-router-dom'
import { properties } from '../data/data'
import loading from '../assets/loading.gif'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { exampleDescriptioHouse } from '../data/data';
import { agents } from '../data/data';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Button } from '../components';

const Property = () => {

    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const agent = agents[Math.floor(Math.random() * (agents.length))]
    const socialMedia = [FaFacebookF, FaInstagram, FaLinkedinIn]
    
    useEffect(() => {
        const findProperty = properties.find(el => el.id === parseInt(id))
        setTimeout(() => {
            setProperty(findProperty)
        },300)
    },[])

    const SampleNextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className='cursor-pointer text-lg md:text-3xl text-teal-900 pl-2 md:p-10'
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
                className='cursor-pointer text-lg md:text-3xl text-teal-900 pr-2 md:p-10'
                style={{ ...style, display: "flex" }}
                onClick={onClick}
            >
                <FaArrowAltCircleLeft />
            </div>
        )
    }

    const settings = {
        customPaging: function(i) {
            return (
                <a className='w-full'>
                    <img className='w-full' src={property.images[i]} />
                </a>
            )
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb hidden md:block",
        className: 'flex items-center xxx',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div className='w-full bg-slate-200 text-slate-600 pb-10'>

            {/* ----- Header -----  */}
            <div
                style={{ backgroundImage: `url(${property ? property.pathImg : loading})` }}
                className='w-full h-[250px] sm:h-[300px] md:h-[400px] bg-center bg-no-repeat'
                >
                <div className='w-full h-full bg-black/80 '>
                    <div className='max-w-[1400px] mx-auto flex items-center h-full'>
                        <div>
                            <h1 className='text-xl sm:text-3xl md:text-4xl pb-2 text-slate-100 font-semibold fontHero tracking-wider px-4 md:px-20'>{property && property.region}, {property && property.city}</h1>
                            <h4 className='text-md sm:text-xl md:text-2xl pb-2 text-slate-100 font-semibold tracking-wider px-4 md:px-20 italic'>{property && property.adress}</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----- Preview -----  */}
            <div className='max-w-[1100px] mx-auto bg-slate-100 px-4 md:px-10 py-10 md:py-20 mt-10 md:mt-20'>
                <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold pb-6 md:pb-10'>Podgląd</h2>
                <div className='border border-b-1 border-slate-300'></div>
                <div className='grid grid-cols-2 md:grid-cols-4 pt-6 md:pt-10'>
                    <div className=''>
                        <p className='font-bold sm:text-xl md:text-2xl pb-2 md:pb-4'>Powierzchnia:</p>
                        <p className='flex items-center gap-4 sm:text-xl'><FaRulerCombined />{property && property.area} m<sup>2</sup></p>
                    </div>
                    <div className=''>
                        <p className='font-bold sm:text-xl md:text-2xl pb-2 md:pb-4'>Sypialnie:</p>
                        <p className='flex items-center gap-4 sm:text-xl'><FaBed /> {property && property.layout.room}</p>
                    </div>
                    <div className=''>
                        <p className='font-bold sm:text-xl md:text-2xl pb-2 md:pb-4'>Łazienki:</p>
                        <p className='flex items-center gap-4 sm:text-xl'><FaBath /> {property && property.layout.bathroom}</p>
                    </div>
                    <div className=''>
                        <p className='font-bold sm:text-xl md:text-2xl pb-2 md:pb-4'>Garaż:</p>
                        <p className='flex items-center gap-4 sm:text-xl'><MdGarage /> {property && property.layout.garage ? 'tak' : 'nie'}</p>
                    </div>
                </div>
            </div>


            {/* ----- Gallery -----  */}

            <div className='max-w-[1100px] mx-auto bg-slate-100 px-4 md:pb-[150px] py-10 md:py-20 mt-10'>
                <Slider {...settings}>
                    {!property ? (<img className='w-20 h-20' src={loading}/>) : property.images.map((el, index) => (
                        <div key={index}>
                            <img src={el}/>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* ----- Description -----  */}

            <div className='max-w-[1100px] mx-auto bg-slate-100 px-4 md:px-10 py-10 md:py-20 mt-10'>
                <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold pb-6 md:pb-10'>Opis</h2>
                <div className='border border-b-1 border-slate-300'></div>
                <p className='md:text-xl pt-6 md:pt-10'>{exampleDescriptioHouse.descriprion}</p>
                <h3 className='font-bold text-lg md:text-2xl py-6 md:py-10'>Parter</h3>
                <ul className='pl-4 md:pl-10'>
                    {exampleDescriptioHouse.groundFloor.map((el, index) => (
                        <li 
                            className='md:text-xl'
                            key={index}
                        >- {el}</li>
                    ))}
                </ul>
                <h3 className='font-bold text-lg md:text-2xl py-6 md:py-10'>Poddasze</h3>
                <ul className='pl-4 md:pl-10'>
                    {exampleDescriptioHouse.firstFloor.map((el, index) => (
                        <li
                            className='md:text-xl'
                            key={index}
                        >- {el}</li>
                    ))}
                </ul>
                <h3 className='font-bold text-lg md:text-2xl py-6 md:py-10'>Ogród</h3>
                <ul className='pl-4 md:pl-10'>
                    {exampleDescriptioHouse.garden.map((el, index) => (
                        <li
                            className='md:text-xl'
                            key={index}
                        >- {el}</li>
                    ))}
                </ul>
                <p className='font-bold text-lg md:text-2xl pt-6 md:pt-10'>Zapraszam na prezentację tego wyjątkowego domu.</p>
            </div>

            {/* ----- Details -----  */}

                <div className='max-w-[1100px] mx-auto bg-slate-100 px-4 md:px-10 py-10 md:py-20 mt-10'>
                    <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold pb-6 md:pb-10'>Szczegóły</h2>
                    <div className='border border-b-1 border-slate-300'></div>
                    <div className='grid md:grid-cols-2 px-4 md:px-6 py-6 md:py-8 bg-blue-100 border border-blue-400 rounded-xl mt-6 md:mt-10 gap-4 md:gap-6 md:gap-x-12'>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Cena:</p>
                            <p className='font-bold md:text-lg'>{property && property.priceSell.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN'})}</p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Powierzchnia:</p>
                            <p className='font-bold md:text-lg'>{property && property.area} m<sup>2</sup></p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Powierzchnia terenu:</p>
                            <p className='font-bold md:text-lg'>2000 m<sup>2</sup></p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Sypialnie:</p>
                            <p className='font-bold md:text-lg'>{property && property.layout.room}</p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Łazienki:</p>
                            <p className='font-bold md:text-lg'>{property && property.layout.bathroom}</p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Garaż:</p>
                            <p className='font-bold md:text-lg'>{property && property.layout.garage ? 'tak' : 'nie'}</p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Rodzaj:</p>
                            <p className='font-bold md:text-lg'>{property && property.type}</p>
                        </div>
                        <div className='flex justify-between border border-b-gray-300'>
                            <p className='md:text-lg'>Typ oferty:</p>
                            <p className='font-bold md:text-lg'>{property && property.typeOffer}</p>
                        </div>
                    </div>
                </div>

            {/* ----- Contact -----  */}

            <div className='max-w-[1100px] mx-auto bg-slate-100 px-4 md:px-10 py-10 md:py-20 mt-10'>
                <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold pb-6 md:pb-10'>Informacje kontaktowe:</h2>
                <div className='border border-b-1 border-slate-300'></div>
                <div className='flex py-6 md:py-10 sm:pl-10'>
                    <div className='w-[80px]'>
                        <img src={agent.imagePath}/>
                    </div>
                    <div className='pl-10'>
                        <p className='flex items-center gap-2 sm:text-xl py-2'><FaUser className='text-2xl'/> {agent.name}</p>
                        <p className='flex items-center gap-2 sm:text-xl py-2'><FaPhone className='text-2xl'/> {agent.number}</p>
                        <div className='flex gap-2 py-1'>
                            {socialMedia.map((Element, index) => (
                                <div 
                                    className='bg-slate-50 w-8 h-8 md:w-10  md:h-10 rounded-full flex justify-center items-center md:text-xl border-2 border-slate-600 cursor-pointer text-slate-600 mt-1 hover:mt-0 transition-all duration-200'
                                    key={index}
                                >
                                    <Element />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold pb-6 md:pb-10'>Zapytaj o tę nieruchomość:</h2>
                <div className='border border-b-1 border-slate-300'></div>
                <form className='pt-6 md:pt-10'>
                    <div className='flex flex-wrap w-full gap-10'>
                        <div className='flex flex-col flex-[1_0_200px]'>
                            <label className='sm:text-lg font-bold p-1'>Imię:</label>
                            <input 
                                className='sm:text-xl px-4 py-2 rounded-md border border-blue-200'
                                required name='name'/>
                        </div>
                        <div className='flex flex-col flex-[1_0_200px]'>
                            <label className='sm:text-lg font-bold p-1'>Telefon</label>
                            <input
                                className='sm:text-xl px-4 py-2 rounded-md border border-blue-200'
                                required name='number'/>
                        </div>
                        <div className='flex flex-col flex-[1_0_200px]'>
                            <label className='sm:text-lg font-bold p-1'>E-mail</label>
                            <input
                                className='sm:text-xl px-4 py-2 rounded-md border border-blue-200' 
                                required name='mail'/>
                        </div>
                    </div>
                    <div className='flex flex-col pt-6 md:pt-10'>
                        <label className='sm:text-lg font-bold p-1'>Wiadomość:</label>
                        <textarea 
                            className='sm:text-xl px-4 py-2 rounded-md border border-blue-200 min-h-[150px]'
                            name='message'/>
                    </div>
                    <div type='submit' className='w-full flex justify-end pr-10 pt-10'>
                        <Button label='Wyślij'/>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Property
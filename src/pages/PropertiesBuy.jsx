import React, { useState } from 'react'
import { bgPages } from '../assets/houses'
import { properties } from '../data/data'
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { MdGarage } from "react-icons/md";
import { Button } from '../components'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PropertiesBuy = () => {

    const [selectedOptionPrice, setSelectedOptionPrice] = useState(0);
    const [selectedOptionArea, setSelectedOptionArea] = useState(0);
    const [propertiesList, setPropertiesList] = useState(properties)
    const [openFilter, setOpenFilter] = useState(false)

    const classIconLayout = 'flex items-center gap-2 text-sm md:text-md'

    const filterPrice = [ 
        {
            id: 0,
            min: 0,
            max: 9999999999,
            label: 'wszystkie' 
        },
        {
            id: 1,
            min: 0,
            max: 300000,
            label: '0 - 300 tys.' 
        },
        {
            id: 2,
            min: 300000,
            max: 450000,
            label: '300 tys. - 450 tys.' 
        },
        {
            id: 3,
            min: 450000,
            max: 600000,
            label: '450 tys. - 600 tys.' 
        },
        {
            id: 4,
            min: 600000,
            max: 750000,
            label: '600 tys. - 750 tys.' 
        },
        {
            id: 5,
            min: 750000,
            max: 1000000,
            label: '750 tys. - 1 mln.' 
        },
        {
            id: 6,
            min: 1000000,
            max: 1250000,
            label: '1 mln. - 1,25 mln.' 
        },
        {
            id: 7,
            min: 1250000,
            max: 9999999999,
            label: '1,25 mln. i więcej ' 
        },
    ]
    const filterArea = [ 
        {
            id: 0,
            min: 0,
            max: 9999999999,
            label: 'wszystkie' 
        },
        {
            id: 1,
            min: 0,
            max: 60,
            label: '0 - 60m2' 
        },
        {
            id: 2,
            min: 60,
            max: 90,
            label: '60m2 - 90m2' 
        },
        {
            id: 3,
            min: 90,
            max: 110,
            label: '90m2 - 110m2' 
        },
        {
            id: 4,
            min: 110,
            max: 130,
            label: '110m2 - 130m2' 
        },
        {
            id: 5,
            min: 130,
            max: 150,
            label: '130m2 - 150m2' 
        },
        {
            id: 6,
            min: 150,
            max: 99999999,
            label: '150m2 i więcej' 
        },
    ]

    const visibleFilter = () => {
        if(openFilter) return 'block'
        return 'hidden md:block'
    }

    const handleFilter = () => {
        let filterProperties = properties
        if(selectedOptionPrice !== 0) {
            const x = filterPrice[selectedOptionPrice]
            filterProperties = properties.filter(el => {
                if(el.priceSell >= x.min && el.priceSell <= x.max) return el
                return null
            })
        }
        if(selectedOptionArea !== 0) {
            const x = filterArea[selectedOptionArea]
            filterProperties = filterProperties.filter(el => {
                if(el.area >= x.min && el.area <= x.max) return el
                return null
            })
        }
        setPropertiesList(filterProperties)
        setOpenFilter(false)
    }

    return (
        <div className='w-full'>

            <div 
                style={{ backgroundImage: `url(${bgPages})` }}
                className='w-full h-[250px] sm:h-[300px] md:h-[400px]'
            >
                <div className='w-full h-full bg-black/80 '>
                    <div className='max-w-[1400px] mx-auto flex items-center h-full'>
                        <h1 className='text-xl sm:text-3xl md:text-4xl pb-2 text-slate-100 font-semibold fontHero tracking-wider px-4 md:px-20'>Nieruchomości - sprzedaż</h1>
                    </div>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto md:flex gap-4 px-4'>


                {/*------ Filtry ------ */}
                <div className='md:w-[250px] py-10 md:py-20'>
                    <div className='bg-teal-800 text-slate-100 font-black mt-6 flex justify-between items-center'>
                        <h3 className='p-2 text-2xl uppercase '>Filtry</h3>
                        {openFilter 
                            ? <IoIosArrowUp onClick={() => setOpenFilter(false)} className='md:hidden text-4xl mr-5 cursor-pointer'/> 
                            : <IoIosArrowDown onClick={() => setOpenFilter(true)} className='md:hidden text-4xl mr-5 cursor-pointer'/>}
                    </div>
                    <div className={visibleFilter()}>
                        <div className='py-5 px-4'>
                            <p className='text-lg font-bold'>Cena</p>
                            {filterPrice.map((el, index) => (
                                <div
                                    className='flex gap-4 text-sm md:text-base py-1'
                                    key={index}
                                >
                                    <input type='checkbox' value={el.id} checked={selectedOptionPrice === el.id} onChange={() => setSelectedOptionPrice(el.id)}/>
                                    <p>{el.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className='pb-5 px-4'>
                            <p className='text-lg font-bold'>Powierzchnia</p>
                            {filterArea.map((el, index) => (
                                <div
                                    className='flex gap-4 text-sm md:text-base py-1'
                                    key={index}
                                >
                                    <input type='checkbox' value={el.id} checked={selectedOptionArea === el.id} onChange={() => setSelectedOptionArea(el.id)}/>
                                    <p>{el.label}</p>
                                </div>
                            ))}
                        </div>
                        <Button label='Filtruj' className='md:text-sm md:py-2' click={() => handleFilter()}/>
                    </div>
                </div>


                {/*------ Lista nieruchomości ------ */}
                <div className='py-10 md:py-20 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 flex-1'>
                    {propertiesList.map((el, index) => (
                        <div key={index} className='p-6'>
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
                                        <Button label='Zobacz' className='md:py-2 md:px-3 md:text-sm'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default PropertiesBuy
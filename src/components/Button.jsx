import React from 'react'

const Button = ({ click, label }) => {
    return (
        <button 
            onClick={() => click()}
            className='text-slate-100 font-semibold bg-teal-900 px-4 py-2 md:px-5 md:py-3 text-sm sm:text-md md:text-xl rounded-full border-2 border-transparent hover:border-slate-100'>
            {label}
        </button>
    )
}

export default Button
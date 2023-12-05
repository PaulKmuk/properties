import React from 'react'

const Button = ({ click, label, className }) => {

    let classButton = 'text-slate-300 font-semibold bg-teal-900 px-4 py-2 md:px-5 md:py-3 text-sm sm:text-md md:text-xl rounded-full border-2 border-transparent hover:text-white '

    if(className !== '') classButton += className

    return (
        <button 
            onClick={() => click()}
            className={classButton}
        >
            {label}
        </button>
    )
}

export default Button
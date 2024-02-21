import React from 'react'

export const Cards = ({ title, handleRef }) => {
    var color = ''
    var mt = ''
    if (title === 'Productos') {
        color = 'bg-cyan-500'
    }
    if (title === 'Operadores') {
        color = 'bg-emerald-500'
        mt = 'mt-10'
    }
    if (title === 'Máquinas') {
        color = 'bg-rose-500'
    }
    if (title === 'Fabricantes') {
        color = 'bg-neutral-500'
        mt = 'mt-10'
    }

    return (
        <div className={`bg-white w-full h-28 drop-shadow-md p-2 rounded-md z-0 ${mt} lg:mt-0 hover:cursor-pointer`}>
            <div className={`${color} w-full h-3/4 -mt-6 rounded-lg overflow-hidden z-10 drop-shadow-sm`}>
                <h3 className="absolute ml-6 mt-1 text-white text-xl font-bold z-50">{title}</h3>
                <img src="fondo.svg" alt="fondo" className='opacity-40 z-20' />
            </div>
            <div className='flex flex-col items-end w-full'>
                <h3 className='text-sm text-gray-400 mr-8'>total</h3>
                <h1 className='text-xl font-semibold mr-2'>1985</h1>

            </div>
        </div>
    )
}
import React from 'react'

export const Button = ({ title, children, onClick }) => {
    return (
        <button
            className='bg-blue-400 text-white text-sm p-2 rounded-md flex items-center gap-2 hover:bg-blue-300'
            onClick={onClick}
        >
            {children}{title}
        </button>
    )
}

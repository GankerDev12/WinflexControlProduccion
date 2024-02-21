import React from 'react'

export const OperadorForm = () => {
    return (
        < >
            <h1 className='font-bold'>Nuevo Operador</h1>
            <form className='mt-2 flex flex-col gap-2'>
                {/* Nombre */}
                <div className='flex gap-4 items-center justify-around'>
                    <label className='text-gray-600 w-1/4'>Nombre:</label>
                    <input type="text" className='h-8 w-3/4 text-base border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='off' />
                </div>
                <div className='mt-4'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'>Guardar</button>
                </div>
            </form>
        </>
    )
}

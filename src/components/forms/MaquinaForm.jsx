import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

export const MaquinaForm = () => {
    return (
        < >
            <h1 className='font-bold'>Nueva máquina</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    planta: 0
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    nombre: Yup.string()
                        .required('Requerido'),
                    planta: Yup.number()
                        .required('Requerido')
                })}
            >
                {(formik) => (
                    <Form className='mt-2 flex flex-col gap-2'>
                        {/* Nombre */}
                        <div className='flex gap-4 items-center justify-around' >
                            <label className='text-gray-600 w-1/4'>Nombre:</label>
                            <Field
                                name="nombre"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="nombre"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around' >
                            <label className='text-gray-600 w-1/4'>Planta:</label>
                            <Field
                                name="planta"
                                type="number"
                                min={1}
                                max={3}
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="planta"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='mt-4'>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'>Guardar</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </>
    )
}

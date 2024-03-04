import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export const FabricanteForm = () => {


    return (
        < >
            <h1 className='font-bold'>Nuevo fabricante</h1>
            <Formik initialValues={{
                nombre: ''
            }}
                onSubmit={(valyues) => {
                    console.log(valyues);
                }}
                validationSchema={Yup.object({
                    nombre: Yup.string()
                        .required('Requerido')
                })}
            >
                {(formik) => (
                    <Form className='mt-2 flex flex-col gap-2' >
                        <div className='flex gap-4 items-center justify-around'>
                            <label className='text-gray-600 w-1/4'>Nombre:</label>
                            <Field
                                name="nombre"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="nombre"
                            component="span"
                            className='text.sm text-red-400 self-center'
                        />
                        <div className='mt-4'>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 w-full'>Guardar</button>
                        </div>
                    </Form>
                )}


            </Formik>

        </>
    )
}

import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useFabricanteStore } from '../../hooks'
import { useSelector, useDispatch } from 'react-redux'
import { onEditID } from '../../store'


export const FabricanteForm = () => {
    const dispatch = useDispatch();
    const { startSavingFabricante } = useFabricanteStore();
    const { fabricantes, editingId } = useSelector(state => state.fabricantes);
    var fab = {}

    var nombre = ''
    var title = 'Nuevo'
    if (editingId !== '') {
        fab = fabricantes.find(fabricante => fabricante.id === editingId)
        nombre = fab.nombre;
        title = 'Editar'
    }


    return (
        < >
            <h1 className='font-bold'>{title} fabricante</h1>
            <Formik
                initialValues={{
                    nombre: nombre
                }}
                validationSchema={Yup.object({
                    nombre: Yup.string()
                        .required('Requerido')
                })}
                onSubmit={(values) => {
                    if (title === "Editar") {
                        fab = {
                            ...fab,
                            nombre: values.nombre
                        }
                        startSavingFabricante(fab)
                    }
                    if (title === "Nuevo") {
                        startSavingFabricante(values)
                    }
                    dispatch(onEditID(''));
                }}
            >
                {(formik) => (
                    <Form className='mt-2 flex flex-col gap-2' >
                        <div className='flex gap-4 items-center justify-around'>
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
                            className='text.sm text-red-400 self-center'
                        />
                        <div className='mt-4'>
                            <button
                                type='submit'
                                className='bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 w-full'
                            >
                                Guardar
                            </button>
                        </div>
                    </Form>
                )}


            </Formik >

        </>
    )
}

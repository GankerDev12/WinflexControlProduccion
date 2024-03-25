import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useOperadorStore } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { onEditOperadorId } from '../../store';

export const OperadorForm = () => {
    const dispatch = useDispatch();
    const { startSavingOperador } = useOperadorStore();
    const { operadores, editingOperadorId } = useSelector(state => state.operadores);
    var ope = {}

    var nombre = ''
    var title = 'Nuevo'
    if (editingOperadorId !== '') {
        ope = operadores.find(operador => operador.id === editingOperadorId)
        nombre = ope.nombre;
        title = 'Editar'
    }

    return (
        < >
            <h1 className='font-bold'>{title} Operador</h1>
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
                        ope = {
                            ...ope,
                            nombre: values.nombre
                        }
                        startSavingOperador(ope)
                    }
                    if (title === "Nuevo") {
                        startSavingOperador(values)
                    }
                    dispatch(onEditOperadorId(''));
                }}
            >
                {(formik) => (
                    <Form className='mt-2 flex flex-col gap-2'>
                        {/* Nombre */}
                        <div className='flex gap-4 items-center justify-around'>
                            <label className='text-gray-600 w-1/4'>Nombre:</label>
                            <Field
                                name="nombre"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name='nombre'
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

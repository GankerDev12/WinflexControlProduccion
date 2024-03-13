import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

export const ProductoForm = () => {
    return (
        <>
            <h1 className='font-bold'>Nuevo producto</h1>
            <Formik initialValues={{
                op: '',
                np: '',
                tipoMaterial: '',
                extrusion: '',
                descripcion: '',
                medidas: '',
                kilosSolicitados: '',
                fabricante: ''
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    op: Yup.string(),
                    np: Yup.string(),
                    tipoMaterial: Yup.string(),
                    extrusion: Yup.string(),
                    descripcion: Yup.string()
                        .required('requerido'),
                    medidas: Yup.string(),
                    kilosSolicitados: Yup.string(),
                    fabricante: Yup.string()
                        .required('requerido')

                })}
            >
                {(formik) => (
                    <Form className='mt-2 flex flex-col gap-2'>
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Op */}
                            <label className='text-gray-600 w-1/4'>Op:</label>
                            <Field
                                name="op"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="op"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Np */}
                            <label className='text-gray-600 w-1/4'>Np:</label>
                            <Field
                                name="np"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="np"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Tipo material */}
                            <label className='text-gray-600 w-1/4'>Tipo material:</label>
                            <Field
                                name="tipoMaterial"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="tipoMaterial"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Extrusion */}
                            <label className='text-gray-600 w-1/4'>Extrusión:</label>
                            <Field
                                name="extrusion"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="extrusion"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Descripcion */}
                            <label className='text-gray-600 w-1/4'>Descripción:</label>
                            <Field
                                name="descripcion"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="descripcion"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Medidas */}
                            <label className='text-gray-600 w-1/4'>Medidas:</label>
                            <Field
                                name="medidas"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="medidas"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Kilos solicitados */}
                            <label className='text-gray-600 w-1/4'>Kilos solicitados:</label>
                            <Field
                                name="kilosSolicitados"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="kilosSolicitados"
                            component="span"
                            className='text-sm text-red-400 self-center'
                        />
                        <div className='flex gap-4 items-center justify-around'>
                            {/* Fabricante */}
                            <label className='text-gray-600 w-1/4'>Fabricante:</label>
                            <Field
                                name="fabricante"
                                type="text"
                                className='h-8 w-3/4 text-base border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <ErrorMessage
                            name="fabricante"
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
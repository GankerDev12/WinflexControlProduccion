import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { useProductoStore } from '../../hooks';
import { onEditProductoId } from '../../store';

export const ProductoForm = () => {
    const { fabricantes } = useSelector(state => state.fabricantes)

    const dispatch = useDispatch();
    const { startSavingProducto, startLoadingProductos } = useProductoStore();
    const { productos, editingProductoId } = useSelector(state => state.productos);
    var prod = {}

    var op = ''
    var np = ''
    var tipoMaterial = ''
    var extrusion = ''
    var descripcion = ''
    var medidas = ''
    var kgSolicitados = ''
    var fabricante = ''

    var title = 'Nuevo'
    if (editingProductoId !== '') {
        prod = productos.find(producto => producto.id === editingProductoId)
        op = prod.op;
        np = prod.np;
        tipoMaterial = prod.tipoMaterial;
        extrusion = prod.extrusion;
        descripcion = prod.descripcion;
        medidas = prod.medidas;
        kgSolicitados = prod.kgSolicitados;
        fabricante = prod.fabricante;

        title = 'Editar'
    }

    return (
        <>
            <h1 className='font-bold'>{title} producto</h1>
            <Formik initialValues={{
                op: op,
                np: np,
                tipoMaterial: tipoMaterial,
                extrusion: extrusion,
                descripcion: descripcion,
                medidas: medidas,
                kgSolicitados: kgSolicitados,
                fabricante: fabricante,
            }}
                validationSchema={Yup.object({
                    op: Yup.string().nullable(),
                    np: Yup.string().nullable(),
                    tipoMaterial: Yup.string(),
                    extrusion: Yup.string(),
                    descripcion: Yup.string()
                        .required('requerido'),
                    medidas: Yup.string(),
                    kgSolicitados: Yup.string(),
                    fabricante: Yup.string()
                        .required('requerido')
                })}
                onSubmit={(values) => {
                    if (title === "Editar") {
                        prod = {
                            ...prod,
                            op: values.op.toString(),
                            np: values.np.toString(),
                            tipoMaterial: values.tipoMaterial,
                            extrusion: values.extrusion,
                            descripcion: values.descripcion,
                            medidas: values.medidas,
                            kgSolicitados: values.kgSolicitados,
                            fabricante: values.fabricante,
                        }
                        console.log(prod);
                        startSavingProducto(prod)
                        startLoadingProductos();
                    }
                    if (title === "Nuevo") {
                        startSavingProducto(values)
                        startLoadingProductos();
                    }
                    dispatch(onEditProductoId(''));
                }}
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
                                name="kgSolicitados"
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
                                as="select"
                                className="flex items-center h-8 w-3/4 text-base border border-gray-300 rounded-md px-3 focus:outline-none focus:border-blue-500"
                            >
                                <option value="" >Selecciona un fabricante</option>
                                {
                                    fabricantes.map(fabricante => (
                                        <option value={fabricante.id} key={fabricante.id}>{fabricante.nombre}</option>
                                    ))
                                }
                            </Field>
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
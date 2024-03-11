
import { useRef } from 'react'
import { Button, Cards, FloatButton, LayoutModal, Table } from '../../../components/index'
import { Header } from '../../../components/Header'
import { Sidebar } from '../../../components/Sidebar'
import { useUiStore } from '../../../hooks/useUiStore'
import { RiAddFill } from 'react-icons/ri'

import { FabricantesTable } from '../../../components/tables/FabricanteTable'

export const GestionPage = () => {
    const { openModal, onSetForm } = useUiStore()
    const productos = useRef(null)
    const operadores = useRef(null)
    const maquinas = useRef(null)
    const fabricantesDiv = useRef(null)

    const handleRef = (ref) => {
        switch (ref) {
            case productos:
                productos.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case operadores:
                operadores.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case maquinas:
                maquinas.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case fabricantesDiv:
                fabricantesDiv.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }

    return (
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            <Sidebar />
            <FloatButton />
            <div className='col-span-5'>
                <Header />
                {/* Cards */}
                <div className='flex p-4 lg:p-10 items-center gap-10 bg-gray-100'>
                    <div className='lg:flex justify-around gap-10'>
                        <button onClick={() => handleRef(productos)}>
                            <Cards title={"Productos"} />
                        </button>
                        <button onClick={() => handleRef(operadores)}>
                            <Cards title={"Operadores"} />
                        </button>
                    </div>
                    <div className='lg:flex justify-around gap-10 '>
                        <button onClick={() => handleRef(maquinas)} >
                            <Cards title={"Máquinas"} />
                        </button>
                        <button onClick={() => handleRef(fabricantesDiv)}>
                            <Cards title={"Fabricantes"} />
                        </button>
                    </div>
                </div>

                {/* Tablas */}
                <div className='p-4 ml-4'>
                    <div ref={productos} className='inline items-center'>
                        <h1 className='text-2xl font-semibold'>Productos</h1>
                        <div className='flex justify-end mb-2'>
                            <button
                                className='bg-blue-400 text-white text-sm p-2 rounded-md flex items-center gap-2 hover:bg-blue-300'
                                onClick={() => {
                                    onSetForm("productos")
                                    openModal();
                                }}
                            >
                                <RiAddFill />
                                Nuevo producto
                            </button>
                        </div>
                        <LayoutModal />

                    </div>
                    <div ref={operadores} className='mt-4 border-t-2 border-gray-200'>
                        <h1 className='text-2xl font-semibold mt-2'>Operadores</h1>
                        <div className='flex justify-end mb-2'>
                            <Button
                                title={"Nuevo operador"}
                                children={<RiAddFill />}
                                onClick={() => {
                                    onSetForm("operadores")
                                    openModal();
                                }}
                            />
                        </div>
                        <LayoutModal />

                    </div>
                    <div ref={maquinas} className='mt-4 border-t-2 border-gray-200'>
                        <h1 className='text-2xl font-semibold mt-2'>Máquinas</h1>
                        <div className='flex justify-end mb-2'>
                            <Button
                                title={"Nueva máquina"}
                                children={<RiAddFill />}
                                onClick={() => {
                                    onSetForm("maquinas")
                                    openModal();
                                }}
                            />
                        </div>
                        <LayoutModal />

                    </div>
                    <div ref={fabricantesDiv} className='mt-4 border-t-2 border-gray-200'>
                        <h1 className='text-2xl font-semibold mt-2'>Fabricantes</h1>
                        <div className='flex justify-end mb-2'>
                            <Button
                                title={"Nuevo fabricante"}
                                children={<RiAddFill />}
                                onClick={() => {
                                    onSetForm("fabricantes")
                                    openModal();
                                }}
                            />
                        </div>
                        <LayoutModal />
                        <FabricantesTable />
                    </div>
                </div>
            </div>
        </div >
    )
}

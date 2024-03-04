import { RiAddFill } from 'react-icons/ri'
import { FloatButton } from '../../../components/index'
import { Header } from '../../../components/Header'
import { Sidebar } from '../../../components/Sidebar'
import { LuScroll } from 'react-icons/lu'
import { Table } from '../../../components'

export const TotalSelladoPage = () => {
    return (
        <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
            <Sidebar />
            <FloatButton />
            <div className='col-span-5'>
                <Header />
                <div className='bg-gray-100 lg:px-6 md:p-8'>
                    <div className='bg-white rounded-2xl w-full drop-shadow-lg h-screen'>

                        <div className='relative'>
                            <div className='absolute left-4 -top-4'>
                                <LuScroll className='text-6xl bg-blue-500 text-white p-3 rounded-lg drop-shadow-lg' />
                            </div>
                        </div>

                        <div className='ml-20 -3 flex items-center justify-between'>
                            <h3 className='font-semibold text-lg'>Total sellado</h3>
                            <button className='flex items-center gap-2 bg-blue-500 text-white py-1 px-3 mr-6 rounded-lg hover:bg-blue-400 transition-colors'
                                onClick={() => console.log('add extrusión')}//TODO: Agregar modal para insertar nueva extrusión 
                            >
                                <RiAddFill className='text-xl font-semibold' />
                                Nuevo
                            </button>
                        </div>

                        <div className='px-6 py-10'>
                            <Table />
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

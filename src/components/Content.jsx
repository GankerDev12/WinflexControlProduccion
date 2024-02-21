import { RiArrowDownSLine, RiCloseLine, RiDropboxFill, RiFilter3Line, RiMapPinRangeLine, RiSearchLine } from 'react-icons/ri'

export const Content = () => {
    return (
        <div className='bg-gray-100 lg:px-12 md:p-8'>
            <div>
                <h1 className='font-semibold text-3xl'>Job board</h1>
            </div>
            {/* Search */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center mt-4 mb-4'>
                <form className='col-span-2'>
                    <div className='relative'>
                        <RiSearchLine className='absolute left-2 top-3 text-blue-500' />
                        <input
                            type="text"
                            className='bg-white py-2 pl-8 outline-none w-full'
                            placeholder='Buscar'
                        />
                    </div>
                </form>
                <form className='col-span-1'>
                    <div className='relative'>
                        <RiMapPinRangeLine className='absolute left-2 top-3 text-blue-500' />
                        <select
                            className='bg-white py-[10px] pl-8 pr-4 outline-none w-full'
                        >
                            <option className='bg-white selection:text-green-500 select-none'>Anywhere</option>
                            <option>Anywhere2</option>
                        </select>
                    </div>
                </form>
                <form className='col-span-1'>
                    <div className='relative'>
                        <RiFilter3Line className='absolute left-2 top-3 text-blue-500' />
                        <input
                            type="text"
                            className='bg-white py-2 pl-8 outline-none w-full'
                            placeholder='Filters'
                        />
                        <span className='absolute text-sm right-4 top-[7px] bg-blue-500 text-white py-1 px-[9px] rounded-full'>4</span>
                    </div>
                </form>
            </div>
            {/* Beans */}
            <div className='flex items-center flex-wrap gap-4 mb-8'>
                <span className='bg-white flex items-center gap-4 py-2 px-6 rounded-full'>
                    <button className='bg-blue-100 p-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-300'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500' >Design</span>
                </span>
                <span className='bg-white flex items-center gap-4 py-2 px-6 rounded-full'>
                    <button className='bg-blue-100 p-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-300'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500' >Regular</span>
                </span>
                <span className='bg-white flex items-center gap-4 py-2 px-6 rounded-full'>
                    <button className='bg-blue-100 p-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-300'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500' >Full time</span>
                </span>
                <span className='bg-white flex items-center gap-4 py-2 px-6 rounded-full'>
                    <button className='bg-blue-100 p-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-300'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500' >B2B</span>
                </span>
                <button className='text-gray-500 ml-4'>Clear All</button>
            </div>
            {/* Results */}
            <div className='flex items-center justify-between mb-8'>
                <p>
                    We've found <span className='text-blue-500 font-bold'>523</span> jobs!
                </p>
                <p className='flex items-center gap-2'>
                    Sort by <span className='text-blue-500 font-bold hover:cursor-pointer'>Date</span> <RiArrowDownSLine />
                </p>
            </div>
            {/* Cards */}
            <a href='#' className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-blue-400 transition-colors'>
                {/* Icon */}
                <div className='w-full  md:w-[10%] flex items-center justify-start md:justify-center'>
                    <RiDropboxFill className='text-7xl bg-blue-100 text-blue-500 p-4 rounded-lg' />
                </div>
                {/* Title */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-xl flex items-center gap-4 mb-2'>
                        UX Designer <span className='text-xs bg-blue-100 py-1 px-2 text-blue-500 font-bold'>Remote</span>
                        <span className='text-xs bg-green-100 py-1 px-2 text-green-500 font-bold'>Sketch</span>
                    </h1>
                    <p className='text-gray-500'>Dropbox ---- Warzawa</p>
                </div>
                {/* Time */}
                <div className='w-full md:w-[20%] flex flex-col items-end'>
                    <h3 className='text-gray-500 text-xl'>8.8 - 13.7K PLN </h3>
                    <p>2 days ago</p>
                </div>
            </a>
        </div>
    )
}

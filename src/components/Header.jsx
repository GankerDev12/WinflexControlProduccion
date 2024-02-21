import { RiArrowDownSLine, RiCheckboxBlankCircleFill, RiNotification3Line, RiSearchLine } from "react-icons/ri"
import { useAuthStore } from "../hooks";

export const Header = () => {
    const { user } = useAuthStore();

    const onSearch = (e) => {
        e.preventDefault();
        localStorage.setItem('search', e.target.value)
    }

    return (
        <header className='flex flex-col md:flex-row items-center gap-4 justify-between md:pl-8 py-4 pl-2  lg:pl-10 w-full'>
            {/* Search */}
            <form className='w-full md:w-[40%] lg:w-[70%] order-1 md:order-none'>
                <div className='relative'>
                    <RiSearchLine className='absolute left-2 top-3' />
                    <input
                        type="text"
                        className='bg-gray-50 py-2 pl-8 outline-none rounded-lg w-full'
                        placeholder='Buscar'
                        onChange={onSearch}
                    />
                </div>
            </form>
            {/* Notification */}
            <nav className='w-full md:w-[60%] lg:w-[30%] flex justify-center md:justify-end'>
                <ul className='flex items-center gap-4'>
                    <li>
                        <a href="#" className='relative'>
                            <RiNotification3Line className='text-xl' />
                            <RiCheckboxBlankCircleFill className='absolute right-0 top-0 text-xs text-red-500' />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center gap-1'>{user.name}<RiArrowDownSLine /></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


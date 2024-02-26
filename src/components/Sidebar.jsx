import { FiPrinter } from "react-icons/fi"
import { RiHandbagLine, RiLogoutBoxRLine, RiPrinterLine } from "react-icons/ri"
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom"
import { useAuthStore } from "../hooks"
import { LuScroll } from "react-icons/lu"
import { useUiStore } from "../hooks/useUiStore"

export const Sidebar = () => {
    const { toOpenSidebar } = useUiStore();
    const { startLogout } = useAuthStore();

    return (

        <div className={`fixed lg:static w-[50%] lg:w-full top-0 ${toOpenSidebar ? "-left-0" : "-left-full"} h-screen col-span-1 overflow-y-scroll border-r bg-white z-50  transition-all scrollbar-none drop-shadow-sm`}>
            {/* Logotipo */}
            <div className="p-6">
                <Link to="/">
                    <img src="https://s3.amazonaws.com/cht2/empleadores/images/logos/logo-35aa09a11d3662c7fb510b18b3d0b2fc.jpg" alt="" />
                </Link>
            </div>
            <div className="flex flex-col justify-between h-full p-6">
                {/* Menu */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/extrusion" className="flex items-center gap-4 text-gray-400 font-semibold hover:bg-blue-400 p-4 hover:text-white rounded-lg transition-colors">
                                <LuScroll />
                                Extrusión
                            </Link>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-4 text-gray-400 font-semibold hover:bg-blue-400 p-4 hover:text-white rounded-lg transition-colors">
                                <FiPrinter />
                                Impresión
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-4 text-gray-400 font-semibold hover:bg-blue-400 p-4 hover:text-white rounded-lg transition-colors">
                                <RiHandbagLine />
                                Sellado
                            </a>
                        </li>
                    </ul>
                    <div className="border-b-2 pt-4 mb-2 text-gray-400 font-semibold">
                        <p>Seguimiento</p>

                    </div>
                    <ul>
                        <li>
                            <a href="" className="flex items-center gap-4 text-gray-400 font-semibold hover:bg-blue-400 p-4 hover:text-white rounded-lg transition-colors">
                                <LuScroll />
                                Extrusión
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-4 text-gray-400 font-semibold hover:bg-blue-400 p-4 hover:text-white rounded-lg transition-colors">
                                <RiPrinterLine />
                                Impresión
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-4 text-gray-400 font-semibold hover:bg-blue-400 p-4 hover:text-white rounded-lg transition-colors">
                                <RiHandbagLine />
                                Sellado
                            </a>
                        </li>
                    </ul>
                    <div className="border-b-2 pt-4 mb-2 text-gray-400 font-semibold">
                        <p>Gestión</p>
                    </div>
                    <ul>
                        <li>
                            <Link to="/gestion" className="flex items-center justify-center text-2xl p-2 text-gray-400 font-bold hover:bg-blue-400 hover:text-white rounded-lg transition-colors">
                                <MdOutlineManageAccounts className="" />
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Logout */}
                <div>
                    <a onClick={startLogout} className="flex items-center gap-4 my-8 text-gray-400 font-semibold hover:bg-blue-400 hover:cursor-pointer p-4 hover:text-white rounded-lg transition-colors">
                        <RiLogoutBoxRLine />
                        Logout
                    </a>
                </div>
            </div>

        </div>
    )
}
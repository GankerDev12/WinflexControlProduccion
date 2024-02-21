import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { useUiStore } from "../../hooks/useUiStore";


export const FloatButton = () => {
    const { toOpenSidebar, onOpenSidebar, onCloseSidebar } = useUiStore();

    const handleSidebar = () => {
        if (toOpenSidebar === false) {
            return onOpenSidebar();
        }
        if (toOpenSidebar === true) {
            return onCloseSidebar();
        }
    }

    return (
        <>
            <button className="block lg:hidden fixed bottom-4 right-4 bg-blue-500 text-white rounded-full text-2xl p-3 z-50"
                onClick={() => handleSidebar()}
            >
                {toOpenSidebar ? <RiCloseLine /> : <RiMenuFill />}

            </button>
        </>

    )
}

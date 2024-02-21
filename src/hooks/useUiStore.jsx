import { useDispatch, useSelector } from "react-redux"
import { openSidebar, closeSidebar, onOpenModal, onCloseModal, showForm } from '../store'


export const useUiStore = () => {
    const { toOpenSidebar, isModalOpen, setForm } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const onOpenSidebar = () => {
        dispatch(openSidebar());
    }

    const onCloseSidebar = () => {
        dispatch(closeSidebar());
    }

    const openModal = () => {
        dispatch(onOpenModal());
    }

    const closeModal = () => {
        dispatch(onCloseModal());
    }

    const onSetForm = (payload) => {
        dispatch(showForm(payload));
    }

    return {
        //*Propiedades
        toOpenSidebar,
        isModalOpen,
        setForm,

        //* Metodos
        onOpenSidebar,
        onCloseSidebar,
        openModal,
        closeModal,
        onSetForm

    }


}

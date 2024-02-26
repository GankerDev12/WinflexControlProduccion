import Modal from "react-modal";
import '../modal.css'
import { ProductoForm } from "./forms/ProductoForm";
import { useUiStore } from "../hooks/useUiStore";
import { OperadorForm } from "./forms/OperadorForm";
import { FabricanteForm } from "./forms/FabricanteForm";
import { MaquinaForm } from "./forms/MaquinaForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const LayoutModal = () => {
    const { isModalOpen, closeModal } = useUiStore()
    const { setForm } = useSelector(state => state.ui)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-20%',
        }
    }

    Modal.setAppElement('#root');

    const empty = () => {
        return (
            <></>
        )
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className={"modal"}
            overlayClassName={"modal-fondo"}
            closeTimeoutMS={200}
        >
            <div className="py-4 px-6">
                {
                    (setForm === 'productos') ? <ProductoForm /> :
                        (setForm === 'operadores') ? <OperadorForm /> :
                            (setForm === 'maquinas') ? <MaquinaForm /> :
                                (setForm === 'fabricantes') ? <FabricanteForm /> : empty
                }
            </div>


        </Modal >
    )
}

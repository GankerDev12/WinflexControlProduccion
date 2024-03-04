import Modal from "react-modal";
import '../modal.css'
import { useUiStore } from "../hooks/useUiStore";
import { useSelector } from "react-redux";

import { FabricanteForm, MaquinaForm, OperadorForm, ProductoForm } from "./forms/index";

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
            width: '100%'
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

import Modal from "react-modal";
import '../modal.css'
import { ProductoForm } from "./forms/ProductoForm";
import { useUiStore } from "../hooks/useUiStore";
import { OperadorForm } from "./forms/OperadorForm";
import { FabricanteForm } from "./forms/FabricanteForm";
import { MaquinaForm } from "./forms/MaquinaForm";

export const LayoutModal = () => {
    const { isModalOpen, closeModal, setForm} = useUiStore()

    

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
                {/* <ProductoForm /> */}
                {/* <OperadorForm /> */}
                {/* <FabricanteForm /> */}
                <MaquinaForm />
            </div>


        </Modal >
    )
}

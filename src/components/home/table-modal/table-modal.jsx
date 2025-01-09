import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { CiSaveDown1 } from "react-icons/ci";
import "./table-modal.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [numPeople, setNumPeople] = useState("");

    const handleSubmit = () => {
        if (numPeople && !isNaN(numPeople)) {
            onSubmit(parseInt(numPeople, 10));
            setNumPeople("");  // Reset input
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    };

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-buttons">
                            <button className="close-button" onClick={onClose}>
                                <VscEyeClosed size={30} />
                            </button>
                            <button className="save-button" onClick={handleSubmit}>
                                <CiSaveDown1 size={30} />
                            </button>
                        </div>
                        <h2 className="modal-title">¿Cuántas personas hay en la mesa?</h2>
                    </div>
                    <div className="modal-body">
                        <input
                            type="number"
                            onChange={(e) => setNumPeople(e.target.value)}
                            placeholder="Número de personas"
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;

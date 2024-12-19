import { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import "./SettingsButton.css";

function SettingsButton({ onEdit, onDelete }) {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const settingsButtonRef = useRef(null);

    const toggleSettings = (e) => {
        e.stopPropagation();
        setSettingsOpen(!settingsOpen);
    };

    const closeSettings = () => {
        setSettingsOpen(false);
    };

    function handleEdit(e) {
        e.stopPropagation();
        onEdit();
        closeSettings();
    }

    function handleDelete(e) {
        e.stopPropagation();
        onDelete();
        closeSettings();
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            // Verifica si el clic fue fuera de settingsButton o dropdown
            if (
                settingsButtonRef.current &&
                !settingsButtonRef.current.contains(e.target)
            ) {
                closeSettings();
            }
        };

        // Añadir el listener
        document.addEventListener("click", handleClickOutside);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="settings-button" ref={settingsButtonRef}>
            <button onClick={toggleSettings}>
                <HiDotsVertical size={20} />
            </button>
            {settingsOpen && (
                <div className="dropdown-settings">
                    <button className="edit-button" onClick={handleEdit}>Editar</button>
                    <button className="delete-button" onClick={handleDelete}>Eliminar</button>
                </div>
            )}
        </div>
    );
}

export default SettingsButton;

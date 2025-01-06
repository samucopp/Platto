import { useState, useEffect, useRef } from "react";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { TbMoodEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
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
            if (
                settingsButtonRef.current &&
                !settingsButtonRef.current.contains(e.target)
            ) {
                closeSettings();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="settings-button" ref={settingsButtonRef}>
            <div className="dots-button">
                <button onClick={toggleSettings}>
                    <PiDotsThreeCircleVertical size={30} />
                </button>
            </div>
            {settingsOpen && (
                <div className="dropdown-settings">
                    <button className="edit-button" onClick={handleEdit}>
                        <TbMoodEdit size={30} />
                    </button>
                    <button className="delete-button" onClick={handleDelete}>
                        <MdDelete size={30} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default SettingsButton;

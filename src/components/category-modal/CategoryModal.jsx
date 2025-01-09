import { VscEyeClosed } from "react-icons/vsc";
import { CiSaveDown1 } from "react-icons/ci";
import "./CategoryModal.css";

function CategoryModal({ title, type, onClose, data, actions }) {
    return (
        <div className="modal-backdrop" role="dialog" aria-labelledby="modal-title">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-buttons">
                        <button className="close-button" onClick={onClose}>
                            <VscEyeClosed size={30} />
                        </button>
                        <button className="save-button" onClick={actions.onSave}>
                            <CiSaveDown1 size={30} />
                        </button>
                    </div>
                    <h2 id="modal-title">{title}</h2>
                </div>
                <div className="modal-body">
                    {type === "edit" && (
                        <>
                            <label className="modal-label">
                                Nombre:
                                <input
                                    type="text"
                                    value={data.newCategoryName}
                                    onChange={(e) => actions.onChange(e.target.value)}
                                />
                            </label>
                        </>
                    )}
                    {type === "add" && (
                        <>
                            <label className="modal-label">
                                Nombre:
                                <input
                                    type="text"
                                    onChange={(e) => actions.onChange({ ...data.newCategoryName, name: e.target.value })}
                                />
                            </label>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CategoryModal;
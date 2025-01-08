import "./CategoryModal.css";

function CategoryModal({ title, type, onClose, data, actions }) {
    return (
        <div className="modal-backdrop" role="dialog" aria-labelledby="modal-title">
            <div className="modal-content">
                <h2 id="modal-title">{title}</h2>
                <div className="modal-body">
                    {type === "edit" && (
                        <>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={data.newCategoryName}
                                    onChange={(e) => actions.onChange(e.target.value)}
                                />
                            </label>
                            <button className="save-btn" onClick={actions.onSave}>Guardar</button>
                        </>
                    )}
                    {type === "add" && (
                        <>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    onChange={(e) => actions.onChange({ ...data.newCategoryName, name: e.target.value})}
                                />
                            </label>
                            <button className="save-btn" onClick={actions.onSave}>Guardar</button>
                        </>
                    )}
                </div>
                <button className="close-btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default CategoryModal;
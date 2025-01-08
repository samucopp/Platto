import "./TableModal.css";

function TableModal({ title, type, onClose, data, actions }) {

    return (
        <div className="modal-backdrop" role="dialog" aria-labelledby="modal-title">
            <div className="modal-content">
                <h2 id="modal-title">{title}</h2>
                <div className="modal-body">
                    {type === "delete" && (
                        <>
                            <p>¿Estás seguro de eliminar la mesa "{data.table_id}"?</p>
                            <button className="delete-btn" onClick={actions.onDelete}>Eliminar</button>
                        </>
                    )}
                    {type === "edit" && (
                        <>
                            <label>
                                Capacidad:
                                <input
                                    type="number"
                                    value={data.newTable.capacity}
                                    onChange={(e) => actions.onChange({ ...data.newTable, capacity: e.target.value})}
                                />
                            </label>
                            <button className="save-btn" onClick={actions.onSave}>Guardar</button>
                        </>
                    )}
                    {type === "add" && (
                        <>
                            <label>
                                Capacidad:
                                <input
                                    type="number"
                                    onChange={(e) => actions.onChange({ ...data.newTable, capacity: e.target.value})}
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

export default TableModal;
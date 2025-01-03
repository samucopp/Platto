import "./UserModal.css";

function UserModal({ title, type, onClose, data, actions }) {
    const roles = ["camarero", "cocinero", "admin"];

    return (
        <div className="modal-backdrop" role="dialog" aria-labelledby="modal-title">
            <div className="modal-content">
                <h2 id="modal-title">{title}</h2>
                <div className="modal-body">
                    {type === "delete" && (
                        <>
                            <p>¿Estás seguro de eliminar el usuario "{data.name}"?</p>
                            <button className="delete-btn" onClick={actions.onDelete}>Eliminar</button>
                        </>
                    )}
                    {type === "edit" && (
                        <>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={data.newUser.user_name}
                                    onChange={(e) => actions.onChange({ ...data.newUser, user_name: e.target.value})}
                                />
                            </label>
                            <label>
                                Contraseña:
                                <input
                                    type="password"
                                    value={data.newUser.password}
                                    onChange={(e) => actions.onChange({ ...data.newUser, password: e.target.value})}
                                />
                            </label>
                            <label>
                                Rol:
                                <select
                                    value={data.newUser.role}
                                    onChange={(e) => actions.onChange({ ...data.newUser, role: e.target.value })}
                                >
                                    <option value="" disabled>Selecciona un rol</option>
                                    {roles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
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
                                    value={data.newUser.user_name}
                                    onChange={(e) => actions.onChange({ ...data.newUser, user_name: e.target.value})}
                                />
                            </label>
                            <label>
                                Contraseña:
                                <input
                                    type="password"
                                    value={data.newUser.password}
                                    onChange={(e) => actions.onChange({ ...data.newUser, password: e.target.value})}
                                />
                            </label>
                            <label>
                                Rol:
                                <select
                                    value={data.newUser.role || ""}
                                    onChange={(e) => actions.onChange({ ...data.newUser, role: e.target.value })}
                                >
                                    <option value="" disabled>Selecciona un rol</option>
                                    {roles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
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

export default UserModal;
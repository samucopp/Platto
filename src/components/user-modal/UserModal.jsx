import { VscEyeClosed } from "react-icons/vsc";
import { CiSaveDown1 } from "react-icons/ci";
import "./UserModal.css";

function UserModal({ title, type, onClose, data, actions }) {
    const roles = ["camarero", "cocinero", "admin"];

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
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={data.newUser.user_name}
                                    onChange={(e) => actions.onChange({ ...data.newUser, user_name: e.target.value })}
                                />
                            </label>
                            <label>
                                Contraseña:
                                <input
                                    type="password"
                                    value={data.newUser.password}
                                    onChange={(e) => actions.onChange({ ...data.newUser, password: e.target.value })}
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
                        </>
                    )}
                    {type === "add" && (
                        <>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={data.newUser.user_name}
                                    onChange={(e) => actions.onChange({ ...data.newUser, user_name: e.target.value })}
                                />
                            </label>
                            <label>
                                Contraseña:
                                <input
                                    type="password"
                                    value={data.newUser.password}
                                    onChange={(e) => actions.onChange({ ...data.newUser, password: e.target.value })}
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserModal;
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { createUser } from "../../api/user";
import UserModal from "../user-modal/UserModal";
import "./UserList.css";

function UserList({ users, onSelectUser, onCreateUser }) {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newUser, setNewUser] = useState("");

    function openCreateModal() {
        setNewUser("");
        setShowCreateModal(true);
    }

    async function handleCreateUser() {
        console.log("Enviando datos al backend:", newUser);
        try {
            const response = await createUser(newUser);
            const createdUser = response.user;
            onCreateUser(createdUser);
            alert("Personal creado correctamente.");
            setShowCreateModal(false);
        } catch (error) {
            console.error("Error al crear el usuario", error);
            alert("No se pudo crear el usuario.");
        }
    }

    return (
        <section className="users-container">
            <h2>Staff</h2>
            <button className="add-product-btn" onClick={openCreateModal}>
                <IoIosAddCircleOutline size={24} />
            </button>
            {users && users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li
                            key={user.user_id}
                            onClick={() => onSelectUser(user)}
                            style={{ cursor: "pointer" }}
                        >
                            {user.user_name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay usuarios disponibles.</p>
            )}

            {showCreateModal && (
                <UserModal
                    title="Añadir Personal"
                    type="add"
                    onClose={() => setShowCreateModal(false)}
                    data={{ newUser }}
                    actions={{
                        onChange: setNewUser,
                        onSave: handleCreateUser,
                    }}
                />
            )}
        </section>
    )
}

export default UserList;
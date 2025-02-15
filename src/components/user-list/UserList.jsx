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
        <section className="user-list">
            {users && users.length > 0 && (
                <ul className="user-card-container">
                    {users.map((user) => (
                        <li className="user-card"
                            key={user.user_id}
                            onClick={() => onSelectUser(user)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="user-name-container">
                                {user.user_name}
                            </div>
                        </li>
                    ))}
                    <button className="add-user-btn" aria-label="Añadir Personal" onClick={openCreateModal}>
                        <IoIosAddCircleOutline size={40} />
                    </button>
                </ul>
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
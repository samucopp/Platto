import { useState } from "react";
import { deleteUser, updateUser } from "../../api/user";
import UserModal from "../user-modal/UserModal";
import SettingsButton from "../settings-button/SettingsButton";
import "./UserProfile.css";

function UserProfile({ user, onUserUpdated, onUserDeleted }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [newUser, setNewUser] = useState(user);

    function openEditModal() {
        setNewUser(user);
        setShowEditModal(true);
    }

    async function handleDelete() {
        try {
            await deleteUser(user.user_id);
            onUserDeleted(user.user_id);
        } catch (error) {
            console.error("Error al eliminar el usuario", error);
            alert("No se pudo eliminar.");
        }
    }

    async function handleUpdate() {
        try {
            const response = await updateUser(user.user_id, newUser);
            onUserUpdated(response.user);
            setShowEditModal(false);
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
        }
    }

    if (!user) return <p className="user-profile-message">Selecciona un usuario para ver sus detalles.</p>;

    return (
        <section className="user-profile">
            <article className="user-profile-card">
                <title className="user-profile-title">
                    <h2>{user.user_name}</h2>
                    <SettingsButton
                        onEdit={() => openEditModal(user)}
                        onDelete={handleDelete}
                    />
                </title>
                <p><strong>ID:</strong> {user.user_id}</p>
                <p><strong>Rol:</strong> {user.role}</p>
                <p><strong>Contraseña:</strong> {"*****"}</p>
            </article>
            {showEditModal && (
                <UserModal
                    title="Editar Usuario"
                    type="edit"
                    onClose={() => setShowEditModal(false)}
                    data={{ user, newUser }}
                    actions={{
                        onChange: setNewUser,
                        onSave: handleUpdate,
                    }}
                />
            )}
        </section>
    );
}

export default UserProfile;
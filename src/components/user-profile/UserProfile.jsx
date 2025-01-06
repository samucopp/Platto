import { useState } from "react";
import { deleteUser, updateUser } from "../../api/user";
import UserModal from "../user-modal/UserModal";
import SettingsButton from "../settings-button/SettingsButton";
import "./UserProfile.css";

function UserProfile({ user, onUserUpdated, onUserDeleted }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [newUser, setNewUser] = useState(user);
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    function openDeleteModal() {
        setShowDeleteModal(true);
    }

    function openEditModal() {
        setNewUser(user);
        setShowEditModal(true);
    }

    async function handleDelete() {
        try {
            await deleteUser(user.user_id);
            onUserDeleted(user.user_id);
            alert("Usuario eliminado correctamente.");
            setShowDeleteModal(false);
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
            alert("Usuario actualizado correctamente.");
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            alert("No se pudo actualizar el usuario.");
        }
    }

    if (!user) return <p>Selecciona un usuario para ver sus detalles.</p>;

    return (
        <section className="user-profile">
            <article className="user-profile-card">
                <title className="user-profile-title">
                    <h2>{user.user_name}</h2>
                    <SettingsButton
                        onEdit={() => openEditModal(user)}
                        onDelete={() => openDeleteModal(user)}
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
            {showDeleteModal && (
                <UserModal
                    title="Eliminar Usuario"
                    type="delete"
                    onClose={() => setShowDeleteModal(false)}
                    data={{ user }}
                    actions={{
                        onDelete: handleDelete
                    }}
                />
            )}
        </section>
    );
}


export default UserProfile;
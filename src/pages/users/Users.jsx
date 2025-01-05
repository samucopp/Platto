import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/NavBar";
import UserList from "../../components/user-list/UserList";
import UserProfile from "../../components/user-profile/UserProfile";
import { getAllUsers } from "../../api/user";
import "./Users.css";

function Users() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.error("Error al cargar usuarios", error);
            }
        }
        fetchUsers();
    }, []);

    function handleUserCreated(newUser) {
        setUsers([...users, newUser]); // Actualiza la lista localmente
    }
    function handleUserUpdated(updatedUser) {
        setUsers(users.map(user => user.user_id === updatedUser.user_id ? updatedUser : user));
        if (selectedUser?.user_id === updatedUser.user_id) {
            setSelectedUser(updatedUser);
        }
    }

    function handleUserDeleted(userId) {
        setUsers(users.filter(user => user.user_id !== userId));
        setSelectedUser(null);
    }

    return (
        <div className="users-page">
            <section className="user-list-container">
                <UserList
                    users={users}
                    onSelectUser={setSelectedUser}
                    onCreateUser={handleUserCreated}
                />
            </section>
            <section className="user-profile-container">
                <UserProfile
                    user={selectedUser}
                    onUserUpdated={handleUserUpdated}
                    onUserDeleted={handleUserDeleted}
                />
            </section>
        </div>
    )
}

export default Users;
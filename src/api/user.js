import { apiRequest } from './apiRequest';

async function getAllUsers() {
    try {
        return await apiRequest('/user', 'GET');
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw new Error('Unable to retrieve all users.');
    }
}

async function getUserById(id) {
    try {
        return await apiRequest(`/user/${id}`, 'GET');
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        throw new Error(`Unable to retrieve user with ID ${id}.`);
    }
}

async function createUser(userData) {
    try {
        return await apiRequest('/user', 'POST', userData);
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user.');
    }
}

async function updateUser(id, userData) {
    try {
        return await apiRequest(`/user/${id}`, 'PUT', userData);
    } catch (error) {
        console.error(`Error updating user with ID ${id}:`, error);
        throw new Error(`Failed to update user with ID ${id}.`);
    }
}

async function deleteUser(id) {
    try {
        return await apiRequest(`/user/${id}`, 'DELETE');
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        throw new Error(`Failed to delete user with ID ${id}.`);
    }
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
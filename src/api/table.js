import { apiRequest } from './apiCall';

async function getAllTables() {
    try {
        return await apiRequest('/table', 'GET');
    } catch (error) {
        console.error('Error fetching all tables:', error);
        throw new Error('Unable to retrieve all tables.');
    }
}

async function getTableById(id) {
    try {
        return await apiRequest(`/table/${id}`, 'GET');
    } catch (error) {
        console.error(`Error fetching table with ID ${id}:`, error);
        throw new Error(`Unable to retrieve table with ID ${id}.`);
    }
}

async function createTable(tableData) {
    try {
        return await apiRequest('/table', 'POST', tableData);
    } catch (error) {
        console.error('Error creating table:', error);
        throw new Error('Failed to create table.');
    }
}

async function updateTable(id, tableData) {
    try {
        return await apiRequest(`/table/${id}`, 'PUT', tableData);
    } catch (error) {
        console.error(`Error updating table with ID ${id}:`, error);
        throw new Error(`Failed to update table with ID ${id}.`);
    }
}

async function deleteTable(id) {
    try {
        return await apiRequest(`/table/${id}`, 'DELETE');
    } catch (error) {
        console.error(`Error deleting table with ID ${id}:`, error);
        throw new Error(`Failed to delete table with ID ${id}.`);
    }
}

export { getAllTables, getTableById, createTable, updateTable, deleteTable };
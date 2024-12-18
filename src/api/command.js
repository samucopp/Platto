import { apiRequest } from "./apiCall.js";

async function getAllOpenCommands() {
    try {
        return await apiRequest('/command', 'GET');
    } catch (error) {
        console.error("Error fetching all open commands:", error);
        throw new Error("Unable to retrieve all open commands.");
    }
}

async function getAllOpenCompleteCommands() {
    try {
        return await apiRequest('/command/complete', 'GET');
    } catch (error) {
        console.error("Error fetching all open complete commands:", error);
        throw new Error("Unable to retrieve all open complete commands.");
    }
}

async function getAllClosedCommands() {
    try {
        return await apiRequest('/command/history', 'GET');
    } catch (error) {
        console.error("Error fetching all closed commands:", error);
        throw new Error("Unable to retrieve all closed commands.");
    }
}

async function getClosedCommandById(id) {
    try {
        return await apiRequest(`/command/history/${id}`, 'GET');
    } catch (error) {
        console.error(`Error fetching closed command with ID ${id}:`, error);
        throw new Error(`Unable to retrieve closed command with ID ${id}.`);
    }
}

async function createCommand(commandData) {
    try {
        return await apiRequest('/command', 'POST', commandData);
    } catch (error) {
        console.error("Error creating command:", error);
        throw new Error("Failed to create command.");
    }
}

async function addProductToCommand(id, productData) {
    try {
        return await apiRequest(`/command/${id}/add-product`, 'POST', productData);
    } catch (error) {
        console.error(`Error adding product to command with ID ${id}:`, error);
        throw new Error(`Failed to add product to command with ID ${id}.`);
    }
}

async function getOpenCommandById(id) {
    try {
        return await apiRequest(`/command/${id}`, 'GET');
    } catch (error) {
        console.error(`Error fetching command with ID ${id}:`, error);
        throw new Error(`Unable to retrieve command with ID ${id}.`);
    }
}

async function getCompleteCommandById(id) {
    try {
        return await apiRequest(`/command/${id}/details`, 'GET');
    } catch (error) {
        console.error(`Error fetching complete command with ID ${id}:`, error);
        throw new Error(`Unable to retrieve complete command with ID ${id}.`);
    }
}

async function updateCommand(id, commandData) {
    try {
        return await apiRequest(`/command/${id}`, 'PUT', commandData);
    } catch (error) {
        console.error(`Error updating command with ID ${id}:`, error);
        throw new Error(`Failed to update command with ID ${id}.`);
    }
}

async function updateProductInCommand(id,productData) {
    try {
        return await apiRequest(`/command/${id}/update-product`, 'PUT', productData);
    } catch (error) {
        console.error(`Error updating product in command with ID ${id}:`, error);
        throw new Error(`Failed to update product in command with ID ${id}.`);
    }
}

async function closeCommand(id) {
    try {
        return await apiRequest(`/command/${id}/close`, 'PUT');
    } catch (error) {
        console.error(`Error closing command with ID ${id}:`, error);
        throw new Error(`Failed to close command with ID ${id}.`);
    }
}

async function deleteCommand(id) {
    try {
        return await apiRequest(`/command/${id}`, 'DELETE');
    } catch (error) {
        console.error(`Error deleting command with ID ${id}:`, error);
        throw new Error(`Failed to delete command with ID ${id}.`);
    }
}

async function deleteProductFromCommand(id, productData) {
    try {
        return await apiRequest(`/command/${id}/remove-product`, 'DELETE', productData);
    } catch (error) {
        console.error(`Error deleting product from command with ID ${id}:`, error);
        throw new Error(`Failed to delete product from command with ID ${id}.`);
    }
}

export {
    getAllOpenCommands,
    getAllOpenCompleteCommands,
    getAllClosedCommands,
    getClosedCommandById,
    createCommand,
    addProductToCommand,
    getOpenCommandById,
    getCompleteCommandById,
    updateCommand,
    updateProductInCommand,
    closeCommand,
    deleteCommand,
    deleteProductFromCommand
};
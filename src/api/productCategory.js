import { apiRequest } from "./apiCall";

async function getAllCategories() {
    try {
        return await apiRequest('/product-category', 'GET');
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Unable to retrieve categories.');
    }
}

async function getCategoryById(id) {
    try {
        return await apiRequest(`/product-category/${id}`, 'GET');
    } catch (error) {
        console.error(`Error fetching category with ID ${id}:`, error);
        throw new Error(`Unable to retrieve category with ID ${id}.`);
    }
}

async function createCategory(categoryData) {
    try {
        return await apiRequest('/product-category', 'POST', categoryData);
    } catch (error) {
        console.error('Error creating category:', error);
        throw new Error('Failed to create category.');
    }
}

async function updateCategory(id, categoryData) {
    try {
        return await apiRequest(`/product-category/${id}`, 'PUT', categoryData);
    } catch (error) {
        console.error(`Error updating category with ID ${id}:`, error);
        throw new Error(`Failed to update category with ID ${id}.`);
    }
}

async function deleteCategory(id) {
    try {
        return await apiRequest(`/product-category/${id}`, 'DELETE');
    } catch (error) {
        console.error(`Error deleting category with ID ${id}:`, error);
        throw new Error(`Failed to delete category with ID ${id}.`);
    }
}

export { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
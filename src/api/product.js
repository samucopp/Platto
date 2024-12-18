import { apiRequest } from './apiRequest';

async function getAllProducts() {
    try {
        return await apiRequest('/product', 'GET');
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Unable to retrieve products.');
    }
}

async function getProductById(id) {
    try {
        return await apiRequest(`/product/${id}`, 'GET');
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw new Error(`Unable to retrieve product with ID ${id}.`);
    }
}

async function createProduct(productData) {
    try {
        return await apiRequest('/product', 'POST', productData);
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Failed to create product.');
    }
}

async function updateProduct(id, productData) {
    try {
        return await apiRequest(`/product/${id}`, 'PUT', productData);
    } catch (error) {
        console.error(`Error updating product with ID ${id}:`, error);
        throw new Error(`Failed to update product with ID ${id}.`);
    }
}

async function deleteProduct(id) {
    try {
        return await apiRequest(`/product/${id}`, 'DELETE');
    } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw new Error(`Failed to delete product with ID ${id}.`);
    }
}

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
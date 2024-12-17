import { apiRequest } from './apiCall';

async function logIn(userData) {
    try {
        const response = await apiRequest('/login', 'POST', userData);
        if(response.token){
        localStorage.setItem('token', response.token);
        }
        return response.token;
    } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Login failed, please try again.');
    }
}

export { logIn };
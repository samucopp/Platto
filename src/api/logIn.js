import { apiRequest } from './apiRequest';

async function logIn(userData) {
    try {
        const response = await apiRequest('/login', 'POST', userData);
        if(response.token){
        sessionStorage.setItem('token', response.token);
        }
        return response.token;
    } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Login failed, please try again.');
    }
}

export { logIn };
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { logIn } from '../../api/logIn';
import './Login.css';

function Login() {
    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await logIn({ user_name, password });
            if (token) {
                console.log('Login successful, token:', token);
                navigate('/home');
            } else {
                console.error('Login failed: No token received');
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <main className="login-page">
            <div className="login-container">
                <div className="image-container">
                    <img src="images/monocromo_logo_transparente.png" alt="logo del restaurante" />
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-name">
                            <label htmlFor="user_name"></label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                placeholder="USUARIO"
                                required
                                value={user_name}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-password">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="CONTRASEÑA"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login-button" aria-label="LogIn" type="submit">
                            <FiLogIn size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </main >
    );
}

export default Login;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../api/logIn';

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
        <div className="login-page">
            <header>
                <h1>Monocromo</h1>
                <h3>By Platto</h3>
            </header>
            <main>
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
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
                        <div className="form-group">
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
                        <button type="submit">ENTRAR</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Login;
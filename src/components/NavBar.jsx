import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import './NavBar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link className="navbar-brand" to="/home">Platto</Link>
            </div>
            <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                <ul className="navbar-menu-list">
                    <li className="navbar-item">
                        <Link to="/menu">MENU</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/users">USUARIOS</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/tables">MESAS</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/history">HISTORIAL</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <button className="navbar-icon" aria-label="Settings" onClick={toggleMenu}>
                    <FiSettings size={24} />
                </button>
                <button className="navbar-icon" aria-label="Log out" onClick={handleLogout}>
                    <FiLogOut size={24} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

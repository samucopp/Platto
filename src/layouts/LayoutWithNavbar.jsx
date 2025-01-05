import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";

function LayoutWithNavbar() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutWithNavbar;

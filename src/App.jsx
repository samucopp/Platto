import { Routes, Route } from "react-router-dom";
import LayoutWithNavbar from "../src/layouts/LayoutWithNavbar";

import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landingpage/LandingPage";
import Menu from "./pages/menu/Menu";
import Users from "./pages/users/Users";
import History from "./pages/history/History";
import Home from "./pages/home/Home";
import Tables from "./pages/tables/Tables";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />

            <Route element={<LayoutWithNavbar />}>
                <Route path="menu" element={<Menu />} />
                <Route path="/users" element={<Users />} />
                <Route path="/history" element={<History />} />
                <Route path="home" element={<Home />} />
                <Route path="/tables" element={<Tables />} />
                {/* Agrega aquí todas las páginas que quieras que tengan Navbar */}
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;

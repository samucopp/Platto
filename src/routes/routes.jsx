import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import Login from "../pages/login/Login";
import LandingPage from "../pages/landingpage/LandingPage";
import Menu from "../pages/menu/Menu";
import Users from "../pages/users/Users";
//import Home from "../pages/Home";
//import Tables from "../pages/Tables";
//import History from "../pages/History";

const router = createBrowserRouter([
    {
        path: "/",              // La ruta base de la URL
        element: <Root />,      // El componente que se renderizará
        errorElement: <ErrorPage />,  // Qué mostrar si hay un error
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "users",        // Resultará en '/users'
                element: <Users />,
            },
            //            {
            //                path: "home",          // Página de inicio (misma que '/')
            //                element: <Home />,
            //            },
            //            {
            //                path: "tables",       // Resultará en '/tables'
            //                element: <Tables />,
            //            },
            //            {
            //                path: "history",      // Resultará en '/history'
            //                element: <History />,
            //            },
        ],
    },
]);

export default router;
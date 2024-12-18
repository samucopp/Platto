import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import Login from "../pages/login/Login";
import LandingPage from "../pages/landingpage/LandingPage";
//import Home from "../pages/Home";
//import Products from "../pages/Menu";
//import Tables from "../pages/Tables";
//import Users from "../pages/Users";
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
//            {
//                path: "home",          // Página de inicio (misma que '/')
//                element: <Home />,
//            },
//            {
//                path: "menu",   // Resultará en '/categories'
//                element: <Menu />,
//            },
//            {
//                path: "tables",       // Resultará en '/tables'
//                element: <Tables />,
//            },
//            {
//                path: "users",        // Resultará en '/users'
//                element: <Users />,
//            },
//            {
//                path: "history",      // Resultará en '/history'
//                element: <History />,
//            },
        ],
    },
]);

export default router;
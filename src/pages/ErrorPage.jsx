import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>¡Oops!</h1>
            <p>Lo sentimos, ha ocurrido un error</p>

            <p className="error-details">
                <i>{error.statusText || error.message}</i>
            </p>

            <Link to="/" className="button">
                Volver al Inicio
            </Link>
        </div>
    );
}

export default ErrorPage;
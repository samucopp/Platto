import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    // useRouteError nos da acceso al error que ocurrió
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>¡Oops!</h1>
            <p>Lo sentimos, ha ocurrido un error</p>

            {/* Mostrar detalles del error */}
            <p className="error-details">
                <i>{error.statusText || error.message}</i>
            </p>

            {/* Botón para volver a la página principal */}
            <Link to="/" className="button">
                Volver al Inicio
            </Link>
        </div>
    );
}

export default ErrorPage;
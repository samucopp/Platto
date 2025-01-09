import "./Command.css";

function Command({ command }) {
    if (!command) {
        return (
            <section className="not-command">
                <p>Selecciona una comanda para ver el detalle.</p>
            </section>
        );
    }

    return (
        <section className="command">
            <div className="command-header">
                <img src="images/monocromo_logo_transparente.png" alt="logo del restaurante" />
            </div>
            <p className="command-title">FACTURA SIMPLIFICADA</p>
            <div className="command-info">
                <p><strong>#</strong>{command.command_id}</p>
                <p><strong>Mesa:</strong> {command.table_id}</p>
                <p><strong>Pax:</strong> {command.pax}</p>
            </div>
            <p className="command-info"> {new Date(command.date).toLocaleString('es-ES', {
                weekday: 'long', // Día de la semana
                year: 'numeric', // Año
                month: 'long', // Mes
                day: 'numeric', // Día
                hour: '2-digit', // Hora
                minute: '2-digit', // Minutos
            })}</p>
            <div className="command-info">
                <p><strong>Turno:</strong> {command.time}</p>
                <p><strong>Atendido por:</strong> {command.user_name}</p>
            </div>
            <h4>Productos:</h4>
            <ul>
                {command.Products.map((product) => (
                    <li key={product._id}>
                        <p>{product.quantity}</p>
                        <p>{product.name}</p>
                        <p>{(product.price / 100).toFixed(2)} €</p>
                    </li>
                ))}
            </ul>
            <h3>Total: {(command.total / 100).toFixed(2)} €</h3>
        </section>
    );
}

export default Command;

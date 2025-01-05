import "./Command.css";

function Command({ command }) {
    if (!command) {
        return (
            <section className="command-container-wrapper">
                <h2>Comanda</h2>
                <p>Selecciona una comanda para ver el detalle.</p>
            </section>
        );
    }

    return (
        <section className="command-container-wrapper">
            <h2>Detalle de la Comanda #{command.command_id}</h2>
            <p><strong>Fecha:</strong> {new Date(command.date).toLocaleDateString()}</p>
            <p><strong>Hora:</strong> {command.time}</p>
            <p><strong>Estado:</strong> {command.status}</p>
            <p><strong>Mesa:</strong> {command.table_id}</p>
            <p><strong>Atendido por:</strong> {command.user_name}</p>
            <p><strong>Número de comensales:</strong> {command.pax}</p>
            <p><strong>Total:</strong> {command.total / 100} €</p>

            <h3>Productos:</h3>
            <ul>
                {command.Products.map((product) => (
                    <li key={product._id}>
                        {product.name} - {product.quantity} x {(product.price / 100).toFixed(2)} €
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Command;

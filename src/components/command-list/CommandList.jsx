import './CommandList.css';

function CommandList({ commands, onSelectCommand }) {
    return (
        <section className="command-list">
            <h2>Comandas</h2>
            <ul>
                {commands.length > 0 ? (
                    commands.map((command) => (
                        <li key={command._id} onClick={() => onSelectCommand(command.command_id)}>
                            <p>Comanda #{command.command_id}</p>
                            <p>Fecha: {new Date(command.date).toLocaleDateString()}</p>
                            <p>Total: {(command.total / 100).toFixed(2)} €</p>
                            <p>Estado: {command.status}</p>
                            <p>Mesa: {command.table_id} - Comensales: {command.pax}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay comandas cerradas disponibles.</p>
                )}
            </ul>
        </section>
    );
}

export default CommandList;

import './CommandList.css';

function CommandList({ commands, onSelectCommand }) {
    return (
        <section className="command-list">
            <ul className="command-card-container">
                {commands.length > 0 ? (
                    commands.map((command) => (
                        <li className="command-card" key={command._id} onClick={() => onSelectCommand(command.command_id)}>
                            <h5>#{command.command_id}</h5>
                            <p>Fecha: {new Date(command.date).toLocaleDateString()}</p>
                            <p>Mesa: {command.table_id}</p>
                            <h5>{(command.total / 100).toFixed(2)} €</h5>
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

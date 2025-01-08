import "./Command.css";

function Command({ table, command, onClose, onDeleteProduct, onDeleteCommand, onCloseCommand }) {
    return (
        <div className="home-command-card">
            <button onClick={onClose} className="close-button">Cerrar</button>
            <div className="home-command-card-header">
                <h2>MESA {command.table_id} - {command.pax} PAX</h2>
                {/* <h4>Notas: {command.notes}</h4>
                <h4>Descuento: {command.discount}%</h4> */}
            </div>
            <div className="home-command-card-products">
                {command.Products?.map((product) => (
                    <div key={product.product_id} className="home-command-card-product">
                        <h4>{product.name}</h4>
                        <p>{product.quantity}</p>
                        <p>{((product.price / 100).toFixed(2)).replace('.00', '')} €</p>
                        <p>{((product.subtotal / 100).toFixed(2)).replace('.00', '')} €</p>
                        {/* <p>{product.notes}</p> */}
                        <button
                            onClick={() => onDeleteProduct(product.product_id)}
                            className="delete-button"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
                <div className="home-command-card-total">
                    {command.total > 0 &&(
                        <h3>Total: {((command.total / 100).toFixed(2)).replace('.00', '')} €</h3>
                    )}
                </div>
            </div>
            <div className="home-command-card-actions">
                <button className="action-button" onClick={onDeleteCommand}>
                    Eliminar Comanda
                </button>
                <button className="action-button" onClick={onCloseCommand}>
                    Cerrar Comanda
                </button>
            </div>
        </div >
    );
}

export default Command;

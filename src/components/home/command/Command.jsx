import { VscEyeClosed } from "react-icons/vsc";
import { LuDelete } from "react-icons/lu";
import { TbPaywall } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import "./Command.css";

function Command({ table, command, onClose, onDeleteProduct, onDeleteCommand, onCloseCommand }) {
    return (
        <div className="home-command-card">
            <div className="home-command-card-header">
                <button className="home-command-card-hide-button" onClick={onClose}>
                    <VscEyeClosed size={30} />
                </button>
                <h2>MESA {command.table_id}</h2>
                <h4>{command.pax} PAX</h4>
            </div>
            <div className="home-command-card-products">
                {command.Products?.map((product) => (
                    <div key={product.product_id} className="home-command-card-product">
                        <div className="home-command-card-product-header">
                            <h4>{product.name}</h4>
                            <button className="home-command-card-product-delete-button" onClick={() => onDeleteProduct(product.product_id)}>
                                <LuDelete size={20} />
                            </button>
                        </div>
                        <div className="home-command-card-product-quantity">
                            <p>{product.quantity} x {((product.price / 100).toFixed(2)).replace('.00', '')} €</p>
                            <p>{((product.subtotal / 100).toFixed(2)).replace('.00', '')} €</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="home-command-card-footer">
                <div className="home-command-card-total">
                    {command.total > 0 && (
                        <h3>Total: {((command.total / 100).toFixed(2)).replace('.00', '')} €</h3>
                    )}
                </div>
                <div className="home-command-card-actions">
                    <button className="home-command-card-actions-delete-button" onClick={onDeleteCommand}>
                        <MdDelete size={30} />
                    </button>
                    <button className="home-command-card-actions-save-button" onClick={onCloseCommand}>
                        <TbPaywall size={30} />
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Command;

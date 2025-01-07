import SettingsButton from "../settings-button/SettingsButton";
import "./Product.css";

function Product({ product, onEdit, onDelete }) {
    return (
        <div className="product-item">
            <div className="product-info">
                <div className="product-name">
                    <h3>{product.name}</h3>
                </div>
                <div className="product-description">
                    <p><strong>Descripción:</strong> {product.description}</p>
                </div>
                <div className="product-allergens">
                    <p><strong>Alérgenos:</strong> {product.allergens}</p>
                </div>
                <div className="product-price">
                    <p><strong>Precio:</strong> {((product.price / 100).toFixed(2)).replace('.00', '')} €</p>
                </div>
            </div>
            <div className="product-settings">
                <SettingsButton
                    onEdit={() => onEdit(product)}
                    onDelete={() => onDelete(product)}
                />
            </div>
        </div>
    );
}


export default Product;
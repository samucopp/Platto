import SettingsButton from "../settings-button/SettingsButton";
import "./Product.css";

function Product({ product, onEdit, onDelete }) {
    return (
        <div className="product-item">
            <h3>{product.name_short}</h3>
            <p>{((product.price / 100).toFixed(2)).replace('.00', '')} €</p>
            <SettingsButton
                onEdit={() => onEdit(product)}
                onDelete={() => onDelete(product)}
            />
        </div>
    );
}


export default Product;
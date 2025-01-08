import "./Product.css";

function Product({ product, onAddProduct }) {
    return (
        <div className="home-product-item" onClick={() => onAddProduct(product)}>
            <div className="home-product-info">
                <div className="home-product-name">
                    <h3>{product.name_short}</h3>
                </div>
                <div className="home-product-price">
                    <p><strong>Precio:</strong> {((product.price / 100).toFixed(2)).replace('.00', '')} €</p>
                </div>
            </div>
        </div>
    );
}


export default Product;
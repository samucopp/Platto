import "./Product.css";

function Product({ product, onAddProduct }) {
    return (
        <div className="home-product-item" onClick={() => onAddProduct(product)}>
            <div className="home-product-name">
                <h3>{product.name_short}</h3>
            </div>
            <div className="home-product-price">
                <h3>{((product.price / 100).toFixed(2)).replace('.00', '')} €</h3>
            </div>
        </div>
    );
}


export default Product;
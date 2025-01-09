import { useState, useEffect } from 'react';
import { getAllProductsByCategory } from "../../../api/product";
import Product from "../product/Product";
import "./ProductsList.css";

function ProductsList({ category, onAddProduct }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (category) {
            fetchProducts(category);
        }
    }, [category]);

    async function fetchProducts(category) {
        setLoading(true);
        try {
            const fetchedProducts = await getAllProductsByCategory(category.category_id);
            setProducts(fetchedProducts);
        } catch (error) {
            console.error("Error al cargar productos", error);
            alert("No se pudieron cargar los productos.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="home-product-list">
            {category ? (
                products && products.length > 0 ? (
                    products.map((product) => (
                        <Product
                            key={product.product_id}
                            product={product}
                            onAddProduct={onAddProduct}
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )
            ) : (
                <p></p>
            )}
        </section>
    );
}

export default ProductsList;
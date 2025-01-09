import { useState, useEffect } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import Product from "../product/Product";
import ProductModal from "../product-modal/ProductModal";
import { getAllProductsByCategory, updateProduct, deleteProduct, createProduct } from "../../api/product";
import "./ProductsList.css";

function ProductsList({ category, categories }) {
    const [products, setProducts] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        if (category)
            fetchProducts(category);
    }, [category]);

    async function fetchProducts(category) {
        setLoading(true);
        try {
            const products = await getAllProductsByCategory(category.category_id);
            setProducts(products);
        } catch (error) {
            console.error("Error al cargar productos", error);
            alert("No se pudieron cargar los productos.");
        } finally {
            setLoading(false);
        }
    }

    function openEditModal(product) {
        setSelectedProduct(product);
        setNewProduct(product);
        setShowEditModal(true);
    }

    function openCreateModal() {
        setNewProduct();
        setShowCreateModal(true);
    }
    async function handleCreateProduct() {
        try {
            const createdProduct =await createProduct(newProduct);
            setProducts((prevProducts) => [...prevProducts, createdProduct]);
            setShowCreateModal(false);
        } catch (error) {
            console.error("Error al crear el producto", error);
        }
    }
    async function handleDelete(productId) {
        try {
            await deleteProduct(productId);
            setProducts(products.filter((product) => product.product_id !== productId));
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    }
    async function handleUpdate() {
        if (!validateProduct(newProduct, products)) {
            alert("Por favor, revisa los datos del producto. Hay errores en el formulario.");
            return;
        }
        try {
            await updateProduct(selectedProduct.product_id, newProduct);
            setProducts(products.map((product) =>
                product.product_id === selectedProduct.product_id ? { ...product, ...newProduct } : product
            ));
            setShowEditModal(false);
        } catch (error) {
            console.error("Error al actualizar el producto", error);
        }
    }
    function validateProductName(productName) {
        if (!productName.trim()) {
            setError(oldError => ({ ...oldError, name: "El nombre no puede estar vacío." }));
            return false;
        }
        setError(oldError => ({ ...oldError, name: null }));
        return true;
    }
    function validateProductShortName(productShortName, products) {
        if (!productShortName.trim()) {
            setError(oldError => ({ ...oldError, name_short: "El nombre no puede estar vacío." }));
            return false;
        }
        if (products.some(product => product.name_short == productShortName)) {
            setError(oldError => ({ ...oldError, name_short: "El nombre ya existe." }));
            return false;
        }
        setError(oldError => ({ ...oldError, name_short: null }));
        return true;
    }
    function validateProductPrice(productPrice) {
        if (!productPrice || productPrice < 0) {
            setError(oldError => ({ ...oldError, price: "El precio no puede estar vacío ni ser negativo." }));
            return false;
        }
        setError(oldError => ({ ...oldError, price: null }));
        return true;
    }
    function validateProduct(newProduct, products) {
        const otherProducts = products.filter(product => product.product_id !== newProduct.product_id);
        let result = true;

        result = validateProductName(newProduct.name) && result;
        result = validateProductShortName(newProduct.name_short, otherProducts) && result;
        result = validateProductPrice(newProduct.price) && result;
        return result;
    }

    return (
        <section className="product-list">
            {category ? (
                products && products.length > 0 ? (
                        products.map((product) => (
                            <Product
                            key={product.product_id}
                            product={product}
                            onEdit={openEditModal}
                            onDelete={() => handleDelete(product.product_id)} />
                            ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )
            ) : (
                <p>Selecciona una categoría para ver los productos.</p>
            )}
            {category && (
                <button className="add-product-btn" aria-label="Añadir Producto" onClick={openCreateModal}>
                    <IoIosAddCircleOutline size={40} />
                </button>
            )}

            {showEditModal && (
                <ProductModal
                    title="Editar Producto"
                    type="edit"
                    onClose={() => setShowEditModal(false)}
                    data={{ newProduct, categories }}
                    actions={{
                        onChange: setNewProduct,
                        onSave: handleUpdate,
                    }}
                />
            )}
            {showCreateModal && (
                <ProductModal
                    title="Añadir Producto"
                    type="add"
                    onClose={() => setShowCreateModal(false)}
                    data={{ newProduct, categories }}
                    actions={{
                        onChange: setNewProduct,
                        onSave: handleCreateProduct,
                    }}
                />
            )}
        </section>
    );
}

export default ProductsList;

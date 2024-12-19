import { useState, useEffect } from "react";
import Category from "../category/Category";
import CategoryModal from "../category-modal/CategoryModal";
import { getAllCategories, deleteCategory, updateCategory } from "../../api/productCategory";
import { getAllProductsByCategory } from "../../api/product";
import "./CategoryList.css";

function CategoryList({ onSelectCategory }) {
    const [categories, setCategories] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        setLoading(true);
        try {
            const data = await getAllCategories();
            setCategories(data);
        } catch (error) {
            console.error("Error al cargar categorías", error);
            setError("No se pudieron cargar las categorías.");
        } finally {
            setLoading(false);
        }
    }

    function openDeleteModal(category) {
        setSelectedCategory(category);
        setShowDeleteModal(true);
    }

    function openEditModal(category) {
        setSelectedCategory(category);
        setNewCategoryName(category.name);
        setShowEditModal(true);
    }

    async function handleDelete() {
        try {
            await deleteCategory(selectedCategory.category_id);
            setCategories(categories.filter((cat) => cat.category_id !== selectedCategory.category_id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error("Error al eliminar categoría", error);
            alert("No se pudo eliminar.");
        }
    }

    async function handleUpdate() {
        if (!newCategoryName.trim()) {
            alert("El nombre no puede estar vacío.");
            return;
        }
        try {
            await updateCategory(selectedCategory.category_id, { name: newCategoryName });
            setCategories(categories.map((cat) =>
                cat.category_id === selectedCategory.category_id ? { ...cat, name: newCategoryName } : cat
            ));
            setShowEditModal(false);
        } catch (error) {
            console.error("Error al actualizar categoría", error);
            alert("No se pudo actualizar.");
        }
    }
    async function handleSelectedCategory(category) {
        setSelectedCategory(category);
        try {
            const products = await getAllProductsByCategory(category.category_id);
            onSelectCategory({ ...category, products });
        } catch (error) {
            console.error("Error al cargar productos", error);
            alert("No se pudieron cargar los productos.");
        }
    }

    return (
        <section className="categories-container">
            <h2>Categorías</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : categories.length > 0 ? (
                <ul>
                    {categories.map((category) => (
                        <Category
                            onClick={handleSelectedCategory}
                            key={category.category_id}
                            category={category}
                            onEdit={openEditModal}
                            onDelete={openDeleteModal}
                        />
                    ))}
                </ul>
            ) : (
                <p>No hay categorías disponibles.</p>
            )}

            {showDeleteModal && (
                <CategoryModal title="Confirmar Eliminación" onClose={() => setShowDeleteModal(false)}>
                    <p>¿Estás seguro de eliminar la categoría "{selectedCategory.name}"?</p>
                    <button className="delete-btn" onClick={handleDelete}>Eliminar</button>
                </CategoryModal>
            )}

            {showEditModal && (
                <CategoryModal title="Editar Categoría" onClose={() => setShowEditModal(false)}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                        />
                    </label>
                    <button className="save-btn" onClick={handleUpdate}>Guardar</button>
                </CategoryModal>
            )}
        </section>
    );
}

export default CategoryList;
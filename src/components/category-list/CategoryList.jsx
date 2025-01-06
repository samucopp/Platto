import { useState, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Category from "../category/Category";
import CategoryModal from "../category-modal/CategoryModal";
import { deleteCategory, updateCategory, createCategory } from "../../api/productCategory";
import "./CategoryList.css";

function CategoryList({ categories, onSelectCategory, onCategoryUpdate, onCategoryDelete }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");

    function openDeleteModal(category) {
        setSelectedCategory(category);
        setShowDeleteModal(true);
    }

    function openEditModal(category) {
        setSelectedCategory(category);
        setNewCategoryName(category.name);
        setShowEditModal(true);
    }

    function openCreateModal() {
        setNewCategoryName();
        setShowCreateModal(true);
    }

    async function handleCreateCategory() {
        console.log("Enviando datos al backend:", newCategoryName);
        try {
            const response = await createCategory(newCategoryName);
            const newCategory = response.productCategory;
            onCategoryUpdate(newCategory);
            alert("Categoria creada correctamente.");
            setShowCreateModal(false);
        } catch (error) {
            console.error("Error al crear el producto", error);
            alert("No se pudo crear el producto.");
        }
    }

    async function handleDelete() {
        try {
            await deleteCategory(selectedCategory.category_id);
            alert("Categoría eliminada correctamente.");
            onCategoryDelete(selectedCategory.category_id);
        } catch (error) {
            console.error("Error al eliminar categoría", error);
            alert("No se pudo eliminar.");
        } finally {
            setShowDeleteModal(false);
        }
    }

    async function handleUpdate() {
        if (!newCategoryName.trim()) {
            alert("El nombre no puede estar vacío.");
            return;
        }
        try {
            await updateCategory(selectedCategory.category_id, { name: newCategoryName });
            const updatedCategory = { ...selectedCategory, name: newCategoryName };
            onCategoryUpdate(updatedCategory);
        } catch (error) {
            console.error("Error al actualizar categoría", error);
            alert("No se pudo actualizar.");
        } finally {
            setShowEditModal(false);
        }
    }

    return (
        <section className="category-list">
            {categories && categories.length > 0 ? (
                <ul className="category-card-container">
                    {categories.map((category) => (
                        <Category
                            onClick={() => onSelectCategory(category)}
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
            <button className="add-category-btn" aria-label="Añadir Categoría" onClick={openCreateModal}>
                <IoIosAddCircleOutline size={30} />
            </button>

            {showDeleteModal && (
                <CategoryModal
                    title="Confirmar Eliminación"
                    type="delete"
                    onClose={() => setShowDeleteModal(false)}
                    data={{ name: selectedCategory.name }}
                    actions={{
                        onDelete: handleDelete
                    }}
                />
            )}

            {showEditModal && (
                <CategoryModal
                    title="Editar Categoría"
                    type="edit"
                    onClose={() => setShowEditModal(false)}
                    data={{ newCategoryName }}
                    actions={{
                        onChange: setNewCategoryName,
                        onSave: handleUpdate
                    }}
                />
            )}

            {showCreateModal && (
                <CategoryModal
                    title="Añadir Categoria"
                    type="add"
                    onClose={() => setShowCreateModal(false)}
                    data={{ newCategoryName }}
                    actions={{
                        onChange: setNewCategoryName,
                        onSave: handleCreateCategory,
                    }}
                />
            )}
        </section>
    );
}

export default CategoryList;
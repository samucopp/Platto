import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Category from "../category/Category";
import CategoryModal from "../category-modal/CategoryModal";
import { deleteCategory, updateCategory, createCategory } from "../../api/productCategory";
import "./CategoryList.css";

function CategoryList({ categories, onSelectCategory, onCategoryUpdate, onCategoryDelete }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");

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
            setShowCreateModal(false);
        } catch (error) {
            console.error("Error al crear el producto", error);
        }
    }

    async function handleDelete(categoryId) {
        try {
            await deleteCategory(categoryId);
            onCategoryDelete(categoryId);
        } catch (error) {
            console.error("Error al eliminar categoría", error);
            alert("No se puede eliminar una categoria con productos.");
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
        } finally {
            setShowEditModal(false);
        }
    }

    return (
        <section className="category-list">
            {categories && categories.length > 0 && (
                <ul className="category-card-container">
                    {categories.map((category) => (
                        <Category
                            onClick={() => onSelectCategory(category)}
                            key={category.category_id}
                            category={category}
                            onEdit={openEditModal}
                            onDelete={() => handleDelete(category.category_id)}
                        />
                    ))}
                    <button className="add-category-btn" aria-label="Añadir Categoría" onClick={openCreateModal}>
                        <IoIosAddCircleOutline size={30} />
                    </button>
                </ul>
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
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/NavBar";
import CategoryList from "../../components/category-list/CategoryList";
import ProductsList from "../../components/products-list/ProductsList";
import { getAllCategories } from "../../api/productCategory";
import "./Menu.css";

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error al cargar categorías", error);
            }
        }
        fetchCategories();
    }, []);

    function updateCategoryInState(updatedCategory) {
        setCategories((prevCategories) =>
            prevCategories.map((cat) =>
                cat.category_id === updatedCategory.category_id ? updatedCategory : cat
            )
        );
    }

    function removeCategoryFromState(categoryId) {
        setCategories((prevCategories) =>
            prevCategories.filter((cat) => cat.category_id !== categoryId)
        );
    }

    return (
        <div className="menu-page">
            <Navbar />
            <section className="categories-container">
                <CategoryList
                    categories={categories}
                    onSelectCategory={setSelectedCategory} 
                    onCategoryUpdate={updateCategoryInState}
                    onCategoryDelete={removeCategoryFromState}
                />
            </section>
            <section className="products-container">
                <ProductsList
                    categories={categories}
                    category={selectedCategory} />
            </section>
        </div>
    );
}

export default Menu;

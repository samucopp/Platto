import Category from "../category/Category";
import "./CategoryList.css";

function CategoryList({ categories, onSelectCategory }) {
    return (
        <section className="category-list">
            {categories && categories.length > 0 ? (
                <ul className="category-card-container">
                    {categories.map((category) => (
                        <Category
                            onClick={() => onSelectCategory(category)}
                            key={category.category_id}
                            category={category}
                        />
                    ))}
                </ul>
            ) : (
                <p>No hay categorías disponibles.</p>
            )}
        </section>
    );
}

export default CategoryList;
import Category from "../category/Category";
import "./CategoryList.css";

function CategoryList({ categories, onSelectCategory }) {
    return (
        <section className="home-category-list">
            {categories && categories.length > 0 && (
                <ul className="home-category-card-container">
                    {categories.map((category) => (
                        <Category
                            onClick={() => onSelectCategory(category)}
                            key={category.category_id}
                            category={category}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default CategoryList;
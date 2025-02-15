import "./Category.css";

function Category({ category, onClick }) {
    return (
        <div onClick={() => onClick(category)} className="home-category-card">
            <div className="home-category-title">
                <h3 >{category.name}</h3>
            </div>
        </div>
    );
}

export default Category;
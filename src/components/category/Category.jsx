import SettingsButton from "../settings-button/SettingsButton";
import "./Category.css";

function Category({ category, onEdit, onDelete, onClick }) {
    return (
        <div onClick={() => onClick(category)} className="category-card">
            <SettingsButton
                onEdit={() => onEdit(category)}
                onDelete={() => onDelete(category)}
            />
            <div className="category-title">
                <h3 >{category.name}</h3>
            </div>
        </div>
    );
}

export default Category;
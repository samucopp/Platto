import SettingsButton from "../settings-button/SettingsButton";
import "./Category.css";

function Category({ category, onEdit, onDelete, onClick }) {
    return (
        <div onClick={() => onClick(category)} className="category-item">
            <h3>{category.name}</h3>
            <SettingsButton
                onEdit={() => onEdit(category)}
                onDelete={() => onDelete(category)}
            />
        </div>
    );
}

export default Category;
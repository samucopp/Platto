import SettingsButton from "../settings-button/SettingsButton";
import "./Category.css";

function Category({ category, onEdit, onDelete, onClick }) {
    return (
        <div onClick={() => onClick(category)} className="category-card">
            <div className="category-settings">
                <SettingsButton
                    onEdit={() => onEdit(category)}
                    onDelete={() => onDelete(category)}
                />
            </div>
            <div className="category-title">
                <h3 >{category.name}</h3>
            </div>
        </div>
    );
}

export default Category;
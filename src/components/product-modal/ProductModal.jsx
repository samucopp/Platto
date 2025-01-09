import { VscEyeClosed } from "react-icons/vsc";
import { CiSaveDown1 } from "react-icons/ci";
import "./ProductModal.css";

function ProductModal({ title, type, onClose, data, actions }) {
    return (
        <div className="modal-backdrop" role="dialog" aria-labelledby="modal-title">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-buttons">
                        <button className="close-button" onClick={onClose}>
                            <VscEyeClosed size={30} />
                        </button>
                        <button className="save-button" onClick={actions.onSave}>
                            <CiSaveDown1 size={30} />
                        </button>
                    </div>
                    <h2 id="modal-title">{title}</h2>
                </div>
                <div className="modal-body">
                    {type === "edit" && (
                        <>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={data.newProduct.name_short}
                                    onChange={(e) => actions.onChange({ ...data.newProduct, name_short: e.target.value })}
                                />
                            </label>
                            <label>
                                Nombre Completo:
                                <textarea
                                    value={data.newProduct.name}
                                    onChange={(e) => actions.onChange({ ...data.newProduct, name: e.target.value })}
                                />
                            </label>
                            <label>
                                Precio:
                                <input
                                    type="number"
                                    value={data.newProduct.price}
                                    onChange={(e) => actions.onChange({ ...data.newProduct, price: parseFloat(e.target.value) })}
                                />
                            </label>
                            <label>
                                Categoría:
                                <select
                                    value={data.newProduct.category_id}
                                    onChange={(e) => actions.onChange({ ...data.newProduct, category_id: e.target.value })}
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {data.categories.map((cat) => (
                                        <option key={cat.category_id} value={cat.category_id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Descripción:
                                <textarea
                                    value={data.newProduct.description || ""}
                                    onChange={(e) => actions.onChange({ ...data.newProduct, description: e.target.value })}
                                />
                            </label>
                            <label>
                                Allergens:
                                <textarea
                                    value={data.newProduct.allergens || ""}
                                    onChange={(e) => actions.onChange({ ...data.newProduct, allergens: e.target.value })}
                                />
                            </label>
                        </>
                    )}
                    {type === "add" && (
                        <>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    onChange={(e) => actions.onChange({ ...data.newProduct, name_short: e.target.value })}
                                />
                            </label>
                            <label>
                                Nombre Completo:
                                <textarea
                                    onChange={(e) => actions.onChange({ ...data.newProduct, name: e.target.value })}
                                />
                            </label>
                            <label>
                                Precio:
                                <input
                                    type="number"
                                    onChange={(e) => actions.onChange({ ...data.newProduct, price: parseFloat(e.target.value) })}
                                />
                            </label>
                            <label>
                                Categoría:
                                <select
                                    onChange={(e) => actions.onChange({ ...data.newProduct, category_id: e.target.value })}
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {data.categories.map((cat) => (
                                        <option key={cat.category_id} value={cat.category_id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Descripción:
                                <textarea
                                    onChange={(e) => actions.onChange({ ...data.newProduct, description: e.target.value })}
                                />
                            </label>
                            <label>
                                Allergens:
                                <textarea
                                    onChange={(e) => actions.onChange({ ...data.newProduct, allergens: e.target.value })}
                                />
                            </label>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
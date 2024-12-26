import "./ProductModal.css";

function ProductModal({ title, type, onClose, data, actions }) {
    return (
        <div className="modal-backdrop" role="dialog" aria-labelledby="modal-title">
            <div className="modal-content">
                <h2 id="modal-title">{title}</h2>
                <div className="modal-body">
                    {type === "delete" && (
                        <>
                            <p>¿Estás seguro de eliminar el producto "{data.name_short}"?</p>
                            <button className="delete-btn" onClick={actions.onDelete}>Eliminar</button>
                        </>
                    )}
                    
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
                                <input
                                    type="text"
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
                            <button className="save-btn" onClick={actions.onSave}>Guardar</button>
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
                                <input
                                    type="text"
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
                            <button className="save-btn" onClick={actions.onSave}>Guardar</button>
                        </>
                    )}
                </div>
                <button className="close-btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default ProductModal;
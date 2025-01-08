import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import TableModal from "../table-modal/TableModal";
import Table from "../table/Table";
import "./TableList.css";

const TableList = ({ tables, onCreateTable, onEditTable, onDeleteTable }) => {
    const [showModal, setShowModal] = useState(false);
    const [newTable, setNewTable] = useState({ capacity: "" });
    const [modalType, setModalType] = useState("add");
    const [selectedTable, setSelectedTable] = useState(null);

    function openCreateModal() {
        setNewTable({ capacity: "" });
        setModalType("add");
        setShowModal(true);
    }

    function openEditModal(table) {
        setNewTable({ ...table });
        setModalType("edit");
        setSelectedTable(table);
        setShowModal(true);
    }

    async function handleSaveTable() {
        try {
            if (modalType === "add") {
                await onCreateTable(newTable);
            } else if (modalType === "edit") {
                const updatedTable = { ...selectedTable, ...newTable };
                await onEditTable(updatedTable);
            }
            setShowModal(false);
        } catch (error) {
            console.error("Error al guardar la mesa", error);
        }
    }

    return (
        <section className="table-card-container">
            {tables.map((table) => (
                <Table
                    key={table.table_id}
                    table={table}
                    onEdit={() => openEditModal(table)}
                    onDelete={() => onDeleteTable(table.table_id)}
                />
            ))}
            <button className="add-table-btn" aria-label="Añadir Mesa" onClick={openCreateModal}>
                <IoIosAddCircleOutline size={30} />
            </button>

            {showModal && (
                <TableModal
                    title={modalType === "add" ? "Añadir Mesa" : "Editar Mesa"}
                    type={modalType}
                    data={{ newTable }}
                    actions={{
                        onChange: setNewTable,
                        onSave: handleSaveTable,
                    }}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
};

export default TableList;

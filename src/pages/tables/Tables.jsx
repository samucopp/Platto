import { useState, useEffect } from "react";
import TableModal from "../../components/table-modal/TableModal";
import TableList from "../../components/table-list/TableList";
import { getAllTables, createTable, updateTable, deleteTable } from "../../api/table";
import "./Tables.css";

const Tables = () => {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);

    useEffect(() => {
        async function fetchTables() {
            try {
                const data = await getAllTables();
                setTables(data);
            } catch (error) {
                console.error("Error al obtener las mesas:", error);
            }
        };

        fetchTables();
    }, []);

    async function handleTableCreated(newTable) {
        try {
            const savedTable = await createTable(newTable); // Llama a la API
            setTables([...tables, savedTable.table]); // Actualiza el estado con la respuesta del backend
        } catch (error) {
            console.error("Error al crear la mesa:", error);
            alert("No se pudo guardar la mesa en el servidor.");
        }
    }

    async function handleTableUpdated(updatedTable) {
        try {
            await updateTable(updatedTable.table_id, updatedTable);
            setTables(tables.map(table =>
                table.table_id === updatedTable.table_id ? updatedTable : table
            ));
            if (selectedTable?.table_id === updatedTable.table_id) {
                setSelectedTable(updatedTable);
            }
        } catch (error) {
            console.error("Error al actualizar la mesa:", error);
            alert("No se pudo actualizar la mesa en el servidor.");
        }
    }

    async function handleTableDeleted(tableId) {
        try {
            await deleteTable(tableId);
            setTables(tables.filter(table => table.table_id !== tableId));
            setSelectedTable(null);
        } catch (error) {
            console.error("Error al eliminar la mesa:", error);
            alert("No se pudo eliminar la mesa en el servidor.");
        }
    }

    return (
        <div className="tables-page">
            <TableList
                tables={tables}
                onCreateTable={handleTableCreated}
                onEditTable={handleTableUpdated}
                onDeleteTable={handleTableDeleted}
            />
        </div>
    );
};

export default Tables;
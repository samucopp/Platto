import { useState, useEffect } from "react";
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
            const savedTable = await createTable(newTable);
            setTables([...tables, savedTable.table]);
        } catch (error) {
            console.error("Error al crear la mesa:", error);
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
        }
    }

    async function handleTableDeleted(tableId) {
        try {
            await deleteTable(tableId);
            setTables(tables.filter(table => table.table_id !== tableId));
            setSelectedTable(null);
        } catch (error) {
            console.error("Error al eliminar la mesa:", error);
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
import Table from "../table/Table";
import "./TableList.css";

function TableList({ tables, onSelectTable }) {
    return (
        <section className="home-table-list">
            {tables.map((table) => (
                <Table
                    key={table.table_id}
                    table={table}
                    onClick={() => onSelectTable(table)}
                    className={table.status === "ocupada" ? "occupied" : "available"} 
                />
            ))}
        </section>
    );
};

export default TableList;

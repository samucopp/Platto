import Table from "../table/Table";
import "./TableList.css";

function TableList({ tables, onSelectTable }) {
    return (
        <section className="home-table-list">
            <ul className="home-table-card-container">
                {tables.map((table) => (
                    <Table
                        key={table.table_id}
                        table={table}
                        onClick={() => onSelectTable(table)}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TableList;

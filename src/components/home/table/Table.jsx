import "./Table.css";

const Table = ({ table, onClick }) => {
    return (
        <div className="home-table-card" onClick={onClick}>
            <div className='home-table-info'>
                <p><strong>Mesa:</strong> {table.table_id}</p>
                <p><strong>Capacidad:</strong> {table.capacity} pax</p>
            </div>
        </div>
    );
};

export default Table;
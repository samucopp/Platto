import "./Table.css";

const Table = ({ table, onClick, className }) => {
    return (
        <div className={`home-table-card ${className}`} onClick={onClick}>
            <div className='home-table-card-name'>
                <p>{table.table_id}</p>
            </div>
            <div className='home-table-card-capacity'>
                <p>{table.capacity} pax</p>
            </div>
        </div>
    );
};

export default Table;
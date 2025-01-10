import SettingsButton from "../settings-button/SettingsButton";
import "./Table.css";

const Table = ({ table, onEdit, onDelete }) => {
    return (
        <div className="table-card">
            <div className='table-settings'>
                <SettingsButton onEdit={onEdit} onDelete={onDelete} />
            </div>
            <div className='table-info'>
                <p><strong>Mesa:</strong> {table.table_id}</p>
                <p><strong>Capacidad:</strong> {table.capacity} pax</p>
            </div>
        </div>
    );
};

export default Table;
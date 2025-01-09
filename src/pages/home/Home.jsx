import { useState, useEffect } from "react";
import { getAllCategories } from "../../api/productCategory";
import { getAllTables, updateTable } from "../../api/table";
import { getCompleteCommandByTableId, createCommand, deleteCommand, closeCommand, addProductToCommand, deleteProductFromCommand } from "../../api/command";
import CategoryList from "../../components/home/category-list/CategoryList";
import ProductsList from "../../components/home/products-list/ProductsList";
import TableList from "../../components/home/table-list/TableList";
import Command from "../../components/home/command/Command";
import "./Home.css";

function Home() {
    const [tables, setTables] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTable, setSelectedTable] = useState(null);
    const [command, setCommand] = useState({ Products: [] });

    useEffect(() => {
        async function fetchCategories() {
            try {
                const fetchedCategories = await getAllCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Error al cargar las categorías", error);
                alert("No se pudieron cargar las categorías.");
            }
        }

        fetchCategories();
    }, []);

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

    const handleTableSelect = async (table) => {
        try {
            console.log(table);
            if (table.status === "ocupada") {
                const commandData = await getCompleteCommandByTableId(table.table_id);
                setCommand({ ...commandData, Products: commandData.Products || [] });
                setSelectedTable(table);
            } else if (table.status === "disponible") {
                const numPeople = prompt("¿Cuántas personas hay en la mesa?");
                if (numPeople) {
                    const newCommand = await createCommand({
                        table_id: table.table_id,
                        pax: parseInt(numPeople, 10),
                    });
                    setCommand({ ...newCommand, Products: [] });
                    setSelectedTable(table);
                }
            }
        } catch (error) {
            console.error("Error al manejar la selección de mesa:", error);
            alert("Hubo un error al manejar la mesa seleccionada.");
        }
    };

    const handleAddProductToCommand = async (product) => {
        if (command) {
            try {
                const updatedCommandFromServer = await addProductToCommand(command.command_id, { product_id: product.product_id, quantity: 1 });
                console.log("Comanda actualizada en el servidor:", updatedCommandFromServer);
                setCommand(updatedCommandFromServer.command);
            } catch (error) {
                alert("No se pudo actualizar la comanda en el servidor.");
            }
        } else {
            alert("Selecciona una mesa para abrir una comanda.");
        }
    };

    const handleDeleteProductFromCommand = async (product_id) => {
        if (command) {
            try {
                const updatedCommand = await deleteProductFromCommand(command.command_id, { product_id: product_id });
                setCommand(updatedCommand.command);
            } catch (error) {
                alert("No se pudo eliminar el producto de la comanda.");
            }
        } else {
            alert("Selecciona una mesa para gestionar una comanda.");
        }
    };

    const handleDeleteCommand = async () => {
        if (command) {
            try {
                await deleteCommand(command.command_id);
                const updatedTableData = { ...selectedTable, status: 'disponible' };
                await updateTable(selectedTable.table_id, updatedTableData);
                setCommand(null);
                setSelectedTable(null);
            } catch (error) {
                alert("No se pudo eliminar la comanda o actualizar el estado de la mesa.");
                console.error("Error al eliminar la comanda o actualizar la mesa:", error);
            }
        } else {
            alert("Selecciona una mesa para gestionar una comanda.");
        }
    };

    const handleCloseCommand = async () => {
        if (command) {
            try {
                await closeCommand(command.command_id);
                const updatedTableData = { ...selectedTable, status: 'disponible' };
                await updateTable(selectedTable.table_id, updatedTableData);
                setCommand(null);
                setSelectedTable(null);
            } catch (error) {
                alert("No se pudo cerrar la comanda o actualizar el estado de la mesa.");
                console.error("Error al eliminar la comanda o actualizar la mesa:", error);
            }
        } else {
            alert("Selecciona una mesa para gestionar una comanda.");
        }
    };


    return (
        <div className="home-page">
            <section className="home-tables-container">
                <TableList
                    tables={tables}
                    onSelectTable={handleTableSelect}
                />
            </section>
            <section className={`home-command-container ${command && selectedTable ? 'visible' : 'hidden'}`}>
                {command && selectedTable && (
                    <Command
                        table={selectedTable}
                        command={command}
                        onClose={() => setCommand(null)}
                        onDeleteProduct={handleDeleteProductFromCommand}
                        onDeleteCommand={handleDeleteCommand}
                        onCloseCommand={handleCloseCommand}
                    />
                )}
            </section>
            <section className="home-categories-container">
                <CategoryList
                    categories={categories}
                    onSelectCategory={setSelectedCategory}
                />
            </section>
            <section className="home-products-container">
                <ProductsList
                    category={selectedCategory}
                    onAddProduct={handleAddProductToCommand}
                />
            </section>
        </div>
    );
};

export default Home;
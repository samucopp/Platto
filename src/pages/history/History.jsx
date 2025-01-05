import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/NavBar";
import CommandList from "../../components/command-list/CommandList";
import Command from "../../components/command/Command";
import { getAllClosedCommands, getClosedCommandById } from "../../api/command";
import "./History.css";

function History() {
    const [commands, setCommands] = useState([]);
    const [selectedCommand, setSelectedCommand] = useState(null);

    useEffect(() => {
        async function fetchCommands() {
            try {
                const data = await getAllClosedCommands();
                setCommands(data);
            } catch (error) {
                console.error("Failed to load commands", error);
            }
        }

        fetchCommands();
    }, []);

    const handleSelectCommand = async (id) => {
        try {
            const command = await getClosedCommandById(id);
            setSelectedCommand(command);
        } catch (error) {
            console.error("Failed to load selected command", error);
        }
    };

    return (
        <div className="history-page">
            <section className="command-list-container">
                <CommandList
                    commands={commands}
                    onSelectCommand={handleSelectCommand}
                />
            </section>
            <section className="command-container">
                <Command
                    command={selectedCommand}
                />
            </section>
        </div>
    );
}

export default History;
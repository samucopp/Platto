import Navbar from "../../components/navbar/NavBar";
import CommandList from "../../components/command-list/CommandList";
import Command from "../../components/command/Command";
//import "./History.css";

function History() {
    return (
        <div className="history-page">
            <Navbar />
            <section className="command-list-container">
                <CommandList />
            </section>
            <section className="command-container">
                <Command />
            </section>
        </div>
    );
}

export default History;
import Toolbar from "../features/Toolbar";
import LabsList from "../features/LabsList";
import "./RoutePanel.css"
import RouteList from "../features/RouteList";

function RoutePanel() {
    return (
        <div className="main-panel">

            <LabsList />
            
            <RouteList />

            <Toolbar />
            

        </div>
    )
}

export default RoutePanel;
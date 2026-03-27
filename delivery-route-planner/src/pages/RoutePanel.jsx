import "./RoutePanel.css"
import LabsList from "../features/LabsList";
import ClinicsList from "../features/ClinicsList";
import RouteList from "../features/RouteList";
import Toolbar from "../features/Toolbar";
import { useRoute } from "../context/RouteContext";

function RoutePanel() {
    const { selectedLabId } = useRoute();
    return (
        <div className="main-panel">
            {selectedLabId ? <ClinicsList /> : <LabsList />}
            <RouteList />
            <Toolbar />
        </div>
    )
}
export default RoutePanel;
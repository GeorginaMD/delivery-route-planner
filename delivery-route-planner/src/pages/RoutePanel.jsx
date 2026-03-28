import "./RoutePanel.css"
import LabsList from "../features/LabsList";
import ClinicsList from "../features/ClinicsList";
import RouteList from "../features/RouteList";
import Toolbar from "../features/Toolbar";
import { useRoute } from "../context/RouteContext";

function RoutePanel() {
    const { labs, selectedLabId, setSelectedLabId } = useRoute();
    
    const selectedLab = labs.find(lab => lab.id === selectedLabId);

    return (
        <div className="main-panel">
            {selectedLabId ? <ClinicsList onBack={() => setSelectedLabId(null)} labName={selectedLab?.name}/> : <LabsList />}
            <RouteList />
            <Toolbar />
        </div>
    )
}
export default RoutePanel;
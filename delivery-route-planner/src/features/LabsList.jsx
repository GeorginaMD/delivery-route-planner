import "./LabsList.css"
import LocationItem from "../components/LocationItem";
import { useRoute } from "../context/RouteContext";

function LabsList() {

    const { labs, setSelectedLabId  } = useRoute();

    return (
            <section className="labs-panel">
                <header className="labs-header">
                    <h3 className="h3-labs">Laboratorios</h3>
                </header>
                <ul className="labs-list">

                    {labs.map(lab => (
                        <LocationItem key={lab.id} item={lab} onClick={() => setSelectedLabId(lab.id)} /> 
                        
                    ))}
                </ul>
            </section>
    )
}

export default LabsList;                    
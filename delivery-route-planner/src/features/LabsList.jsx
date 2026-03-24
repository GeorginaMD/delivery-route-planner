import "./LabsList.css"
import LocationItem from "../components/LocationItem";
import { useRoute } from "../context/RouteContext";

function LabsList() {

    const { labs } = useRoute();

    return (
            <section className="labs-panel">
                <header className="labs-header">
                    <h3>Laboratorios</h3>
                </header>
                <ul className="labs-list">
                    {labs.map(lab => (
                        <LocationItem key={lab.id} lab={lab} />
                    ))}
                </ul>
            </section>
    )
}

export default LabsList;
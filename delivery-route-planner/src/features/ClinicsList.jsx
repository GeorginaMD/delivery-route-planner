import "./ClinicsList.css"
import { useRoute } from "../context/RouteContext";
import LocationItem from "../components/LocationItem";

function ClinicsList({ onBack, labName }) {

    const { clinics, selectedLabId } = useRoute();

    const filtered = clinics.filter( clinic => clinic.labId === selectedLabId );

    return (
        <section className="clinics-panel">
            <header className="clinics-header">
                    <button onClick={onBack}>⬅</button>
                    <h3 className="h3-clinics">{labName || "Clinicas"}</h3>
            </header>
            <ul className="clinics-list">
                {filtered.map(clinic => (
                     <LocationItem key={clinic.id} item={clinic}/>
                ))}
               
            </ul>
        </section>
    )
}

export default ClinicsList;
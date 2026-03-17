import "./LabsList.css"
import LocationItem from "../components/LocationItem";

function LabsList() {
    return (
            <section className="labs-panel">
                <header className="labs-header">
                    <h2>Laboratorios</h2>
                </header>
                <ul className="labs-list">
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                </ul>
            </section>
    )
}

export default LabsList;
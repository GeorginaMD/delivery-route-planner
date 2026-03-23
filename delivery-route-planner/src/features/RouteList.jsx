import "./RouteList.css" 
import LocationItem from "../components/LocationItem";

function RouteList() {
    return (
            <section className="route-panel">
                <header className="route-header">
                    <h3>Ruta</h3>
                </header>
                <ul className="route-list">
                    <LocationItem />
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

export default RouteList;
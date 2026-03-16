import Toolbar from "../features/Toolbar";
import "./RoutePanel.css"

function RoutePanel() {
    return (
        <div className="route-panel">

            <section className="labs-panel">
                <header className="labs-header">
                    <h2>Laboratorios</h2>

                    {/* {isExpanded && (
                        <button className="add-btn">+</button>
                    )} */}
                </header>

                {/* {isExpanded && (
                    <ul className="labs-list">
                        <LocationItem />
                    </ul>
                )} */}

            </section>
            
            <div className="labs-list">
                LABORATORIO
            </div>
            <div className="route-list">
                RUTA
            </div>
            <div className="toolbar">
                <Toolbar />
            </div>

        </div>
    )
}

export default RoutePanel;
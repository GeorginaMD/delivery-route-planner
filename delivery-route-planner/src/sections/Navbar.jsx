import "./Navbar.css"
import WorkerBtn from "../components/WorkerBtn";
import DayTimeHeader from "../components/DayTimeHeader";

function Navbar() {
    return (
        <div className="navbar">
            <DayTimeHeader />
            <WorkerBtn />
        </div>
    )
}

export default Navbar;
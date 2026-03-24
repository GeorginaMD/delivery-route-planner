import "./DayTimeHeader.css"

function DayTimeHeader() {
    const today = new Date();

    const formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "2-digit",
        month: "long",
    }).format(today);

    return (
        <div className="day-time-header">
            <span className="date">{formattedDate}</span>
            <span className="time"> Ultima lista enviada: --:-- </span>
        </div>
    )
}

export default DayTimeHeader;
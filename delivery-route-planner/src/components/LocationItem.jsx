import "./LocationItem.css"

function LocationItem({ lab }) {
    console.log(lab);
    /* if (!lab) return null; */
    return (
        <li className="location-item">{lab.name}</li>
    )
}

export default LocationItem;
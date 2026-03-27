import "./LocationItem.css"
import React from "react";

function LocationItem({ lab, onClick }) {
    if (!lab) return <li className="location-item">No data</li>;
    return (
        <li className="location-item" onClick={onClick} >{lab.name}</li>
    )
}
export default LocationItem;

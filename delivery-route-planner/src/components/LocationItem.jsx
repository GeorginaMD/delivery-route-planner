import "./LocationItem.css"
import React from "react";

function LocationItem({ lab }) {
    if (!lab) return <li className="location-item">No data</li>;
    return (
        <li className="location-item">{lab.name}</li>
    )
}
export default LocationItem;

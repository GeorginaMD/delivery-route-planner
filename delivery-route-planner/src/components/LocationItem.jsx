import "./LocationItem.css"
import React from "react";

function LocationItem({ item, onClick }) {
    if (!item) return <li className="location-item">No data</li>;
    return (
        <li className="location-item" onClick={onClick} >{item.name}</li>
    )
}
export default LocationItem;

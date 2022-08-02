import React from "react";
import locationIcon from "../icons/location-pin.svg";
import bedIcon from "../icons/bed.svg";
import dollarIcon from "../icons/dollar.svg";

function HotelCard({ photo, name, description, city, country, rooms, price }) {
  return (
    <div className="hotel-card">
      <div className="hotel-card-header">
        <img src={photo} alt={name}></img>
      </div>
      <div className="hotel-card-body">
        <div className="hotel-card-text-container">
          <span className="hotel-card-name">{name}</span>
          <p className="hotel-card-description">{description}</p>
        </div>
        <div className="hotel-card-tag-container">
          <div className="tag">
            <img
              className="icon-location-pin"
              src={locationIcon}
              alt="location"
            />
            {city}, {country}
          </div>
          <div className="tag">
            <img className="icon-bed" src={bedIcon} alt="bed" />
            {rooms} Habitaciones
          </div>
          <div className="tag">
            <img className="icon-dollar" src={dollarIcon} alt="dollar" />
            {price}
          </div>
        </div>
      </div>
      <div className="hotel-card-footer">
        <button>Reservar</button>
      </div>
    </div>
  );
}

export default HotelCard;

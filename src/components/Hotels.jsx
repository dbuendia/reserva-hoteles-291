import React from "react";
import HotelCard from "./HotelCard";

function Hotels(props) {
  console.log(props);
  return (
    <div className="hotels">
      {props.hotels.map((hotel) => {
        return (
          <HotelCard
            photo={hotel.photo}
            name={hotel.name}
            price={hotel.price}
            description={hotel.description}
            rooms={hotel.rooms}
            city={hotel.city}
            country={hotel.country}
          />
        );
      })}
    </div>
  );
}

export default Hotels;

import React from "react";
import HotelCard from "./HotelCard";

function Hotels({ hotelList }) {
  return (
    <div className="hotels">
      {hotelList.map((hotel) => {
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

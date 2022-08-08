import React from "react";
import HotelCard from "./HotelCard";

// Recibo props de cada filtro desde app (country, price, capacity)
function Hotels({ hotelList, country, price, capacity }) {
  // Filtro todos los elementos segun las opciones de los select con 3 filtros encadenados.
  let filteredHotels = hotelList
    .filter((hotel) => {
      // 1. Si el país del select es "todos":
      // Metemos el elemento directamente en el array de filter haciendo que la condición devuelva true.
      if (country === "Todos") {
        return true;
      }
      // 2. Si el país del hotel es igual al del select, lo incluimos en el array, porque la condición será true.
      return hotel.country === country;
    })
    .filter((hotel) => {
      if (price === "Todos") {
        return true;
      }
      return hotel.price.toString() === price;
    })
    .filter((hotel) => {
      let size = "";

      if (capacity === "Todos") {
        return true;
      }

      if (hotel.rooms > 20) {
        size = "Grande";
      } else if (hotel.rooms > 10 && hotel.rooms < 20) {
        size = "Mediano";
      } else {
        size = "Pequeño";
      }
      return size === capacity;
    });

  return (
    <div className="hotels">
      {filteredHotels.map((elem) => {
        return (
          <HotelCard
            photo={elem.photo}
            name={elem.name}
            price={elem.price}
            description={elem.description}
            rooms={elem.rooms}
            city={elem.city}
            country={elem.country}
          />
        );
      })}
    </div>
  );
}

export default Hotels;

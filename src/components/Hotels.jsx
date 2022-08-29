import React from "react";
import { countries, capacities, prices } from "../datasets/consts";
import HotelCard from "./HotelCard";

// Recibo props de cada filtro desde app (country, price, capacity)
function Hotels({ hotelList, country, price, capacity, dateFrom, dateTo }) {
  // Usamos el valor de los input para crear un nuevo objeto Date.
  dateFrom = new Date(dateFrom);
  dateTo = new Date(dateTo);

  // Unificamos las fechas en el timeZone de Madrid:
  dateFrom.toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  dateTo.toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

  // Seteamos las horas en 0 para buscar a partir de las 12 de la noche del día seleccionado
  dateFrom.setHours(0, 0, 0, 0);
  dateTo.setHours(0, 0, 0, 0);

  const unixDateFrom = dateFrom.getTime();
  const unixDateTo = dateTo.getTime();

  // Filtro todos los elementos segun las opciones de los select con 3 filtros encadenados.
  let filteredHotels = hotelList
    .filter((hotel) => {
      // 1. Si el país del select es "todos":
      // Metemos el elemento directamente en el array de filter haciendo que la condición devuelva true.
      if (country === countries.todos) {
        return true;
      }
      // 2. Si el país del hotel es igual al del select, lo incluimos en el array, porque la condición será true.
      return hotel.country === country;
    })
    .filter((hotel) => {
      if (price === prices.todos) {
        return true;
      }
      return hotel.price.toString() === price;
    })
    .filter((hotel) => {
      let size = "";

      if (capacity === capacities.todos) {
        return true;
      }

      if (hotel.rooms > 20) {
        size = capacities.large;
      } else if (hotel.rooms > 10 && hotel.rooms < 20) {
        size = capacities.medium;
      } else {
        size = capacities.small;
      }
      return size === capacity;
    })
    .filter((hotel) => {
      /* Si los input date están vacíos se muestran todos los hoteles. Indicamos || en lugar de && para que no se actualice la lista de hoteles hasta que ambas fechas hayan sido seleccionadas */
      if (isNaN(unixDateFrom) || isNaN(unixDateTo)) {
        return true;
      }
      /* A través de la comparación de fechas UNIX, si el rango de datos escogidos está entre el rango de disponibilidad
      de los hoteles añadimos el hotel al array filtrado */
      if (
        unixDateFrom >= hotel.availabilityFrom &&
        unixDateTo <= hotel.availabilityTo
      ) {
        return true;
      }
    });

  return (
    <div className="hotels">
      {/* Si el array de hoteles no está vacío, se muestran los datos */}
      {filteredHotels.length != 0 ? (
        filteredHotels.map((elem) => {
          return (
            <HotelCard
              photo={elem.photo}
              name={elem.name}
              price={elem.price}
              description={elem.description}
              rooms={elem.rooms}
              city={elem.city}
              country={elem.country}
              availabilityFrom={elem.availabilityFrom}
              availabilityTo={elem.availabilityTo}
            />
          );
        })
      ) : (
        <p className="error-message">
          Lo sentimos, no hay hoteles disponibles con los filtros seleccionados.
        </p>
      )}
    </div>
  );
}

export default Hotels;

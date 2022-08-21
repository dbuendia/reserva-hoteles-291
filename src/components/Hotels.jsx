import React from "react";
import { countries, capacities, prices } from "../datasets/consts";
import HotelCard from "./HotelCard";

// Recibo props de cada filtro desde app (country, price, capacity)
function Hotels({ hotelList, country, price, capacity, dateFrom, dateTo }) {
  // Me aseguro de que los rangos de "date" estén en el formato correcto y tiempo Unix para poder compararlos.
  dateFrom = new Date(dateFrom);
  dateTo = new Date(dateTo);
  console.log(dateFrom.getTime(), dateTo.getTime());

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
        size = capacities.grande;
      } else if (hotel.rooms > 10 && hotel.rooms < 20) {
        size = capacities.mediano;
      } else {
        size = capacities.pequeno;
      }
      return size === capacity;
    })
    .filter((hotel) => {
      console.log(hotel.availabilityFrom + " From");
      console.log(dateFrom.getTime() + " usuario from");
      // console.log(hotel.availabilityTo + " To");
      // console.log(dateTo.getTime() + " usuario to");

      // Parece que en el dataset la fecha del today se crea en el momento de hacer npm start,
      // Sin embargo en el input es el primer momento del dia elegido (0h). Entonces la logica q tengo aqui nunca se cumple:
      // Porq en realidad mi fecha del input es menor (aunq no deberia serlo)
      // if (
      //   dateFrom.getTime() >= hotel.availabilityFrom &&
      //   dateTo.getTime() <= hotel.availabilityTo
      // ) {
      //   console.log("Dentro del rango");
      // } else {
      //   console.log("no");
      // }
    });
  // Si el rango de datos escogidos está entre el rango de disponibilidad de los hoteles:
  //  // Si dateFrom es = o mayor a availabilityFrom (el dia está dentro del rango de availability from), meto el hotel en true
  // Si dateTo es = o menor a availabilityTo

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

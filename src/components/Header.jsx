import React from "react";

// {
//   dateFrom.toLocaleString("es-ES", options);
// }
// {
//   dateTo.toLocaleString("es-ES", options);
// }

function Header({ country, price, capacity, dateFrom, dateTo }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Formato de fecha válida en datestring
  const validDateFrom = new Date(dateFrom);
  const validDateTo = new Date(dateTo);

  // Extraemos los datos que nos interesan para el string que se mostrará en el header
  const yearFrom = validDateFrom.getFullYear();
  const yearTo = validDateTo.getFullYear();
  const monthFrom = validDateFrom.getMonth();
  const monthTo = validDateTo.getMonth();
  const dayFrom = validDateFrom.getDate();
  const dayTo = validDateTo.getDate();

  // Nuevas fechas con los datos extraídos, el locale y las opciones correspondientes
  const preDateFrom = new Date(yearFrom, monthFrom, dayFrom);
  const preDateTo = new Date(yearTo, monthTo, dayTo);
  const finalDateFrom = preDateFrom.toLocaleString("es-ES", options);
  const finalDateTo = preDateTo.toLocaleString("es-ES", options);

  return (
    <div className="header">
      <h1>
        Seleccionado: {country} {price} y {capacity}
        {dateFrom ? ` entre el ${finalDateFrom}` : ""}
        {dateTo ? ` y el ${finalDateTo}` : ""}
      </h1>
    </div>
  );
}

export default Header;

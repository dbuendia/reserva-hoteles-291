import React from "react";

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

  // Convertimos el valor numérico de precio a lenguaje natural:
  switch (price) {
    case "1":
      price = "Económico";
      break;
    case "2":
      price = "Estándar";
      break;
    case "3":
      price = "Cómodo";
      break;
    case "4":
      price = "Lujoso";
      break;
  }

  return (
    <div className="header">
      <div className="header-title">
        <h1>Reserva de Hoteles 291</h1>
      </div>
      <div className="header-active-filter">
        {/* Si hay algún filtro seleccionado se muestra en el header: */}
        {country === "País" && price === "Precio" && capacity === "Tamaño" ? (
          ""
        ) : (
          <div>
            {country === "País" || country === "" ? "" : ` País ${country} |`}
            {price === "Precio" || price === "" ? "" : ` Precio ${price} |`}
            {capacity === "Tamaño" || capacity === ""
              ? ""
              : ` Capacidad ${capacity} |`}
            {dateFrom ? ` Entre el ${finalDateFrom} |` : ""}
            {dateTo ? ` Hasta el ${finalDateTo}` : ""}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

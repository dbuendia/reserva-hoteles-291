import React from "react";

function Header({ country, price, capacity, dateFrom, dateTo }) {
  return (
    <div className="header">
      <h1>
        Seleccionado: {country} {price} y {capacity}
        {dateFrom ? ` entre el ${dateFrom}` : ""}
        {dateTo ? ` y el ${dateTo}` : ""}
      </h1>
    </div>
  );
}

export default Header;

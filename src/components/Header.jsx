import React from "react";

function Header({ country, price, capacity }) {
  return (
    <div className="header">
      <h1>
        Seleccionado: {country} {price} y {capacity}
      </h1>
    </div>
  );
}

export default Header;

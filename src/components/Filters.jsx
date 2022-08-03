import React from "react";

function Filters({
  country,
  price,
  capacity,
  setCountry,
  setPrice,
  setCapacity,
}) {
  function handleCountrySelectChange(e) {
    setCountry(e.target.value);
  }

  function handlePriceSelectChange(e) {
    setPrice(e.target.value);
  }

  function handleCapacitySelectChange(e) {
    setCapacity(e.target.value);
  }

  return (
    <div className="filters">
      <b>Filtros</b>
      <span>País:</span>
      <select
        name="Country"
        onChange={handleCountrySelectChange}
        value={country}
      >
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <span>Precio:</span>
      <select name="Price" onChange={handlePriceSelectChange} value={price}>
        <option value="Económico">Económico</option>
        <option value="Estándar">Estándar</option>
        <option value="Cómodo">Cómodo</option>
        <option value="Lujoso">Lujoso</option>
      </select>
      <span>Tamaño:</span>
      <select
        name="Capacity"
        onChange={handleCapacitySelectChange}
        value={capacity}
      >
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select>
    </div>
  );
}

export default Filters;

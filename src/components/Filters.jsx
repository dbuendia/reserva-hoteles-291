import React from "react";
import { countries, capacities, prices } from "../datasets/consts";

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
      <p className="filter-title">Filtros</p>
      <div>
        <span>País:</span>
        <select
          name="Country"
          onChange={handleCountrySelectChange}
          value={country}
          className="minimal"
        >
          <option value={countries.todos}>{countries.todos}</option>
          <option value={countries.argentina}>{countries.argentina}</option>
          <option value={countries.brasil}>{countries.brasil}</option>
          <option value={countries.chile}>{countries.chile}</option>
          <option value={countries.uruguay}>{countries.uruguay}</option>
        </select>
      </div>
      <div>
        <span>Precio:</span>
        <select
          name="Price"
          onChange={handlePriceSelectChange}
          value={price}
          className="minimal"
        >
          <option value={prices.todos}>{prices.todos}</option>
          <option value="1">{prices.economico}</option>
          <option value="2">{prices.estandar}</option>
          <option value="3">{prices.comodo}</option>
          <option value="4">{prices.lujoso}</option>
        </select>
      </div>
      <div>
        <span>Tamaño:</span>
        <select
          name="Capacity"
          onChange={handleCapacitySelectChange}
          value={capacity}
          className="minimal"
        >
          <option value={capacities.todos}>{capacities.todos}</option>
          <option value={capacities.pequeno}>{capacities.pequeno}</option>
          <option value={capacities.mediano}>{capacities.mediano}</option>
          <option value={capacities.grande}>{capacities.grande}</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;

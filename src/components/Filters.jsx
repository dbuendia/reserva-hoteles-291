import React from "react";
import { countries, capacities, prices } from "../datasets/consts";

function Filters({
  country,
  price,
  capacity,
  setCountry,
  setPrice,
  setCapacity,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
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

  function handleDateFromChange(e) {
    dateFrom = new Date(e.target.value);
    dateTo = new Date(dateTo);

    dateFrom.setHours(0, 0, 0, 0);
    dateTo.setHours(0, 0, 0, 0);

    let dateFromUnix = dateFrom.getTime();
    let dateToUnix = dateTo.getTime();

    if (dateFromUnix > dateToUnix) {
      alert(
        "No se puede indicar una fecha de entrada posterior a la de salida."
      );
    } else {
      setDateFrom(e.target.value);
    }
  }

  function handleDateToChange(e) {
    dateFrom = new Date(dateFrom);
    dateTo = new Date(e.target.value);

    dateFrom.setHours(0, 0, 0, 0);
    dateTo.setHours(0, 0, 0, 0);

    let dateFromUnix = dateFrom.getTime();
    let dateToUnix = dateTo.getTime();
    if (dateFromUnix > dateToUnix) {
      alert(
        "No se puede indicar una fecha de salida anterior a la de entrada."
      );
    } else {
      setDateTo(e.target.value);
    }
  }

  function restartValues() {
    setCountry(countries.todos);
    setPrice(prices.todos);
    setCapacity(capacities.todos);
    setDateFrom("");
    setDateTo("");
  }

  return (
    <div className="filters">
      <p className="filter-title">Filtros:</p>
      <div>
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
        <select
          name="Capacity"
          onChange={handleCapacitySelectChange}
          value={capacity}
          className="minimal"
        >
          <option value={capacities.todos}>{capacities.todos}</option>
          <option value={capacities.small}>{capacities.small}</option>
          <option value={capacities.medium}>{capacities.medium}</option>
          <option value={capacities.large}>{capacities.large}</option>
        </select>
      </div>
      <div>
        <span>Desde:</span>
        <input
          className="minimal"
          type="date"
          value={dateFrom}
          onChange={handleDateFromChange}
        />
      </div>
      <div>
        <span>Hasta:</span>
        <input
          className="minimal"
          type="date"
          value={dateTo}
          onChange={handleDateToChange}
        />
      </div>
      <div>
        <input type="reset" onClick={restartValues} />
      </div>
    </div>
  );
}

export default Filters;

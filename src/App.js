import "./App.css";
import { useState } from "react";
import { countries, prices, capacities } from "./datasets/consts";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import hotelList from "./datasets/hotelList";

function App() {
  // El value inicial de un Select debe coincidir con un value válido de sus options
  const [country, setCountry] = useState(countries.todos);
  const [price, setPrice] = useState(prices.todos);
  const [capacity, setCapacity] = useState(capacities.todos);
  // Input date states
  let today = new Date();
  // today.setHours(0, 0, 0, 0);
  // console.log(today.getTime() + "antes del ISOOOO");
  // We format the date in yyyy-mm-dd format, which is required for the input date.
  today = today.toISOString().split("T")[0];
  const [dateFrom, setDateFrom] = useState(today);
  const [dateTo, setDateTo] = useState(today);

  return (
    <div className="App">
      <Header
        country={country}
        price={price}
        capacity={capacity}
        dateFrom={dateFrom}
        dateTo={dateTo}
      />
      <Filters
        country={country}
        price={price}
        capacity={capacity}
        setCountry={setCountry}
        setPrice={setPrice}
        setCapacity={setCapacity}
        dateFrom={dateFrom}
        dateTo={dateTo}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
      />
      <Hotels
        country={country}
        price={price}
        capacity={capacity}
        hotelList={hotelList}
        dateFrom={dateFrom}
        dateTo={dateTo}
      />
    </div>
  );
}

export default App;

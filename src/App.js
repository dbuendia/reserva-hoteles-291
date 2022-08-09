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

  return (
    <div className="App">
      <Header country={country} price={price} capacity={capacity} />
      <Filters
        country={country}
        price={price}
        capacity={capacity}
        setCountry={setCountry}
        setPrice={setPrice}
        setCapacity={setCapacity}
      />
      <Hotels
        country={country}
        price={price}
        capacity={capacity}
        hotelList={hotelList}
      />
    </div>
  );
}

export default App;

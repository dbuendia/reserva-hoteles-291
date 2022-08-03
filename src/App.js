import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import hotelList from "./datasets/hotelList";

function App() {
  // El value inicial de un Select debe coincidir con un value válido de sus options
  const [country, setCountry] = useState("Argentina");
  const [price, setPrice] = useState("Económico");
  const [capacity, setCapacity] = useState("Pequeño");

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
      <Hotels hotelList={hotelList} />
    </div>
  );
}

export default App;

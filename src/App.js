import "./App.css";
import HotelCard from "./components/HotelCard";
import hotels from "./datasets/hotels.js";

function App() {
  return (
    <div className="App">
      <HotelCard
        photo={hotels[0].photo}
        name={hotels[0].name}
        price={hotels[0].price}
        description={hotels[0].description}
        rooms={hotels[0].rooms}
        city={hotels[0].city}
        country={hotels[0].country}
      />
    </div>
  );
}

export default App;

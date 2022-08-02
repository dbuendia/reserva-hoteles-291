import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import hotelList from "./datasets/hotelList";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Hotels hotels={hotelList} />
    </div>
  );
}

export default App;

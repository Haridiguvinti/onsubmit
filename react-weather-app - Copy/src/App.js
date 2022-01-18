import "./App.css";
import WeatherApp from "./WeatherApp/WeatherApp";

function App() {
  return (
    <div className="app">
      <WeatherApp defaultcity="London" />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import CurrentWeather from "./CurrentWeather";
import Loader from "react-loader-spinner";
import Forecast from "../Forecast/Forecast";

export default function WeatherApp(props) {
  //useState used for when the city name and weather data changes upon the users search
  const [city, setCity] = useState("kurnool");
  const [weatherData, setWeatherData] = useState({ ready: false });

  //This function holds the weather data from the api call
  function showLocationInfo(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      currentTemp: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coord: response.data.coord,
    });
  }

  //When the search button is clicked this function is run. event.preventDefault() prevents the page from reloading upon running the function.
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //When the user types a new city into the input this function collects this value
  function updateCity(event) {
    setCity(event.target.value);
  }

  //This function makes a call to the open weather api using the city name the user searched
  function search() {
    const apiKey = "01583f639bca27eec1245ef4cc406605";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showLocationInfo);
  }

  //When the current location button is clicked this function is run. event.preventDefault() prevents the page from reloading upon running the function.
  function handleClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  //This function makes a call to the open weather api using the users current coordinates
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = "01583f639bca27eec1245ef4cc406605";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showLocationInfo);
  }
  //This if statement states the JSX will load if the ready is set to true else a loader animation will appear
  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form>
          <div className="input-group mb-3 search-bar">
            <input
              id="city-text"
              type="search"
              className="form-control"
              placeholder="City"
              autoComplete="off"
              onChange={updateCity}
              aria-label="city"
            />
            <div className="search-btn">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-secondary"
                type="sumbit"
                id="Search-btn"
                aria-label="search"
              >
                Search
              </button>
            </div>
            <div className="current-btn">
              <button
                onClick={handleClick}
                id="current-location"
                className="btn current-location"
                aria-label="current location"
              >
                Current <br /> Location
              </button>
            </div>
          </div>

          <CurrentWeather data={weatherData} />
        </form>
        <Forecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="ThreeDots"
        color="white"
        height={60}
        width={100}
        timeout={3000} //3 secs
      />
    );

  }
}

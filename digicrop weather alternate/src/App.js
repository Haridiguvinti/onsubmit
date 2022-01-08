import React, { useState, useEffect } from "react";
import "./css/app.css";
import "./css/layout.css";
import github from "./img/github-icon.png";
import cursor from "./img/cursor.png";
import location from "./img/location.png";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./css/search.css";
import { FaReact } from "react-icons";
import { DisappearedLoading } from 'react-loadingg';

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(" ");
  const [unit, setUnit] = useState("celsius");

  function handleResponse(hari) {
    setWeatherData({
      ready: true,
      date: new Date(hari.data.dt * 1000),
      temp: hari.data.main.temp,
      wind: hari.data.wind.speed,
      humidity: hari.data.main.humidity,
      feels: hari.data.main.feels_like,
      description: hari.data.weather[0].description,
      icon: hari.data.weather[0].icon,
      city: hari.data.name,
      coords: hari.data.coord,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation(position) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);
  }
  // const Haribabu = async (lat, lon) => {
  //   const apiKey = "1b4ec74e8bd65023d067b32a793411c5"; /*Paste API key here, Sign up and get an API key https://openweathermap.org/appid */
  //   const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  //   await axios
  //     .get(URL)
  //     .then((response) => {
  //       this.setState({ forecastData: response.data });
  //     })
  //     .catch((err) => {
  //       let message = err.response && err.response.data.message;
  //       this.setState({ errorMessage: message });
  //     });
  // };
  //   const Haribabu = async (lat, lon) => {
  //   const apiKey = "1b4ec74e8bd65023d067b32a793411c5"; /*Paste API key here, Sign up and get an API key https://openweathermap.org/appid */
  //   const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  //   await axios
  //     .get(URL)
  //     .then((response) => {
  //       this.setState({ forecastData: response.data });
  //     })
  //     .catch((err) => {
  //       let message = err.response && err.response.data.message;
  //       this.setState({ errorMessage: message });
  //     });
  // };
  // }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityName(event) {
    setCity(event.target.value);
    event.preventDefault()
  }
  useEffect(() => {

    var live = navigator.geolocation.getCurrentPosition(searchLocation);

    //alert(live)


  }, []);
  function handlePosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  // function handleChange(event) {
  //   event.preventDefault();
  //   navigator.geolocation.getCurrentPosition(Haribabu);
  // }


  // }
  // const Haribabu = async (lat, lon) => {
  //   const apiKey = "1b4ec74e8bd65023d067b32a793411c5"; /*Paste API key here, Sign up and get an API key https://openweathermap.org/appid */
  //   const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  //   await axios
  //     .get(URL)
  //     .then((response) => {
  //       this.setState({ forecastData: response.data });
  //     })
  //     .catch((err) => {
  //       let message = err.response && err.response.data.message;
  //       this.setState({ errorMessage: message });
  //     });
  // };


  if (weatherData.ready) {
    return (
      <div className="app">
        <div className="page-title">
          <h1>
            {/* <span className='react-icon'>
              <FaReact />
            </span> */}
            Weather App
          </h1>
        </div>
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <img
              src={location}
              className="location-search-icon"
              alt="location"
              width="15px"
            />
            <input
              type="search"
              autoComplete="off"
              placeholder="enter a city"
              className="city-input"
              onChange={handleCityName}
            />
            <button type="submit" className="search-button">
              SEARCH
            </button>
            <button
              type="button"
              className="my-location-button"
              title="find my location"
              onClick={handlePosition}
            >
              <img src={cursor} alt="find my location" />
            </button>
            {/* <button type="button" className="my-location-button"
              title="find my location " onClick={handleChange}>
              <img src={cursor} alt="find my location"
              />
            </button> */}
          </form>
        </div>
        <WeatherInfo info={weatherData} unit={unit} setUnit={setUnit} />
        <div className="code-by">
          <a href="https://github.com/ktushar19Git/DIGICrop-DGCrop_V1" target="blank">
            <img src={github} alt="github icon" className="github-icon" />
          </a>{" "}
          <a href="https://github.com/ktushar19Git/DIGICrop-DGCrop_V1" target="blank">
            Open-source code
          </a>
          , DIGICROP GITHUB
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);
    return <DisappearedLoading color={'#a2c4e8'} />;
  }
}
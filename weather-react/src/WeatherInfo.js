import React from 'react';
import Daily from "./Daily";
import Hourly from "./Hourly";
import FormatedDate from './FormatedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

export default function WeatherInfo(props) {

  function feelsLikeTemp() {
    let temperature = Math.round(props.info.feels);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function windUnits() {
    let windSpeed = Math.round(props.info.wind * 3.6);
    if (props.unit !== "celsius") {
      windSpeed = Math.round(windSpeed * 0.62137119223733)
      return `${windSpeed} m/h`;
    } else {
      return `${windSpeed} km/h`;
    }

  }



  return (<div className="main-body-container">
    <div className="top-container">
      <div className="column-1">
        <span className="city-name">{props.info.city}</span>
        <span className="today-description">{props.info.description}</span>
        <br />
        <WeatherTemp celsius={props.info.temp} unit={props.unit}
          setUnit={props.setUnit} />

      </div>

      <div className="column-2">
        <div className="column-2-row-1">
          <WeatherIcon code={props.info.icon} size={100} />
        </div>
        <div className="column-2-row-2">
          <p className="weather-details">
            feels like &emsp; <span className="feels-like">{feelsLikeTemp()}</span>
            <br />
            wind speed &emsp; <span className="wind">{windUnits()}</span>
            <br />
            humidity &emsp; <span className="humidity">{props.info.humidity}</span>%
          </p>
        </div>
      </div>

      <div className="column-3">
        <FormatedDate date={props.info.date} />
        <br />
        <Hourly coords={props.info.coords} unit={props.unit} />
      </div>
    </div>

    <div className="bottom-container">
      <Daily coords={props.info.coords} unit={props.unit} />
    </div>
  </div>)
};
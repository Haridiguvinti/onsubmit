import React from 'react';
import WeatherIcon from './WeatherIcon';
import "./css/hourly.css";

export default function HourlyForecastContent(props) {

  function unitTemp() {
    let temperature = Math.round(props.forecast.temp);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function hour() {
    let date = new Date(props.forecast.dt * 1000);
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`
    }
    let min = date.getMinutes();
    if (min < 10) {
      min = `0${min}`
    }
    return `${hour}:${min}`;

  }


  return (
    <div className="hourly-each">
      <span className="hourly-hour">{hour()}</span>
      <WeatherIcon code={props.forecast.weather[0].icon} size={25} />
      <span className="hourly-temp">{unitTemp()}</span>
    </div>
  )
}
import React from "react";
import "./DailyForecast.css";

export default function ForecastDetails(props) {
  //This function rounds the minimum temperature from the api call
  function minTemp() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}`;
  }

  //This function rounds the maximum temperature from the api call
  function maxTemp() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}`;
  }

  //This function formats the date from the api call
  function date() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  let iconCode = props.data.weather[0].icon;
  let weatherIcon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="col-2 daily-forecast">
      <div className="row">
        <div className="col-12">
          <p>{date()}</p>
        </div>
        <div className="col-12">
          <div className="CurrentWeatherIcon">
            <img src={weatherIcon} alt="icon" />
          </div>
        </div>
        <div className="col-12">
          <p className="temp">
            {minTemp()}°| <strong>{maxTemp()}°</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

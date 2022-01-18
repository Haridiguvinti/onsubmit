import React, { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast/DailyForecast";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  //useState is used for when the city name and weather data changes upon the users search
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  /*Once the first coordinates have been searched, the loaded variable is set to true and remains true. 
  The information displayed on the page will not change if new coordinates are received.
  The useEffect changes loaded to false whenever the coordinates changes, so the forcast for the new coordinates searched can now be displayed*/
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  //This function collects the weather information from the api and sets loaded to true
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //This function makes a call to the api
  function load() {
    let apiKey = "01583f639bca27eec1245ef4cc406605";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  //This if statement states if loaded is true display the JSX below else return nothing
  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return <DailyForecast key={index} data={dailyForecast} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}

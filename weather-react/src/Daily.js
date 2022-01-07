import React, { useState, useEffect } from "react";
import "./css/daily.css";
import DailyForecastContent from './DailyForecastContent';
import axios from 'axios';

export default function Daily(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

  }

  if (loaded) {
    return (
      <div className='row'>
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (<div className='daily-col' key={index}>
              <DailyForecastContent forecast={dailyForecast} unit={props.unit} />
            </div>);
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;

  }
}

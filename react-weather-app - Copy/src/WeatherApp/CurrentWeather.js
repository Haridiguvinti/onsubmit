import React from "react";
import FormatDate from "../FormatTime/FormatDate";
import FormatHours from "../FormatTime/FormatHours";
import "./WeatherApp";

export default function CurrentWeather(props) {
  return (
    <div className="weather-app">
      <h1>
        <FormatDate date={props.data.date} />
      </h1>
      <div className="Location">
        <div className="city-name">
          <i className="fas fa-map-marker-alt"></i>
          <span> </span>
          <h2>{props.data.cityName}</h2>
        </div>
      </div>
      <h3>
        <FormatHours time={props.data.date} />
      </h3>
      <img src={props.data.icon} alt={props.data.description} />
      <div className="description">
        <span>{props.data.description}</span>
      </div>
      <div className="row">
        <div className="CurrentTemp">
          <div className="row">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <h4>{props.data.currentTemp}°C</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 current-temps">
                    <p>{props.data.minTemp}°C</p>
                  </div>
                  <div className="col-4 current-temps">
                    <p>|</p>
                  </div>
                  <div className="col-4 current-temps">
                    <p className="max-temp">{props.data.maxTemp}°C</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="Details">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <h5>Details</h5>
                        <hr />
                      </div>
                      <div className="row details-info">
                        <div className="col-8">
                          <p>Feels Like</p>
                        </div>
                        <div className="col-4">
                          <p>{props.data.feelsLike}°C</p>
                        </div>
                        <div className="col-8">
                          <p>Humidty</p>
                        </div>
                        <div className="col-4">
                          <p>{props.data.humidity}%</p>
                        </div>
                        <div className="col-8">
                          <p>Wind</p>
                        </div>
                        <div className="col-4">
                          <p>{props.data.wind}m/s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,186.7C840,192,960,128,1080,106.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

import "./css/app.css";
import React from 'react';

export default function WeatherTemp(props) {

  function convertToF(event) {
    event.preventDefault();
    props.setUnit('fahrenheit')
  }
  function convertToC(event) {
    event.preventDefault();
    props.setUnit('celsius')
  }


  if (props.unit === 'celsius') {
    return (
      <div>
        <span className="main-temp">{Math.round(props.celsius)}</span>
        <span href="/" className="c-link active">
          °C
            </span>{" "}
        <span className="c-f-detail">|</span>{" "}
        <a href="/" onClick={convertToF} className="f-link not-active">
          °F
            </a>
      </div>);
  } else {
    return (
      <div>
        <span className="main-temp">{Math.round((props.celsius * 1.8) + 32)}</span>
        <a href="/" onClick={convertToC} className="c-link not-active">
          °C
            </a>{" "}
        <span className="c-f-detail">|</span>{" "}
        <span href="/" className="f-link active">
          °F
            </span>
      </div>);
  }


}
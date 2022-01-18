import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        <p>
          This project was coded by
          <span> </span>
          <a
            href="https://www.hannahosibodu.com/"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Osibodu
          </a>
          <span> </span>
          and is
          <span> </span>
          <a
            href="https://github.com/Hannah6898/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced.
          </a>
        </p>
      </small>
    </div>
  );
}

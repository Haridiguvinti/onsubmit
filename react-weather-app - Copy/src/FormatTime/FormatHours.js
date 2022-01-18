import React from "react";

export default function FormatHours(props) {
  let hours = props.time.getHours();
  let mintues = props.time.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (mintues < 10) {
    mintues = `0${mintues}`;
  }

  return (
    <div>
      {hours}:{mintues}
    </div>
  );
}

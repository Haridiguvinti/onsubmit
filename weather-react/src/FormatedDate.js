import React from "react";

export default function FormattedDate (props) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`
  }
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`
  }

  return (<div className="last-updated">
    Last updated: {day} {hour}:{min}
    </div>);
}


   
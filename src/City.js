import React, { useState } from "react";

export default function City(props) {
  const [temperature, setTemperature] = useState(props.temperature);
  const [unit, setUnit] = useState("Metric");

  function showFahrenheiht(event) {
    event.preventDefault();
    // challenge 1
    // alert(`The temperature in Farehrenheit is ${temperature}°F`);

    // challenge 2
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));

    // challenge 3
    setUnit("Imperial");
  }

  //Challenge 2
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
    // challenge 3
    setUnit("Metric");
  }

  return (
    <div class="City">
      It is {temperature} ({unit}){" "}
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" onClick={showFahrenheiht}>
        °F
      </a>{" "}
      in {props.name}
    </div>
  );
}

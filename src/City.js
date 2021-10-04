import React from "react";

export default function City(props) {
  return (
    <div class="City">
      It is {props.temperature}°C | °F in {props.name}
    </div>
  );
}

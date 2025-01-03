import React from "react";

const WeatherApp = () => {
  const butn = document.getElementById("search-button");
  butn?.addEventListener("click", () => console.log("clicked"));
  return (
    <div>
      <input type="text" placeholder="Enter city name" />
      <button id="search-button">Search</button>
    </div>
  );
};

export default WeatherApp;

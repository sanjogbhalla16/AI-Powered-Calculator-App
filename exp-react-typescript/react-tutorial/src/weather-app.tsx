import React, { useState } from "react";

const WeatherApp: React.FC = () => {
  //you cannot use these event listeners in functional components
  //you need to make a function for it and then add it to the DOM
  //   const butn = document.getElementById("search-button");
  //   butn?.addEventListener("click", () => console.log("clicked"));
  const [cityName, setCityName] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCityName(e.target.value);
  }
  function handleClick() {
    console.log("City name entered:", cityName);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={handleInputChange}
      />
      <button id="search-button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default WeatherApp;

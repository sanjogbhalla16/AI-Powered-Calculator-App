import React, { useState } from "react";
import axios from "axios";
import YOUR_API_KEY from "./config";

const WeatherApp: React.FC = () => {
  //you cannot use these event listeners in functional components
  //you need to make a function for it and then add it to the DOM
  //   const butn = document.getElementById("search-button");
  //   butn?.addEventListener("click", () => console.log("clicked"));
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const fetchWeatherData = async () => {
    //now we provide the condition to this weather event
    if (!cityName) {
      setError("Please enter a city name.");
      return;
    }
    setError(""); // Clear any previous errors
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${cityName}&aqi=no`
      );
      console.log(response.data);
      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCityName(e.target.value);
  }
  // function handleClick() {
  //   console.log("City name entered:", cityName);
  // }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={handleInputChange}
      />
      <button id="search-button" onClick={fetchWeatherData}>
        Search
      </button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

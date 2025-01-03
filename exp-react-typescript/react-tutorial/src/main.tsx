import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import WeatherApp from "./weather-app";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById("weather-app")!).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>
);

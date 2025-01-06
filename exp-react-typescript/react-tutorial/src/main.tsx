import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import WeatherApp from "./weather-app";
import UseRefExample from "./components/UseRef-example/useRef-example";
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

createRoot(document.getElementById("useRef-example")!).render(
  <StrictMode>
    <UseRefExample />
  </StrictMode>
);

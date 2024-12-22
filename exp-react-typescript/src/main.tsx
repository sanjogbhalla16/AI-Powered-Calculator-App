import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>kya bhai kya!!! , kya kar raha hai !!!</h1>
    <App />
  </StrictMode>
);

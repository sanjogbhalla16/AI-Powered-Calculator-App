import React from "react";
import "./style.css";

const Counter: React.FC = (props) => {
  let counter = 0;
  return (
    <div className="Counter-Container">
      <h1>{counter}</h1>
      <button onClick={(e) => counter++} style={{ backgroundColor: "green" }}>
        INC
      </button>
      <button onClick={(e) => counter--} style={{ backgroundColor: "tomato" }}>
        DEC
      </button>
    </div>
  );
};

export default Counter;

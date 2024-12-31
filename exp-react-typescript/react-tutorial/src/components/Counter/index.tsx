import React, { useEffect, useState } from "react";
import "./style.css";

const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  //component unmounted and how a component is mounted
  useEffect(() => {
    console.log("Counter");

    return function () {
      console.log("Counter Unmounted");
    };
    0;
  }, []);

  //how a component is updated
  useEffect(() => {
    console.log("User updated the counter");
  }, [counter]);

  const handleInc = () => {
    setCounter(counter + 1);
  };

  const handleDec = () => {
    if (counter == 0) return;
    setCounter(counter - 1);
  };
  return (
    <div className="Counter-Container">
      <h1>{counter}</h1>
      <button onClick={handleInc} style={{ backgroundColor: "green" }}>
        INC
      </button>
      <button onClick={handleDec} style={{ backgroundColor: "tomato" }}>
        DEC
      </button>
    </div>
  );
};

export default Counter;

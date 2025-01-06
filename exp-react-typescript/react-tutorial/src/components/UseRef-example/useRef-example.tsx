import React, { useState, useRef } from "react";

const UseRefExample: React.FC = () => {
  //const [count, setCount] = useState(0);
  const [myData, setMyData] = useState("");

  const inputElem = useRef<HTMLInputElement>(null);

  const changeStyle = () => {
    if (inputElem.current) {
      // Check if the ref is not null
      inputElem.current.style.backgroundColor = "red"; // Change background color
      inputElem.current.focus(); // Focus the input element
    }
  };
  return (
    <div>
      <input
        ref={inputElem}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>Submit</button>
    </div>
  );
};

export default UseRefExample;

import React, { useEffect, useState } from "react";

const UseRefExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [myData, setMyData] = useState("");

  //takes a call back function and a dependency array , but we are not giving a dependency array
  useEffect(() => {
    setCount(count + 1);
  });
  return (
    <div>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>The number of times it render: {count}</p>
    </div>
  );
};

export default UseRefExample;

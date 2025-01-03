import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
const myTodoItems = [
  {
    id: 1,
    title: "want to go to gym",
  },
  {
    id: 2,
    title: "want to eat healthy",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <div
      className="abc"
      style={{ color: "white", border: "1px solid white" }}
      //onClick={(e) => alert("hello")}
    >
      <Todo Items={myTodoItems} />
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
    </div>
  );
};

export default App;

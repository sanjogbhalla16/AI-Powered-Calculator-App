import React from "react";
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
  return (
    <div
      className="abc"
      style={{ color: "white", border: "1px solid white" }}
      //onClick={(e) => alert("hello")}
    >
      <Todo Items={myTodoItems} />
      <Counter />
    </div>
  );
};

export default App;

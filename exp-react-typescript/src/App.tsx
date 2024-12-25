import React from "react";
import Todo from "./components/Todo";

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
      onClick={(e) => alert("hello")}
    >
      <Todo Items={myTodoItems} />
    </div>
  );
};

export default App;

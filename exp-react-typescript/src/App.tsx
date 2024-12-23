import React from "react";
import Todo from "./components/Todo";
const App: React.FC = () => {
  return (
    <div
      className="abc"
      style={{ color: "red", border: "1px solid red" }}
      onClick={(e) => alert("hello")}
    >
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default App;

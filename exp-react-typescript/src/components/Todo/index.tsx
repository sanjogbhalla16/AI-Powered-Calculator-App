import React from "react";
import Todoitem from "./TodoItem/item";
import "./style.css";

const Todo: React.FC = () => {
  return (
    <div className="todo-container">
      <ol>
        <Todoitem title="Eat" />
        <Todoitem title="Sleep" />
        <Todoitem title="Code" />
        <Todoitem title="Repeat" />
      </ol>
    </div>
  );
};

export default Todo;

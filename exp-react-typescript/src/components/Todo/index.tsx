import React from "react";
import Todoitem from "./TodoItem/item";
import "./style.css";

interface TodoItemProps {
  id: number;
  title: string;
}
interface TodoProps {
  Items: TodoItemProps[];
}
const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.Items.map((item) => (
          <Todoitem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;

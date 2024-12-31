import React from "react";
import "./style.css";

// we will define what props we need for this
interface TodoItemProps {
  title: string;
}

const Todoitem: React.FC<TodoItemProps> = (props) => {
  return <li>{props.title}</li>;
};

export default Todoitem;

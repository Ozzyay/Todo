import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import React from "react";

const Todo = () => {
  const todoList = useSelector((state) => state.todo);
  const listItems = todoList.map((elem) => (
    <TodoItem title={elem.title} description={elem.description} />
  ));
  return <React.Fragment>{listItems}</React.Fragment>;
};

export default Todo;

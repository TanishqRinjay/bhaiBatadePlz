import React from "react";
import TodoCard from "./TodoCard";
const TodoCards = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <TodoCard todo={todo} key={index} />;
      })}
    </div>
  );
};

export default TodoCards;

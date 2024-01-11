import React from "react";
import TodoCards from "./TodoCard";
const TodoOutput = ({ todos }) => {
  return (
    <div>
      <TodoCards todos={todos} />
    </div>
  );
};

export default TodoOutput;

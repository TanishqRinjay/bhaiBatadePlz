import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div>
      {!todo ? (
        <div>No todo data</div>
      ) : (
        <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>Remove Todo</button>
        </div>
      )}
    </div>
  );
};

export default TodoCard;

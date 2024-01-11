import React from "react";

const TodoInput = ({
  title,
  description,
  setTitle,
  setDescription,
  todos,
  setTodos,
}) => {
  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function descriptionChangeHandler(e) {
    setDescription(e.target.value);
  }
  function addTodoHandler() {
    let newTodo = [...todos, { title, description }];
    setTodos(newTodo);
    setTitle("");
    setDescription(""); 
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        value={title}
        onChange={titleChangeHandler}
      />
      <br />
      <input
        type="text"
        placeholder="enter description of the todo"
        value={description}
        onChange={descriptionChangeHandler}
      />
      <br />
      <button onClick={addTodoHandler}>add todo to dom</button>
    </div>
  );
};

export default TodoInput;

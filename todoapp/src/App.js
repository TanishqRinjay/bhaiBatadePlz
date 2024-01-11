import "./App.css";
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <TodoInput
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        todos={todos}
        setTodos={setTodos}
      />
      <Header />
      <TodoOutput todos={todos} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAdd = () => {
    const newTodos = {
      id: todos.length + 1,
      content: todoText,
      isCompleted: false,
    };

    setTodos([...todos, newTodos]);

    setTodoText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <div>
        <input onChange={handleChange} value={todoText} type="text" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TodoList onDeleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};

export default App;

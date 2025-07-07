import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAdd = () => {
    if (todoText) {
      const newTodos = {
        id: todos.length + 1,
        content: todoText,
        isCompleted: false,
      };

      setTodos([...todos, newTodos]);

      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <div>
      <div>
        <input onChange={handleChange} value={todoText} type="text" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TodoList
        toggleCompleted={toggleCompleted}
        onDeleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default App;

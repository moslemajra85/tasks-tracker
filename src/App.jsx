import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const { todos, setTodos } = useLocalStorage();

  const [todoText, setTodoText] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.isCompleted === true;
    }

    if (filter === "uncompleted") {
      return todo.isCompleted === false;
    }

    return true;
  });

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAdd = () => {
    if (todoText) {
      const newTodos = {
        id: Date.now(),
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

  const handleSelectFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Filter By</h1>
      <select onChange={handleSelectFilter}>
        <option value="all">Select All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>

      <div className="add-todo-wrapper">
        <input
          onChange={handleChange}
          value={todoText}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TodoList
        toggleCompleted={toggleCompleted}
        onDeleteTodo={deleteTodo}
        todos={filtered}
      />
    </div>
  );
};

export default App;

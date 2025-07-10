import { useState, useEffect } from "react";

// Custom hook to deal with localstorage
const useLocalStorage = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  // save todos to the local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, setTodos };
};

export default useLocalStorage;

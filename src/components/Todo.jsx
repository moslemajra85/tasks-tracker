import { TbTrashXFilled } from "react-icons/tb";
import { useState } from "react";

const Todo = ({ todo, deleteTodo, toggleCompleted }) => {
  
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleCheck = () => {

    toggleCompleted(todo.id);
  };
  return (
    <div className="todo-item">
      <input
        checked={todo.isCompleted}
        onChange={handleCheck}
        type="checkbox"
      />
      <p className={todo.isCompleted ? "completed" : ""}>{todo.content}</p>
      <TbTrashXFilled
        onClick={() => handleDelete(todo.id)}
        color="red"
        size={30}
      />
    </div>
  );
};

export default Todo;

import { TbTrashXFilled } from "react-icons/tb";
import { useState } from "react";

const Todo = ({ todo, deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <input onChange={handleCheck} type="checkbox" />
      <p className={isChecked ? "completed" : ""}>{todo.content}</p>
      <TbTrashXFilled
        onClick={() => handleDelete(todo.id)}
        color="red"
        size={30}
      />
    </div>
  );
};

export default Todo;

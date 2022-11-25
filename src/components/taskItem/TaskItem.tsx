import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Todo } from "../model";
import "./taskItem.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TaskItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleChange = (id: number) => {
    // setContact({ ...contact, [e.target.name]: e.target.value });
    //   setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
  };
  console.log(todo);
  return (
    <article className="taskItem">
      <div className="task-content">
        <input type="checkbox" onChange={() => handleChange(todo.id)} />
        <span>{todo.todo}</span>
      </div>
      <div className="task-buttons">
        <span className="icon">
          <FiEdit />
        </span>
        <span className="icon">
          <FiTrash />
        </span>
      </div>
    </article>
  );
};

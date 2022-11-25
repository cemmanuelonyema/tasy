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

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <li className="taskItem">
      <div className="task-content">
        <input
          type="checkbox"
          onChange={() => handleChange(todo.id)}
          id={todo.todo}
          name={todo.todo}
        />

        {todo.isDone ? (
          <span className="text-complete">{todo.isDone}</span>
        ) : (
          <span className="text-todo">{todo.todo}</span>
        )}
      </div>
      <div className="task-buttons">
        <span className="icon">
          <FiEdit />
        </span>
        <span className="icon">
          <FiTrash />
        </span>
      </div>
    </li>
  );
};

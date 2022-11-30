import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Todo } from "../model";
import "./taskItem.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleModal } from "../../redux/slices/taskSlice";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskItem: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  modalOpen,
  setModalOpen,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleChange = (id: number) => {
    // setContact({ ...contact, [e.target.name]: e.target.value });
    //   setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //   const handleDelete = (id: number) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   };

  const handleEdit = (id: number) => {
    dispatch(toggleModal());
  };

  const dispatch = useDispatch();
  //   dispatch(deleteTask(todo.id));

  return (
    <li className="taskItem">
      <div className="task-content">
        <input
          type="checkbox"
          onChange={() => handleChange(todo.id)}
          id={todo.todo}
          name={todo.todo}
        />
        {edit ? (
          <input />
        ) : todo.isDone ? (
          <span className="text-complete">{todo.isDone}</span>
        ) : (
          <span className="text-todo">{todo.title}</span>
        )}
      </div>
      <div className="task-buttons">
        <span className="icon" onClick={() => handleEdit(todo.id)}>
          <FiEdit />
        </span>
        <span className="icon" onClick={() => dispatch(deleteTask(todo.id))}>
          <FiTrash />
        </span>
      </div>
    </li>
  );
};

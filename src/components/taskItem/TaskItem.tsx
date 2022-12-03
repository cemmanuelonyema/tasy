import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./taskItem.css";

import { useSelector, useDispatch } from "react-redux";
import {
  clearEditTask,
  deleteTask,
  updateTask,
  toggleModal,
  editTask,
} from "../../redux/slices/taskSlice";
import { TaskModel } from "../model";

interface Props {
  task: TaskModel;
  //   todos: TaskModel[];
  //   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  //   modalOpen: boolean;
  //   setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  console.log(task);
  const dispatch = useDispatch();

  //   const [edit, setEdit] = useState<boolean>(false);
  //   const [editTodo, setEditTodo] = useState<string>(todo.todo);

  //   const handleChange = (id: number) => {
  //     // setContact({ ...contact, [e.target.name]: e.target.value });

  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  //       )
  //     );
  //   };

  //   const handleDelete = (id: number) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   };

  const handleEdit = (currentTask: TaskModel) => {
    dispatch(toggleModal());
    dispatch(editTask(currentTask));
  };

  //   const handleDelete = () => {
  //     dispatch(deleteTask(task.id));
  //     // dispatch(clearEditTask());
  //   };

  //   dispatch(deleteTask(todo.id));

  return (
    <li className="taskItem">
      <div className="task-content">
        <input
          type="checkbox"
          //   onChange={() => handleChange(todo.id)}
          //   id={todo.todo}
          //   name={todo.todo}
        />

        <span className="text-todo">{task.title}</span>
      </div>
      <div className="task-buttons">
        <span className="icon" onClick={() => handleEdit(task)}>
          <FiEdit />
        </span>
        <span className="icon" onClick={() => dispatch(deleteTask(task.id))}>
          <FiTrash />
        </span>
      </div>
    </li>
  );
};

//imports
import React from "react";
import { useDispatch } from "react-redux";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./taskItem.css";
import { TaskModel } from "../../model/model";
import {
  deleteTask,
  toggleModal,
  editTask,
} from "../../redux/slices/taskSlice";

//interface
interface Props {
  task: TaskModel;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  //hooks
  const dispatch = useDispatch();

  //methods
  const handleEdit = (currentTask: TaskModel) => {
    dispatch(toggleModal());
    dispatch(editTask(currentTask));
  };

  //return
  return (
    <li className="taskItem">
      <div className="task-content">
        <input type="checkbox" />

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

import React from "react";
import { TaskModel } from "../../model/model";
import "./completeTaskItem.css";

interface Props {
  task: TaskModel;
}

export const CompleteTaskItem: React.FC<Props> = ({ task }) => {
  console.log(task);
  return (
    <li className="taskItem">
      <div className="task-content">
        <span className="text-todo">{task.title}</span>
      </div>
      <div className="task-buttons">
        <span className="icon">{/* <FiEdit /> */}</span>
        <span className="icon">{/* <FiTrash /> */}</span>
      </div>
    </li>
  );
};

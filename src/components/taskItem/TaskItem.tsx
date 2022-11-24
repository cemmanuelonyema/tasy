import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./taskItem.css";

export const TaskItem: React.FC = () => {
  return (
    <article className="taskItem">
      <div className="task-content">
        <input type="checkbox" name="" id="" />
        <span>Task item</span>
      </div>
      <div className="task-buttons">
        <span>
          <FiEdit />
        </span>
        <span>
          <FiTrash />
        </span>
      </div>
    </article>
  );
};

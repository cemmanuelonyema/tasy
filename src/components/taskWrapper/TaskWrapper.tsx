import React from "react";
import { TaskItem } from "../taskItem/TaskItem";
import "./taskWrapper.css";

export const TaskWrapper: React.FC = () => {
  return (
    <section>
      <div className="wrapper__container">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </section>
  );
};

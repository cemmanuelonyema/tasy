import React from "react";
import {
  selectCompletedTask,
  selectFiltered,
  selectTasks,
} from "../../redux/slices/taskSlice";
import { TaskModel } from "../../model/model";
import { TaskItem } from "../taskItem/TaskItem";
import "./tasklist.css";
import { useSelector } from "react-redux";
import { CompleteTaskItem } from "../completeTaskItem/CompleteTaskItem";

export const TaskList: React.FC = () => {
  //hooks
  const tasks: TaskModel[] = useSelector(selectTasks);
  const filtered: TaskModel[] = useSelector(selectFiltered);
  const completedTasks: TaskModel[] = useSelector(selectCompletedTask);
  const renderTasks = filtered ? filtered : tasks;
  return (
    <section className="tasklist">
      <div className="tasklist__container">
        <ul className="tasklist-ul">
          {filtered && filtered.length === 0 ? <h4>No contact matched</h4> : ""}

          {tasks && tasks.length === 0 ? (
            <h4>Please add contacts</h4>
          ) : (
            renderTasks?.map((task: TaskModel) => (
              <TaskItem key={task.id} task={task} />
            ))
          )}
        </ul>

        <ul className="tasklist-ul completed">
          {completedTasks?.map((task: TaskModel) => (
            <CompleteTaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </section>
  );
};

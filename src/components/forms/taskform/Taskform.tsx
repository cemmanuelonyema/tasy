//imports
import { useState, useEffect, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TaskModel } from "../../../model/model";
import "./taskform.css";
import {
  addTask,
  selectCurrentTask,
  toggleModal,
  updateTask,
} from "../../../redux/slices/taskSlice";

export const Taskform: React.FC = () => {
  //hooks
  const currentTask = useSelector(selectCurrentTask);
  const dispatch = useDispatch();
  //refs
  const taskTitle = useRef<HTMLInputElement>(null);

  //local state
  const [task, setTask] = useState<TaskModel>({
    id: "",
    title: "",
    description: "",
    tag: "",
    completed: false,
  });

  //destructure task state properties
  const { title, description, tag, completed } = task;

  //update task fields on change
  const handleChange = (e: React.FormEvent) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  //add task function
  const handleAddTask = () => {
    if (currentTask === null && title && description && tag) {
      //populate task state
      dispatch(
        addTask({
          id: nanoid(),
          title,
          description,
          tag,
          completed,
        })
      );
    }

    //then empty task state for next task
    setTask({
      id: "",
      title: "",
      description: "",
      tag: "",
      completed: false,
    });

    //then close modal
    dispatch(toggleModal());
  };

  //update existing task
  const handleUpdateTask = () => {
    if (currentTask !== null) {
      dispatch(toggleModal());
      dispatch(updateTask(task));
      console.log(task);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    currentTask === null ? handleAddTask() : handleUpdateTask();
  };

  useEffect(() => {
    currentTask !== null
      ? setTask(currentTask)
      : setTask({
          id: "",
          title: "",
          description: "",
          tag: "",
          completed: false,
        });

    taskTitle.current?.focus();
  }, [currentTask]);

  //return
  return (
    <div className="modalbox">
      <form className="form" onSubmit={handleSubmit}>
        <div className="box-header">
          <h2>{currentTask ? "Edit Task" : "Add New Task"}</h2>
          <select name="tag" value={tag} onChange={handleChange}>
            <option value="">Task tag</option>
            <option value="Personal">Personal</option>
            <option value="professional">Professional</option>
            <option value="School">School</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div>
          <input
            ref={taskTitle}
            type="text"
            placeholder="Task name"
            value={title}
            name="title"
            onChange={handleChange}
          />

          <textarea
            placeholder=" Task Description "
            value={description}
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="btns">
          {currentTask ? (
            <button onClick={() => dispatch(toggleModal())}>Cancel</button>
          ) : (
            <button onClick={() => dispatch(toggleModal())}>Cancel</button>
          )}
          <button onClick={handleSubmit}>
            {currentTask ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

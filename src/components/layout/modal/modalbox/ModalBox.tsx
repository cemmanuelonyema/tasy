import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
// import { Todo } from "../../../model";
import "./modalbox.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  clearEditTask,
  selectCurrentTask,
  toggleModal,
  updateTask,
} from "../../../../redux/slices/taskSlice";
import { TaskModel } from "../../../../models/models";

interface Props {
  todos: TaskModel[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const ModalBox: React.FC<Props> = ({ setTodos, todos }) => {
  const currentTask = useSelector(selectCurrentTask);
  const dispatch = useDispatch();

  //local state

  const [task, setTask] = useState({
    id: null,
    title: "",
    description: "",
    tag: "",
    completed: false,
  });

  const { title, description, tag, completed } = task;

  //   const updateTask = () => {
  //     dispatch(updateTask(task));
  //     dispatch(clearEditTask());
  //     dispatch(toggleModal());
  //   };

  //   const addTask = () => {

  //   };
  const handleAddTask = () => {
    if (currentTask === null && title && description && tag) {
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
    setTask({
      id: null,
      title: "",
      description: "",
      tag: "",
      completed: false,
    });

    dispatch(toggleModal());
  };

  const handleUpdateTask = () => {
    if (currentTask !== null) {
      dispatch(toggleModal());
      dispatch(updateTask(task));
      console.log(task);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (currentTask === null) {
    //   handleAddTask();
    // }

    currentTask === null ? handleAddTask() : handleUpdateTask();
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     // currentTask ? updateTask() : addTask();
  //     if (currentTask === null) {
  //       dispatch(addTask(task));
  //       dispatch(toggleModal());
  //     }
  //     if (currentTask !== null) {
  //       dispatch(updateTask(task));
  //       console.log(task);
  //       dispatch(clearEditTask());
  //       dispatch(toggleModal());
  //     }

  //     setTask({
  //       id: 0,
  //       title: "",
  //       description: "",
  //       tag: "",
  //       completed: false,
  //     });
  //   };

  //   const handleChange = (e: React.FormEvent) =>
  //     setTask({ ...task, [e.target.name]: e.target.value, id: Date.now() });

  const handleChange = (e: React.FormEvent) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  useEffect(() => {
    currentTask !== null
      ? setTask(currentTask)
      : setTask({
          id: null,
          title: "",
          description: "",
          tag: "",
          completed: false,
        });
  }, [currentTask]);

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
            <>
              <button onClick={() => dispatch(toggleModal())}>Cancel</button>
              <button onClick={() => dispatch(clearEditTask())}>
                Clear Task
              </button>
            </>
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

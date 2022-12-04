import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/slices/taskSlice";

import "./searchForm.css";

export const SearchForm: React.FC = () => {
  //hooks
  const dispatch = useDispatch();
  //methods
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="task-function" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search tasks" />
      <button onClick={() => dispatch(toggleModal())}>Add a task</button>
    </form>
  );
};

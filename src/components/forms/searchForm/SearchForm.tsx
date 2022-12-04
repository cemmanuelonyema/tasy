import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  clearSearch,
  searchTask,
  toggleModal,
} from "../../../redux/slices/taskSlice";

import "./searchForm.css";

export const SearchForm: React.FC = () => {
  //local state
  const [query, setQuery] = useState<string>("");
  //hooks
  const dispatch = useDispatch();
  //methods
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.FormEvent) => {
    console.log(query);
    setQuery(e.target.value);
    console.log(query);
  };
  console.log(query);

  useEffect(() => {
    query !== "" ? dispatch(searchTask(query)) : null;
    console.log(query);
  }, [query]);

  return (
    <form className="task-function" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search tasks"
        onChange={handleChange}
        value={query}
      />
      <button onClick={() => dispatch(toggleModal())}>Add a task</button>
    </form>
  );
};

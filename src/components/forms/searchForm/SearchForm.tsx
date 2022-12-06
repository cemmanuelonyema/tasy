import React, { useState, useEffect, ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(query);
    const query = e.target.value;
    setQuery(e.target.value);
    console.log(query);
  };
  const handleClear = () => {
    setQuery("");
    dispatch(clearSearch());
  };
  useEffect(() => {
    query !== "" ? dispatch(searchTask(query)) : null;
    console.log(query);
  }, [query]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-group">
        <input
          type="text"
          placeholder="Search tasks"
          onChange={handleChange}
          value={query}
        />
        {query !== "" ? (
          <FaTimes className="clear-icon" onClick={handleClear} />
        ) : (
          ""
        )}
      </div>
      <button onClick={() => dispatch(toggleModal())}>Add a task</button>
    </form>
  );
};

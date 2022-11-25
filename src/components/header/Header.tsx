import React from "react";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="user-box">
          <h1>Hello, Emmanuel</h1>
          <p>It's a good day to be tasy</p>
        </div>
        <form className="task-function" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search tasks" />
          <button>Add a task</button>
        </form>
      </div>
    </header>
  );
};

import React from "react";
import "./header.css";

import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/taskSlice";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ modalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header__container">
        <div className="user-box">
          <h1>Hello, Emmanuel</h1>
          <p>It's a good day to be tasy</p>
        </div>
        <form className="task-function" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search tasks" />
          <button onClick={() => dispatch(toggleModal())}>Add a task</button>
        </form>
      </div>
    </header>
  );
};

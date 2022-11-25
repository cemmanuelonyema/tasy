import React from "react";
import "./modalbox.css";

export const ModalBox = () => {
  return (
    <div className="modalbox">
      <form className="form">
        <div className="box-header">
          <h2>New Task</h2>
          <select name="label">
            <option value="family">Family</option>
            <option value="professional">Professional</option>
            <option value="friend">Friend</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Task name" />
          <textarea placeholder=" Task Description(optional)" />
        </div>

        <div className="btns">
          <button>Cancel</button>
          <button>Add task</button>
        </div>
      </form>
    </div>
  );
};

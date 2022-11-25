import React from "react";
import "./tab.css";

export const Tab: React.FC = () => {
  return (
    <section>
      <div className="tab__container">
        <h2 className="tab-heading">Tasks</h2>
        <article className="tab__status">
          <div className="tab__status-1">Todo</div>
          <div className="tab__status-2">Completed</div>
        </article>
      </div>
    </section>
  );
};

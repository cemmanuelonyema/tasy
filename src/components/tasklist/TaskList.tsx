import React from "react";
import { Todo } from "../model";
import { TaskItem } from "../taskItem/TaskItem";
import "./tasklist.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskList: React.FC<Props> = ({
  todos,
  setTodos,
  modalOpen,
  setModalOpen,
}) => {
  return (
    <section className="tasklist">
      <div className="tasklist__container">
        <ul className="tasklist-ul">
          {todos?.map((todo) => (
            <TaskItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          ))}
        </ul>
        <ul className="tasklist-ul">
          {/* {todos?.map((todo) => (
            <TaskItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))} */}
        </ul>
      </div>
    </section>
  );
};

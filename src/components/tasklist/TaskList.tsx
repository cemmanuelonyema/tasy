import React from "react";
import { Todo } from "../model";
import { TaskItem } from "../taskItem/TaskItem";
import "./tasklist.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TaskList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <section>
      <ul className="task-list">
        {todos?.map((todo) => (
          <TaskItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </section>
  );
};

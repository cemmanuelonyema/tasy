import React from "react";
import { selectTasks } from "../../redux/slices/taskSlice";
import { TaskModel } from "../model";
import { TaskItem } from "../taskItem/TaskItem";
import "./tasklist.css";
import { useSelector } from "react-redux";

// interface Props {
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
//   modalOpen: boolean;
//   setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const TaskList: React.FC = (
  {
    //   todos,
    //   setTodos,
    //   modalOpen,
    //   setModalOpen,
  }
) => {
  const tasks: TaskModel[] = useSelector(selectTasks);
  console.log(tasks);
  return (
    <section className="tasklist">
      <div className="tasklist__container">
        <ul className="tasklist-ul">
          {tasks?.map((task: TaskModel) => (
            <TaskItem key={task.id} task={task} />
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

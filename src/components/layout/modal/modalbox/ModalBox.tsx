import { useState } from "react";
import { Todo } from "../../../model";
import "./modalbox.css";
import { useDispatch } from "react-redux";
import { addTask, toggleModal } from "../../../../redux/slices/taskSlice";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const ModalBox: React.FC<Props> = ({ setTodos, todos }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (task.title !== "") {
      dispatch(addTask(task));
    }

    setTask({
      id: 0,
      title: "",
      description: "",
      tag: "",
      completed: false,
    });
  };

  const handleChange = (e: React.FormEvent) =>
    setTask({ ...task, [e.target.name]: e.target.value, id: Date.now() });

  const dispatch = useDispatch();

  const [task, setTask] = useState({
    id: 0,
    title: "",
    description: "",
    tag: "",
    completed: false,
  });

  const { title, description, tag } = task;

  return (
    <div className="modalbox">
      <form className="form" onSubmit={handleSubmit}>
        <div className="box-header">
          <h2>New Task</h2>
          <select name="tag" value={tag} onChange={handleChange}>
            <option value="Family">Personal</option>
            <option value="professional">Professional</option>
            <option value="School">School</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Task name"
            value={title}
            name="title"
            onChange={handleChange}
          />

          <textarea
            placeholder=" Task Description "
            value={description}
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="btns">
          <button onClick={() => dispatch(toggleModal())}>Cancel</button>
          <button onClick={handleSubmit}>Add task</button>
        </div>
      </form>
    </div>
  );
};

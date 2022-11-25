import { useState } from "react";
import { Todo } from "../../../model";
import "./modalbox.css";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const ModalBox: React.FC<Props> = ({
  setModalOpen,
  modalOpen,
  setTodos,
  todos,
}) => {
  const [todo, setTodo] = useState<string>("");
  //   const [todo, setTodo] = useState({
  //     todo: "",
  //     des: "",
  //     tag: "",
  //   });

  console.log(todos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="modalbox">
      <form className="form" onSubmit={handleSubmit}>
        <div className="box-header">
          <h2>New Task</h2>
          <select name="label">
            <option value="family">Family</option>
            <option value="professional">Professional</option>
            <option value="friend">Friend</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Task name"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {/* <textarea placeholder=" Task Description(optional)" /> */}
        </div>

        <div className="btns">
          <button onClick={() => setModalOpen(false)}>Cancel</button>
          <button>Add task</button>
        </div>
      </form>
    </div>
  );
};

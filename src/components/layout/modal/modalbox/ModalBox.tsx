import { useState } from "react";
import { Todo } from "../../../model";
import "./modalbox.css";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../redux/slices/taskSlice";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const ModalBox: React.FC<Props> = ({ setTodos, todos }) => {
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

  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(toggleModal())}>Cancel</button>
          <button>Add task</button>
        </div>
      </form>
    </div>
  );
};

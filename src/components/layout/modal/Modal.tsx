import React, { Fragment } from "react";
import { Todo } from "../../model";
import "./modal.css";
import { ModalBox } from "./modalbox/ModalBox";

import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../../redux/slices/taskSlice";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Modal: React.FC<Props> = ({ setTodos, todos }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <Fragment>
      {isModalOpen && (
        <section className="overlay">
          <ModalBox todos={todos} setTodos={setTodos} />
        </section>
      )}
    </Fragment>
  );
};

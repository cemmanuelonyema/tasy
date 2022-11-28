import React, { useState, Fragment } from "react";
import { Todo } from "../../model";
import "./modal.css";
import { ModalBox } from "./modalbox/ModalBox";

import { useSelector, useDispatch } from "react-redux";
import { selectIsModalOpen } from "../../../redux/slices/taskSlice";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Modal: React.FC<Props> = ({
  setModalOpen,
  modalOpen,
  setTodos,
  todos,
}) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <Fragment>
      {isModalOpen && (
        <section className="overlay">
          <ModalBox
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            todos={todos}
            setTodos={setTodos}
          />
        </section>
      )}
    </Fragment>
  );
};

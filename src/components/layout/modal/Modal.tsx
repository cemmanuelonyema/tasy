//imports
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./modal.css";
import { ModalBox } from "./modalbox/ModalBox";
import { selectIsModalOpen } from "../../../redux/slices/taskSlice";

export const Modal: React.FC = () => {
  //hooks
  const isModalOpen = useSelector(selectIsModalOpen);

  //return
  return (
    <Fragment>
      {isModalOpen && (
        <section className="overlay">
          <ModalBox />
        </section>
      )}
    </Fragment>
  );
};

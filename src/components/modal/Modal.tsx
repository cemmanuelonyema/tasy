//imports
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./modal.css";
import { Taskform } from "../forms/taskform/Taskform";
import { selectIsModalOpen } from "../../redux/slices/taskSlice";

export const Modal: React.FC = () => {
  //hooks
  const isModalOpen = useSelector(selectIsModalOpen);

  //return
  return (
    <Fragment>
      {isModalOpen && (
        <section className="overlay">
          <Taskform />
        </section>
      )}
    </Fragment>
  );
};

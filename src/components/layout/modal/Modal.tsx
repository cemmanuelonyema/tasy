import React, { useState, Fragment } from "react";
import "./modal.css";
import { ModalBox } from "./modalbox/ModalBox";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = ({ setModalOpen, modalOpen }) => {
  return (
    <Fragment>
      {modalOpen && (
        <section className="overlay">
          <ModalBox setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </section>
      )}
    </Fragment>
  );
};

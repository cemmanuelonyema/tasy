import React from "react";
import "./modal.css";
import { ModalBox } from "./modalbox/ModalBox";

export const Modal = () => {
  return (
    <section className="overlay">
      <ModalBox />
    </section>
  );
};

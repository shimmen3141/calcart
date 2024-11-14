import React from "react";
import { CloseButton, useModals, useScrollLock } from "../../features/index";
import { ModalContents } from "./ModalContents";
import "./Modal.scss";

const Modal = ({ id }) => {
  const { handleCloseModal, isModalOpen } = useModals();
  const { targetRef } = useScrollLock({ isScrollLocked: isModalOpen(id) });
  const { title, content } = ModalContents[id] || ModalContents.default;

  return isModalOpen(id) ? (
    <div>
      <div className="overlay" onClick={() => handleCloseModal(id)}></div>
      <div className="modal-window" ref={targetRef}>
        <div className="header">
          <CloseButton onClick={() => handleCloseModal(id)} />
          {title}
        </div>
        <div className="main">{content}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;

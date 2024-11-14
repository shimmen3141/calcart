import React from "react";
import { CloseButton, useModal, useScrollLock } from "../../features/index";
import { modalContents } from "./modalContents";
import "./Modal.scss";

const Modal = ({ id }) => {
  const { openedModal, handleCloseModal } = useModal();
  const { targetRef } = useScrollLock({ isScrollLocked: openedModal });
  const { title, content } = modalContents[id] || modalContents.default;

  return openedModal ? (
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

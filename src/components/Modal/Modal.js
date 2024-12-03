import React from "react";
import { CloseButton } from "components";
import { useModal } from "contexts";
import { useScrollLock } from "hooks";
import { modalContents } from "./modalContents";
import "./Modal.scss";

const Modal = () => {
  const { openedModal, handleCloseModal } = useModal();
  const { targetRef } = useScrollLock({ isScrollLocked: openedModal });
  const { title, content } = modalContents[openedModal] || modalContents.default;

  return openedModal ? (
    <div>
      <div className="overlay" onClick={() => handleCloseModal(openedModal)}></div>
      <div className="modal-window" ref={targetRef}>
        <div className="header">
          <CloseButton onClick={() => handleCloseModal(openedModal)} />
          {title}
        </div>
        <div className="main">{content}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;

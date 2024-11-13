import React from "react";
import { CloseButton, useScrollLock } from "../../features/index";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  const { targetRef } = useScrollLock({ isScrollLocked: isOpen });

  return isOpen ? (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-window" ref={targetRef}>
        <div className="header">
          <CloseButton onClick={onClose} />
          {title}
        </div>
        <div className="main">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;

import React from "react";
import { CloseButton, useScrollLock } from "../../index";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {

    const { targetRef } = useScrollLock({ isScrollLocked: isOpen });

  return isOpen ? (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content" ref={targetRef}>
        <h2>{title}</h2>
        {children}
        <CloseButton onClick={onClose} />
      </div>
    </div>
  ) : null;
};

export default Modal;

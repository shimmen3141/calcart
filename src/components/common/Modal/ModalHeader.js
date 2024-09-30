import React from "react";
import { CloseButton } from "../../index";
import "./Modal.css";

const ModalHeader = (title, children) => {
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-window" ref={targetRef}>
        {children}
      </div>
    </div>
  );
};

export default ModalHeader;

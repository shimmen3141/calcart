import { CloseButton } from "../../index";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  return isOpen ? (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
        <CloseButton onClick={onClose} />
      </div>
    </div>
  ) : null;
};

export default Modal;

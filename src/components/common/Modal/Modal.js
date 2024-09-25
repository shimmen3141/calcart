import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  return isOpen ? (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content" >
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default Modal;

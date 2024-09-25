import "./CloseButton.css";

const CloseButton = ({ onClick, disabled }) => {
  return (
    <div className="closeButton" onClick={onClick} disabled={disabled}></div>
  );
};

export default CloseButton;
